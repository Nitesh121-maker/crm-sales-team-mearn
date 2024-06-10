import React, { useEffect,useState } from 'react'
import '../css/newlead.css';
import { FaBackward, FaForward } from 'react-icons/fa';
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
    <div className="list-container">
        <h3>New Leads</h3>
        <div className="list-header">
            <div>Full Name</div>
            <div>Email</div>
            <div>Phone Number</div>
            <div>Requirements</div>
            {/* <div>Company</div> */}
        </div>
        {
            Array.isArray(newcreatedLeads) && newcreatedLeads.length> 0 ?(
                newcreatedLeads.map((leads,index) => (
                    <div key={index} className={`list-item ${index % 2 === 0 ? 'even' : 'odd'}`} onClick={() => handleClick(leads)}>
                        <div>{leads.fullname}</div>
                        <div>{leads.email}</div>
                        <div>{leads.number}</div>
                        <div>{leads.requirements}</div>
                    </div>
                    
                    ))
            ):(
                <div className="list-item">
                    <div>No new leads</div>
                </div>
            )
        }
        <button onClick={goToPreviousPage} disabled={pageNumber === 1}><FaBackward/></button>
           <span>Page {pageNumber}</span>
        <button onClick={goToNextPage}><FaForward/></button>
    </div>
  )
}

export default Newlead