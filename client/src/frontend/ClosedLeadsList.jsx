import React, { useEffect,useState } from 'react'
// import '../css/closedleadlist.css'
import { FaStepBackward, FaArrowLeft } from 'react-icons/fa'
const ClosedLeadsList = ({handleClosedLeadsChat,closedLeadslist}) => {
const handleClick =  (leads,e) =>{
    console.log('Leads',leads);
    handleClosedLeadsChat(leads);
}
  return (
        <div className="row">
            <div className="mt-r col-lg-12 col-md-12">
                
                <div className="card">
                    <div className="card-body">
                         <a href="/sales-dashboard"><button type='button'><FaArrowLeft/></button></a>
                        <h5 className="mt-2 text-white card-title">Closed Leads</h5>
                        <div className="responsive">
                            <table className="table table-hover text-white progress-table text-center table">
                                <thead className="thead-light text-uppercase">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope='col'>Requirements</th>
                                        <th scope='col'>Reason</th>
                                    </tr>
                                </thead>
                                <tbody className='text-uppercase'>
                                    {
                                        Array.isArray(closedLeadslist) && closedLeadslist.length>0 ?(
                                            closedLeadslist.map((leads,index)=>(
                                                <tr onClick={() => handleClick(leads)}>
                                                    <td>{leads.fullname}</td>
                                                    <td>{leads.email}</td>
                                                    <td>{leads.number}</td>
                                                    <td>{leads.requirements}</td>
                                                    <td>{leads.reason}</td>
                                                    {/* <td><button className='btn-rounded btn-fixed-w mb-3 mr-2 btn btn-outline-primary'>status</button></td> */}
                                                </tr>
                                            ))
                                        ):(
                                            <tr>No Closed data</tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ClosedLeadsList