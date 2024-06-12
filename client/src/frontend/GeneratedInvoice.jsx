import React, { useState,useEffect } from 'react'
import '../css/generatedInvoice.css'
const GeneratedInvoice = () => {
    const sales_person_id= sessionStorage.getItem( 'unique_id');
    const  [invoicedata, setinvoiceData] = useState([]);
    useEffect(() => {
        const getinvoicedata = async()=>{
            try {
                const response = await fetch(`http://192.168.1.13:3002/invoice-details/${sales_person_id}`);
                const data = await response.json();
                setinvoiceData(data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        }
        getinvoicedata();
    }, []);
    console.log('invoicedata',invoicedata);
  return (
    <div className='GeneratedInvoice'>
        <h3>Generated Invoice</h3>
        <table class="invoice-table">
        <thead>
            <tr>
                <th>Client Company</th>
                <th>Invoice Number</th>
                <th>Invoice Date</th>
                <th>Preview</th>
            </tr>
        </thead>
        <tbody>
            {
                Array.isArray(invoicedata) && invoicedata.length > 0 ? (
                    invoicedata.map((data, index) => (
                        <tr key={index}>
                            <td>{data.company}</td>
                            <td>{data.invoice_number}</td>
                            <td>{data.invoice_date}</td>
                            <td>
                                <a href={`http://192.168.1.13:3002/downloads/${data.unique_id}.pdf`} 
                                className='btn-rounded btn-fixed-w btn btn-outline-primary' 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    Preview
                                </a>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colspan="3">No Data</td>
                    </tr>
                )
            }
        </tbody>
    </table>
    </div>
  )
}

export default GeneratedInvoice