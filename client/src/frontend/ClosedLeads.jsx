import React, { useState } from 'react'
import '../css/closedlead.css'
function ClosedLeads({ClosedLeads}) {
  const sales_person_id = sessionStorage.getItem('unique_id');
  console.log('sales_person_id:', sales_person_id);
  const [message, setMessage] = useState('');
  
  console.log('Closed Lead:',ClosedLeads)
    const [closingstatement, setClosingStatement]=useState({
        finalrequirement: '',
        closingreason: ''
    });

    const handleClosingChange =(e) =>{
        setClosingStatement({...closingstatement,[e.target.name]:[e.target.value]});
    }
    const handleSubmit  = async (e) =>{
        e.preventDefault();
        try {
            const response = await fetch('http://192.168.1.10:3002/closedlead',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    created_at: ClosedLeads.created_at,
                    sales_person_id: sales_person_id,
                    clientid:  ClosedLeads.unique_id,
                    name: ClosedLeads.fullname,
                    email: ClosedLeads.email,
                    phone: ClosedLeads.number,
                    finalrequirement: closingstatement.finalrequirement,
                    closingreason: closingstatement.closingreason
                })
                
            });
            const data = await response.json();
            setMessage(data.message);
            setTimeout(() => {
                window.location.reload();
            }, 5000);
            if (!response.ok) {
                throw new Error('Network response was not ok in client side ClosedLeads component');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

  return (
    <div className="closedleadmain">
        <div className="closedleadform">
        {message && <p className='message'>{message}</p>}
            <form  method="post" onSubmit={handleSubmit}>
                <div className="closedleadform-input">
                    <textarea name="finalrequirement" id="" cols="30" rows="5" value={closingstatement.finalrequirement} onChange={handleClosingChange} placeholder='final requirement....' required></textarea>
                </div>
                <div className="closedleadform-input">
                    <textarea name="closingreason" id="" cols="30" rows="5" value={closingstatement.closingreason} onChange={handleClosingChange}placeholder='closing reason....' required></textarea>
                </div>
                <div className="closedlead-submit-button">
                    <button type="submit">Close Lead</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ClosedLeads