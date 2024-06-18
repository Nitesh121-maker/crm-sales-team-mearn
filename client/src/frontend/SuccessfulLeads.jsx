import React, { useEffect, useState } from 'react'
import '../css/closedleadlist.css'
import {FaArrowLeft,FaExternalLinkAlt} from  'react-icons/fa'
const SuccessfulLeads = ({successLead,errormessage,handleDelivereddata}) => {


  return (
    <div className="closed-list-container">
      <div className="row">
         <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="card">
               <div className="card-body">
                  <a href="/sales-dashboard"><button type='button'><FaArrowLeft/></button></a>
                  <h5 className="mt-2 text-white card_title">Successful Leads</h5>
                  <div className="successful single-table col-lg-12 col-md-12 col-sm-12">
                     <div className="table-responsive">
                        <table className="table table-hover text-white progress-table text-center">
                              <thead className="thead-light text-uppercase">
                                 <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope='col'>Delivered</th>
                                    <th scope='col'>Amount</th>
                                    <th scope='col'>Invoice</th>

                                 </tr>
                              </thead>
                              <tbody className='text-uppercase'>
                                 {Array.isArray(successLead) && successLead.length > 0 ? (
                                    successLead.map((lead, index) => (
                                          <tr key={index}>
                                             <td>{lead.fullname}</td>
                                             <td>{lead.email}</td>
                                             <td>{lead.phone}</td>
                                             <td>{lead.invoice_number}</td>
                                             <td>{lead.amount}</td>
                                             <td><button onClick={()=>handleDelivereddata(lead)}><FaExternalLinkAlt/></button></td>
                                          </tr>
                                    ))
                                 ) : (
                                    <tr>
                                          <td colSpan="6">No Data in Successful</td>
                                    </tr>
                                 )}
                              </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default SuccessfulLeads