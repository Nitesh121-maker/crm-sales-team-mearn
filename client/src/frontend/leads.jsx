import React, { useState,useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/leads.css';
import { FaFile } from 'react-icons/fa';
import { IoSendSharp } from "react-icons/io5";
import {FaArrowLeft} from  'react-icons/fa'

function Leads({ leadData,handleClosedLead,handleInvoice }) {
  const uniqueid = leadData.unique_id;
   console.log('Lead data',leadData);
  const [successleadmessage,setsuccessleadMessage]=useState([]);
  const [closingsuccess, setclosingsuccess]=useState(false);
  const [sucessemessage,setsucessemessage]=useState([]);


  const [formData, setFormData] = useState({
    requirements: '',
    reminder:'',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://192.168.1.13:3002/newmessages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
         
          uniqueid: leadData.unique_id,
          message: formData.requirements,
          reminder: formData.reminder,
        }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Clear the textarea after successful submission
      setFormData({ requirements: '' });
      setFormData({ reminder: '' });
    } catch (error) {
      console.error('Error:', error);
      // Optionally, you can display an error message to the user
    }
  };


  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
   
      const response = await fetch(`http://192.168.1.13:3002/clientmessage/${uniqueid}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
      // Handle error
    }
  };

  // Call the fetchMessages function repeatedly at regular intervals
  useEffect(() => {
    const intervalId = setInterval(fetchMessages, 1000/2); // Fetch messages every 5 seconds

    // Clean up function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [leadData]); // Re-run effect whenever leadData changes

  // const handleclosedleadClick = (closedleaddata) => {
  //   handleClosedLead(closedleaddata);
  // };
  // Lead Success API call
  const handleleadsuccess = async (e)=>{
    e.preventDefault();
    try {
      const response = await fetch('http://192.168.1.13:3002/successlead',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uniqueid  : leadData.unique_id,
          name: leadData.fullname,
          email: leadData.email,
          phone: leadData.number,
        }),
      });
      
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log('Result:',result);
      setsuccessleadMessage(result);
      setclosingsuccess(true);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }

  }

  const handlelastmessage = async (e)=>{
  
    try {
      const response = await fetch('http://192.168.1.13:3002/notification');
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
    } catch (error) { 
      console.error('Error fetching messages:', error);
    }
  }

  const [invoiceFile, setInvoiceFile] = useState(null);
  const [emailsentmessage, Setemailsentmessage] = useState('');
  const handleFileChange = (e) => {
      const file = e.target.files[0];
      setInvoiceFile(file);
  };

  const invoiceUpload = async (e) => {
    e.preventDefault();

    try {
        const formData = new FormData();
        formData.append('invoice', invoiceFile);
        formData.append('to', leadData.email);
        formData.append('subject', 'Invoice');
        formData.append('message', 'Please find the attached invoice');

        const response = await fetch(`http://192.168.1.13:3002/mail/${uniqueid}`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();
        Setemailsentmessage(result);
        console.log('Email sent successfully');
        // Handle success, reset form, show success message, etc.
    } catch (error) {
        console.error('Error in sending mail:', error);
        // Handle error, show error message, etc.
    }
};

  //  Edit Client4
  const[editform,seteditform] = useState({
    email:''
  })
  const handleEditchange = (e) =>{
    seteditform({...editform,[e.target.name]:e.target.value})
  }
  const handleEditClient = async (e) => {
    e.preventDefault();
    try {
      const responce = await fetch(`http://192.168.1.13:3002/edit-client/${uniqueid}`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email:editform.email,
        })
      })
      const data = await responce.json();
      if(responce.ok){
        setsucessemessage(data);
        console.log('Client updated successfully');
      }
    } catch (error) {
      console.log('error',error)
    }
  }
  return (
    <><a href="/sales-dashboard"><button type='button'><FaArrowLeft /></button></a>
    <div className="row conversation-page">

      <div className="lead-actions">
        {closingsuccess && <p className='message'>{successleadmessage.Message}</p>}
        {emailsentmessage && <p className='message'>{emailsentmessage.emailsentmessage}</p>}
        <div className="action">
          <button type="button" className="action-button close" onClick={() => handleClosedLead(leadData)}>Close</button>
                {/* <form   onSubmit={handleleadsuccess}>
            <button type="submit" className="action-button successful"  >Successful</button>
          </form> */}
          <div className="generate-invoice">
            <button className='btn-fixed-w mb-3 mr-2 btn btn-outline-success' type="button" onClick={() => handleInvoice(leadData)}>Generate Invoice</button>
          </div>
          <div className="invoice">
            <form className="d-flex styled-form" onSubmit={invoiceUpload}>
              {/* <label htmlFor="file-input">
                <FaFile />
                Choose File
              </label> */}
              <p className='text-white'></p>
              <input className='form-control' type="file" name="invoice"  />

              <button type="submit" className="btn-rounded btn-fixed-w mr-2 btn btn-outline-success">
                  <IoSendSharp />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="client-conversation-info d-flex col-md-8 gap-2 mt-3">
        <div className="client-info col-md-5">
          <div className="card">
            <div className="card-body text-white">
              <h5 className="card-title">{leadData.fullname}</h5>
              <p className="card-text">Primary Requirements:{leadData.requirements}</p>
              <p className="card-text">Email:{leadData.email}</p>
              <p className='card-text'>Phone:{leadData.number}</p>
              <p className='card-text'>Commpany:{leadData.company}</p>
            </div>
            <div className="card-body">
               <form action="" onSubmit={handleEditClient}>
                <label className='text-white'>Edit Email:</label>
                <input type="email" name='email' className='form-control' placeholder='New email' value={editform.email} onChange={handleEditchange}/>
                <button type='submit' className='mt-2 btn-rounded btn-fixed-w mb-3 mr-2 btn btn-outline-success'>Edit</button>
               </form>
            </div>
          </div>
        </div>
        <div className="conversation col-md-6">
          <div className="card old-message">
            {/* Display the previous message or conversation */}
            <div className="chat-header">
              <p className='text-white'>Client Name: {leadData.fullname}</p>
            </div>
            <div className="chat">

              <div className="sales-chat">
                {leadData.requirements}

              </div>
              {messages.map((message, index) => (
                <>
                  {message.adminmessage &&
                    <div className="admin-chat">
                      {message.adminmessage} <br />
                      <span>{new Date(message.sent_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>}
                  {message.message &&
                    <div className="sales-chat" key={index}>
                      {message.message} <br />
                      <span>{new Date(message.sent_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>}

                </>
              ))}
            </div>

          </div>
          <div className="card new-conversation">
            {/* Form for new conversation */}
            <form onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission behavior
              handleSubmit(e); // Call the handleSubmit function
              handlelastmessage(); // Call the handlelastmessage function
            } }>
              <div className="form-control">
                <textarea
                  className='form-control'
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Enter requirements..."
                  required
                ></textarea>
                <input className='form-control mt-1' type="datetime-local" name="reminder" id="" value={formData.reminder} onChange={handleChange} />
              </div>
              <button type="submit" onClick={() => handlelastmessage()}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div></>
  );
}

export default Leads;
