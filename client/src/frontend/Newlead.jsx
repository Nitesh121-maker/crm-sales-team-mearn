import React, { useEffect,useState } from 'react'
import { FaBackward, FaForward } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/newlead.css';


const Newlead = ({handleLeads}) => {
    const[newcreatedLeads,setNewcreatedLeads]=useState("");

    const [pageNumber, setPageNumber] = useState(1); // Current page number
    const sperson_unique_id = sessionStorage.getItem( 'unique_id');
    console.log('Sales Person Table',sperson_unique_id);
    useEffect(() => {
      const newleads = async () => {
          try {
              const response = await fetch(`http://192.168.1.13:3002/newclient/${sperson_unique_id}?pageNumber=${pageNumber}`);
              if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }
  
              const nealeads = await response.json();
              console.log(nealeads);
              setNewcreatedLeads(nealeads);
          } catch (error) {
              console.log(error);
          }
      };
      newleads();
  }, [pageNumber]);

    const handleClick = (lead) => {
        // Call handleLeads function with selected lead's data
        handleLeads(lead);
    };

    const goToPreviousPage = () => {
      setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
    };

    const goToNextPage = () => {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    };
  return (
    <div className="row">
        <div className="mt-r col-lg-12">
            <div className="card">
                <div className="card-body">
                    <h3 className="card_title">
                        New Leads
                    </h3>
                    <div className="single-table">
                        <div className="table-responsive">
                            <table className="mb-0 table-hover progress-table text-center table">
                                <thead className='text-uppercase'>
                                    <tr>
                                        <th scope='col'>Full Name</th>
                                        <th scope='col'>Email</th>
                                        <th scope='col'>Phone</th>
                                        <th scope='col'>Requirements</th>
                                    </tr>
                                </thead>
                                <tbody className='text-uppercase'>
                                {
                                    Array.isArray(newcreatedLeads) && newcreatedLeads.length> 0 ?(
                                        newcreatedLeads.map((leads,index) => (
                                            <tr key={index}  onClick={() => handleClick(leads)}>
                                                <td>{leads.fullname}</td>
                                                <td>{leads.email}</td>
                                                <td>{leads.number}</td>
                                                <td>{leads.requirements}</td>
                                            </tr>
                                            
                                            ))
                                    ):(
                                        <td>No new leads</td>
                                    )
                                }
                                    
                                    
                                </tbody>
                            </table>
                        <div className="mt-2">
                        <button className='btn-rounded btn-fixed-w mr-2 btn btn-outline-success' onClick={goToPreviousPage} disabled={pageNumber === 1}><FaBackward/></button>
                              <span className='text-white'>Page {pageNumber}</span>
                            <button className='btn-rounded btn-fixed-w mr-2 btn btn-outline-success' onClick={goToNextPage}><FaForward/></button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default Newlead