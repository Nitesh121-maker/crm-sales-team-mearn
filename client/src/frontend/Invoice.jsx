import React,{useState,useEffect}from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/invoice.css';
import Tradeimexlogo from '../img/logo.png';
import Sign from '../img/Sign_of_director.png';
import Stamp from '../img/stamp_tradeimex.png';
import {FaArrowLeft} from  'react-icons/fa'



function Invoice({leadData,inVoiceClientdata,handleLeads}) {
    console.log('Invoice Data',inVoiceClientdata);
    const sales_person_id = sessionStorage.getItem('unique_id');
    console.log('sales_person_id:', sales_person_id);
    const handlePrint =()=>{
        const invoicecontainer = document.getElementsByClassName('invoice-format');
        if (invoicecontainer) {
            window.print();
        } else {
            console.error('Invoice container not found.');
        }
    }
//   table data
    const [rows, setRows] = useState([{ database: '', hscode: '', period: '', currency: '',tax:'', amount: '' }]);
    console.log("Table Rows:", rows);
    
    const handleChange = (index, fieldName, value) => {
      const updatedRows = [...rows];
      updatedRows[index][fieldName] = value;
      setRows(updatedRows);
    };

    const addRow = () => {
      setRows([...rows, { database: '', hscode: '', period: '', currency: '',tax:'', amount: '' }]);
    };
  
    const removeRow = (index) => {
      const updatedRows = [...rows];
      updatedRows.splice(index, 1);
      setRows(updatedRows);
    };

    // Form Data
    const [invoicefields, setinvoicefields] = useState({
        addressone:'',
        gst_vat:'',
        invoice_date:'',
        invoice_serial:'',
    })
    console.log('Invoice Fields ', invoicefields);
    const handlefieldschange =(e)=>{
        setinvoicefields({
            ...invoicefields,
            [e.target.name]:
            e.target.value
        })
    }
    // Net Total of amount
    const[nettotal,setnetTotal] = useState(0);
    const[cgsttax,setcgstTax] = useState(0);
    const[igsttax,setigstTax] = useState(0);
    const[total,setTotal] = useState(0);

    useEffect(() => {
        const totalamount = ()=>{
             let sum = 0;
             let cgstTax = 0;
             let igstTAX = 0;
             let total = 0;
             
             for (const row of rows) {    
                console.log('TAx',row.tax)          
                sum += parseFloat(row.amount); 
                if (row.tax==='CGST') {
                    const tax = sum * 0.18;     
                    cgstTax = parseFloat(tax.toFixed(2));
                    total = (sum + cgstTax);  
                } else if (row.tax==='IGST'){
                    const tax = sum * 0.18;     
                    igstTAX = parseFloat(tax.toFixed(2));
                    total = (sum + igstTAX);  
                }   
                      
             }
             setnetTotal(sum);       
             setcgstTax(cgstTax);
             setTotal(total);
             setigstTax(igstTAX)
        }
        totalamount();
      }, [rows]);
    console.log('Net Amount', nettotal);
    console.log('Total Amount', total);
    // Invoice information 

    const handleInvoiceInfo = async(e) => {
        let  invoice_no = "TI/24-25/"+invoicefields.invoice_serial
        try {
            const response =  await fetch('http://192.168.1.10:3002/invoice-info', {
              method:'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                sales_person_id:sales_person_id,
                unique_id: inVoiceClientdata.unique_id,
                company :  inVoiceClientdata.company,
                invoice_date: invoicefields.invoice_date,
                invoice_no: invoice_no,
                fullname:inVoiceClientdata.fullname,
                email:inVoiceClientdata.email,
                phone:inVoiceClientdata.number
              }),
            });
            const data = await response.json();
        } catch (error) {
            console.log('Error', error);

        }
    }
    function handleButtonClick() {
        handleInvoiceInfo();
        handlePrint();
      }

    // Total mount after tax 
  return (
     <>
        <div className="chat-back" onClick={()=>handleLeads(leadData)}><button><FaArrowLeft/></button></div>
     <div className="invoice-main ">.
       
          <div className="invoice-form">
        
              <h3>Invoice Form</h3>
              <form >

                <div className="invoice-group">
                    <input type="text" name="addressone" placeholder="Address one..." value={invoicefields.addressone} onChange={handlefieldschange}/>
                </div>

                <div className="invoice-group">
                    <input type="text" name="gst_vat" placeholder="GST/VAT" value={invoicefields.gst_vat} onChange={handlefieldschange}/>
                </div>
                <div className="invoice-group">
                    <input type="number" name="invoice_serial" placeholder="Invoice no..." value={invoicefields.invoice_serial} onChange={handlefieldschange}/>
                </div>
                <div className="invoice-group">
                    <input type="date" name="invoice_date" placeholder="Date..." value={invoicefields.invoice_date} onChange={handlefieldschange}/>
                </div>

                {rows.map((row, index) => (
                    <div key={index} className="invoice-group-table">
                    <div className="invoice-group">
                        <input type="text" value={row.database} onChange={(e) => handleChange(index, 'database', e.target.value)} placeholder="Database" />
                    </div>
                    <div className="invoice-group">
                        <input type="text" value={row.hscode} onChange={(e) => handleChange(index, 'hscode', e.target.value)} placeholder="HS CODE..." />
                    </div>
                    <div className="invoice-group">
                        <input type="text"  value={row.period} onChange={(e) => handleChange(index, 'period', e.target.value)} placeholder="Choose Period"/>

                    </div>
                    <div className="invoice-group">
                        <select value={row.currency} onChange={(e) => handleChange(index, 'currency', e.target.value)}>
                        <option value="">Currency</option>
                        <option value="Doller">$</option>
                        <option value="Rs">₹</option>
                        <option value="Euro">€</option>
                        </select>
                    </div>
                    {row.currency === 'Rs' && (
                        <>
                            <div className="invoice-group">
                                <select name='tax'value={row.tax} onChange={(e) => handleChange(index, 'tax', e.target.value)}>
                                    <option value="">TAX</option>
                                    <option value="CGST">CGST+SGST</option>
                                    <option value="IGST">IGST</option>
                                </select>
                            </div>
                        </>
                        )}
                    <div className="invoice-group">
                        <input type="text" value={row.amount} onChange={(e) => handleChange(index, 'amount', e.target.value)} placeholder="Amount" />
                    </div>
                    <button type="button" onClick={() => removeRow(index)}>-</button>
                    </div>
                ))}
                <button type="button" onClick={addRow}>+</button>
                      
           </form>
           <button onClick={handleButtonClick}>Download Invoice</button>     
          </div>
          <div className="invoice-format" id='invoice-container'>
              <div className="invoice-format-inner">
                  <div className="format-header-logo">
                      <div className="logo-left">
                          <div className="tradeimex-logo">
                              <img src={Tradeimexlogo} alt="" srcset="" />
                          </div>
                          <div className="tradeimex-info">
                              <span className='span-one'>
                                  Tradeimex Info Solution Private Limited
                              </span><br />
                              <span className='span-two'>
                                  CIN Number : U72900DL2019PTC352374
                              </span><br />
                              <span className='span-three'>
                                  GST Number : 07AAHCT4138N1ZWIN
                              </span><br />
                          </div>
                      </div>
                  </div>
                  <div className="fromat-header-name">
                      <div className="fromat-header-line-left"></div>
                      <div className="name"><h2>INVOICE</h2></div>
                      <div className="format-header-line-right"></div>
                  </div>
                  <div className="format-details">
                      <div className="format-details-left">
                          <p>Invoice To :</p><br />
                          <span>{inVoiceClientdata.fullname}</span><br />
                          <span>{invoicefields.addressone}</span><br />
                          <span>{inVoiceClientdata.email}</span><br />
                          <span>{inVoiceClientdata.number}</span><br />
                          <span>{invoicefields.gst_vat}</span><br />
                      </div>
                      <div className="format-details-right">
                          <p>Invoice No # <span>TI/24-25/{invoicefields.invoice_serial}</span></p>
                          <span>Date : {invoicefields.invoice_date}</span><br />
                          <span>TradeImeX Info Solution Private Limited</span><br />
                          <span>367-368, 3rd Floor, Pocket 11 B,</span><br />
                          <span>Rohini Sector 23, New Delhi -110085</span><br />
                          <span>www.tradeimex.in</span><br />
                          <span>Email Id : info@tradeimex.in</span><br />
                      </div>
                  </div>
                  <div className="format-database-table">
                      <table className="invoice-table">
                          <thead className="table-header">
                              <tr>
                                  <th>SI. No</th>
                                  <th>Database</th>
                                  <th>SAC CODE</th>
                                  <th>HS CODE/ Product</th>
                                  <th>Time Period</th>
                                  <th>Amount</th>
                              </tr>
                          </thead>
                          <tbody className="table-body">
                            {Array.isArray(rows) && rows.length > 0 ?(
                                rows.map((tabledata,index)=>(
                                    <>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{tabledata.database}</td>
                                        <td>998598</td>
                                        <td>{tabledata.hscode}</td>
                                        <td>{tabledata.period}</td>
                                        <td>{tabledata.currency === 'Rs' ? `${tabledata.amount} ₹`
                                        :tabledata.currency === 'Doller' ? `${tabledata.amount} $`
                                        :tabledata.currency === 'Euro' ? `${tabledata.amount} €`:''}</td>
                                        
                                    </tr>
                                    </>
                                ))
                            ):(
                                   <td>No data Inserted</td>
                            )                               
                            }
                          </tbody>
                      </table>
                  </div>
                  <div className="invoice-billing">
                      <div className="invoice-billing-left">
                          <p className='invoice-account-details-header'>Account Details</p>
                          <div className="invoice-billing-left-sub">
                              <p><span>ACCOUNT NUMBER: </span><span></span><span>036705004479</span></p>
                              <p><span>ACCOUNT NAME:   </span><span></span><span>TRADEIMEX INFO SOLUTION PRIVATE LIMITED</span></p>
                              <p><span>BANK NAME:      </span><span></span><span>ICICI BANK</span></p>
                              <p><span>BANK ADDRESS:   </span><span></span><span>PLOT NO. 6, GARG TRADE CENTER,CC, SECTOR 11, ROHINI, NEW DELHI</span></p>
                              <p><span>IFSC CODE:      </span><span></span><span>ICIC0000367</span></p>
                              <p><span>MICR CODE:      </span><span></span><span>110229054</span></p>
                              <p><span>SWIFT CODE:     </span><span></span><span>ICICINBBCTS</span></p>
                          </div>
                      </div>
                      <div className="invoice-billing-right">
                          <div className="invoice-billing-right-sub">
                              <div className="invoice-billing-right-sub-left">
                                  <p><span>Net total</span>  </p>
                         
                                  {
                                        Array.isArray(rows) && rows.length > 0 ? (
                                            rows.some(tabledata => tabledata.tax === 'CGST') ? (
                                                <p>CGST+SGST</p>
                                            ) : (
                                                rows.some(tabledata => tabledata.tax === 'IGST') ? (
                                                    <p>IGST</p>
                                                ) : (
                                                    <p>TAX</p>
                                                )
                                            )
                                        ) : (
                                            <p>No data</p>
                                        )
                                    }       
                              </div>
                              <div className="invoice-billing-right-sub-right">
                                    <p>  <span>: {nettotal}</span></p>
                                    <p>
                                        <span>: {cgsttax !== 0 ? cgsttax :
                                            igsttax !== 0 ? igsttax :
                                            ''}₹</span>
                                    </p>
                              </div>
                          </div>
                          <div className="invoice-billing-total">
                              <div className="invoice-billing-total-left">
                                  <span>TOTAL</span>
                              </div>
                              <div className="invoice-billing-total-right">                                 
                               {
                                    Array.isArray(rows) && rows.length > 0 ? (
                                        <span>
                                            {rows[0].currency === 'Rs' ? `${total.toFixed(2)} ₹`
                                                : rows[0].currency === 'Doller' ? `${nettotal} $`
                                                    : rows[0].currency === 'Euro' ? `${nettotal} €`
                                                        : '0'}
                                        </span>
                                    ) : (
                                        <span>0</span>
                                    )
                                }                            
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="tradeimex-details">
                      <div className="term-conditions">
                          <p>
                              (1). TradeImeX® makes all efforts to provide an error free & timely report,
                              however the data is based on government sources and TradeImeX® does not
                              take any responsibility for its correctness, completeness, changes into the
                              formats, timely availability etc.
                          </p>
                          <p>
                              (2).No Liability including, but not limited to refunds is assumed towards
                              readers in the event of any such change.
                          </p>
                          <p>
                              (3).This transaction is subjected to the jurisdiction of Delhi court, India.
                          </p>
                          <p>
                              (4).This is the an undertaking that Purchaser/Subscriber will not reproduce,
                              sell, share, distribute, lease, rent, copy revise and modify the reports.
                          </p>
                          <p>
                              (5).TradeImeX® remains the owner of the information. Your rights are limited
                              to usage of the same for your internal business.
                          </p>
                          <p>
                              (6) Payment should be 100% advance by TTR
                              **I have read the above terms & conditions, and agree to the same
                          </p>
                      </div>
                      <div className="sign">
                          <div className="client-sign">
                              <div className='client-sign-line'></div>
                              <span>Client Signature</span>
                          </div>
                          <div className="deirector-sign">
                              <div className="img">
                                  <img src={Sign} alt="" />
                              </div>
                              <span>Authorised Signature</span>
                          </div>
                      </div>
                  </div>
                  <div className="stamp">
                      <div className="stamp-img">
                          <img src={Stamp} alt="" srcset="" />
                      </div>
                  </div>
              </div>
          </div>
      </div></>
  )
}

export default Invoice