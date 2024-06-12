import React,{ useEffect, useRef, useState } from 'react'
import '../css/index.css'
import Newlead from './Newlead'
import Leads from './leads';
import ClosedLeads from './ClosedLeads';
import ClosedLeadsList from './ClosedLeadsList';
import { FaBell,FaUser,FaExclamationTriangle } from 'react-icons/fa';
import Notificationpage from './Notification';
import SuccessfulLeads from './SuccessfulLeads';
import Invoice from './Invoice';
import ClosedLeadChat from './ClosedLeadChat';
import GeneratedInvoice from './GeneratedInvoice';
import DataDeliveryStatus from './DataDeliveryStatus';
import  { useNavigate } from 'react-router-dom';
import Chart from 'chart.js/auto';
// import axios from 'axios';

function Index() {
const [list, setList] = useState(true);
const [newlead,setNewlead] = useState(true);
const [message, setMessage] = useState("");
const [leads,setLeads] = useState(false);
const [selectedLead, setSelectedLead] = useState(null);
const [closedleadform, setclosedleadform] = useState(false);
const [closedleaddata, setClosedleaddata] = useState(null);
const [closedLeadlist, setClosedLeadList] = useState(false);
const [successLeads,setSucccessLeads] = useState(false);
const [notificationshow, setNotificationshow] = useState(false);
const [invoice, setInvoice] = useState(false);
const [invoiceData,setinvoiceData] = useState(null);
const [closedChat, setClosedChat ] = useState( false );
const [closedleadschat,setClosedleadschat] = useState( null );
const [generatedInvoice, setGeneratedInvoice] = useState( false );
const [isLogedin,setisLogedin] = useState( false );
const [salesdata,setsalesdata] = useState([]);
const [inprogrss,setInprogress] = useState([]);
const [dataDelivery,setdatadelivery] = useState(false);
const [successfulleadsdata,setsuccessfullleadsdata] = useState([]);
const navigate =  useNavigate();

// const handleList = () => {
//     setList(true);
//     setNewlead(false);
//     setLeads(false);
//     setclosedleadform(false);
//     setClosedLeadList(false);
//     setSucccessLeads(false);
//     setNotificationshow(false);
//     setInvoice(false);
// }
const handleLeads = (lead) => {
    setSelectedLead(lead);
    setLeads(true);
    setList(false);
    setNewlead(false);
    setclosedleadform(false);
    setClosedLeadList(false);
    setSucccessLeads(false);
    setNotificationshow(false);
    setInvoice(false);
    setClosedChat(false);
    setGeneratedInvoice(false);
    setdatadelivery(false);
}
const handleClosedLeads = (closedleaddata) => {
    // setclosedlead(true);
    setclosedleadform(prevState => !prevState)
    // setclosedleadform(true);
    setLeads(true);
    setClosedleaddata(closedleaddata);
    setList(false);
    setNewlead(false);
    setClosedLeadList(false)
    setSucccessLeads(false);
    setNotificationshow(false);
    setInvoice(false);
    setClosedChat(false);
    setGeneratedInvoice(false);
    setdatadelivery(false);
}

const handleClosedleadlist = ()=>{
    setClosedLeadList(true)
    setclosedleadform(false);
    setLeads(false);
    setList(false);
    setNewlead(false);
    setSucccessLeads(false);
    setNotificationshow(false);
    setInvoice(false);
    setClosedChat(false);
    setGeneratedInvoice(false);
    setdatadelivery(false);
}
const handleSuccessfulleadlist = ()=>{
    setSucccessLeads(true);
    setClosedLeadList(false)
    setclosedleadform(false);
    setLeads(false);
    setList(false);
    setNewlead(false);
    setNotificationshow(false);
    setInvoice(false);
    setClosedChat(false);
    setGeneratedInvoice(false);
    setdatadelivery(false);
}

const handleNotification = () => {
    setNotificationshow(prevState => !prevState);
    setNewlead(false);
    setSucccessLeads(false);
    setClosedLeadList(false)
    setclosedleadform(false);
    setLeads(false);
    setList(false);
    setClosedChat(false);
    setInvoice(false);
    setGeneratedInvoice(false);
    setdatadelivery(false);
}
const handleInvoice = (invoiceData) => {
    setClosedChat(false);
    setinvoiceData(invoiceData);
    setInvoice(true);
    setSucccessLeads(false);
    setClosedLeadList(false)
    setclosedleadform(false);
    setLeads(false);
    setList(false);
    setNewlead(false);
    setGeneratedInvoice(false);
    setdatadelivery(false);
}
const handleClosedLeadsChat = (leads) => {
    setClosedleadschat(leads);
    setGeneratedInvoice(false);
    setClosedChat(true);
    setInvoice(false);
    setSucccessLeads(false);
    setClosedLeadList(false)
    setclosedleadform(false);
    setLeads(false);
    setList(false);
    setNewlead(false);
    setdatadelivery(false);
}
const handleGeneratedInvoice = () =>{
    setGeneratedInvoice(true);
    setClosedChat(false);
    setInvoice(false);
    setSucccessLeads(false);
    setClosedLeadList(false)
    setclosedleadform(false);
    setLeads(false);
    setList(false);
    setNewlead(false);
    setdatadelivery(false);
}
const handleDelivereddata = (successfulleadsdata) =>{
    setdatadelivery(true);
    setGeneratedInvoice(false);
    setClosedChat(false);
    setInvoice(false);
    setSucccessLeads(false);
    setClosedLeadList(false)
    setclosedleadform(false);
    setLeads(false);
    setList(false);
    setNewlead(false);
    setsuccessfullleadsdata(successfulleadsdata);
}
// Login
const sperson_unique_id = sessionStorage.getItem( 'unique_id');
const password = sessionStorage.getItem( 'password');
const first_name = sessionStorage.getItem('first_name');
const last_name = sessionStorage.getItem('last_name');
const sales_person_name = first_name+" "+last_name;
const sales_person_email = sessionStorage.getItem('email');
useEffect(() => {
    // console.log('User Details',sperson_unique_id,password);
    if (sperson_unique_id&&password) {
        setisLogedin(!!sperson_unique_id);
        } else {
            console.log('No user found');
        }
}, []);
// Logout
const handleLogout = async () => {
    try {
        const response = await fetch('http://192.168.1.13:3002/logout', {
            method: 'POST', // Change to POST
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        if (data.message === 'Logout Successful.') {
            sessionStorage.removeItem('unique_id');
            sessionStorage.removeItem('password');
            navigate('/erp-login');
        }
    } catch (error) {
        console.error('Logout failed:', error);
    }
}

console.log('User Details',sperson_unique_id,password);
//##################### New Lead Api Call Start ###########################
const[formlead,setFormlead] = useState({
    sales_person_table:sperson_unique_id,
    fullname:'',
    email:'',
    phone:'',
    company:'',
    requirements:'',
    reminder:''
}
);

const handleChange =(e)=>{
    setFormlead({...formlead,[e.target.name]:e.target.value});
}

const createLead = async(e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://192.168.1.13:3002/createlead',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formlead)
        });
        const data = await response.json();
        setMessage(data.message);
        setTimeout(() => {
            window.location.reload();
        }, 5000);
    } catch (error) {
        setMessage('Error in adding lead');
    }
}
// ########################### End ################################
// ########################### Closed List Start ##################
const[closedLeadslist, setClosedLeadlist] = useState(['']);
useEffect(() => {
  const newclosedlead = async(e) => {
      try {
          const response = await fetch(`http://192.168.1.13:3002/closedLeadlist/${sperson_unique_id}`);
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`)
          }
          const data = await response.json();
          setClosedLeadlist(data);
      } catch (error) {
          console.log('Error',error);
      }
  }
  newclosedlead();
}, []);

// ########################### Closed List End #######################
//  ########################## Successful lead List Start ######################
const[successLead,setSucccessLead] = useState([]);
const[errormessage,seterrormessage] = useState("");
useEffect(() => {
 const fetchSuccessfulLeads = async () => {
    try {
       const response = await fetch(`http://192.168.1.13:3002/successfullead/${sperson_unique_id}`);
       if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
       }
       const data = await response.json();
       setSucccessLead(data);
    } catch (error) {
       seterrormessage('Error in fetching successful leads');
    }
 };

 fetchSuccessfulLeads();
}, []);
//  ########################## Successful lead List End ######################
// ########################### Get Notification Start ################################
const [notification,setNotification] = useState(['']);

useEffect(() => {
    const getNotification = async() => {
        try {
            const response = await fetch(`http://192.168.1.13:3002/notification-list/${sperson_unique_id}`);
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);  
            }
            const data = await response.json();
            setNotification(data);
            console.log('Data:',data);

        } catch (error) {
            console.error('Error fetching messages from last message:', error);
        }
    };
    getNotification();
}, []); 
// In-progress
useEffect(() => {
    const getInprogress = async(e)=>{
       try {
         const response = await fetch(`http://192.168.1.13:3002/in-progress/${sperson_unique_id}`);
         if(!response.ok){
            throw new Error(`Error! status:${response.status}`);
         }
         const data = await response.json();
         setInprogress(data);
       } catch (error) {
         seterrormessage(error)
       }
    }
    getInprogress();
}, []);
console.log('INprogress',inprogrss)
// Sales Data
useEffect(() => {
    const getsales = async(e) =>{
        try {
            const response = await fetch(`http://192.168.1.13:3002/sales-data/${sperson_unique_id}`);
            if(!response.ok){
                throw new Error(`Error! status: ${response.status}`);  
            }
            const data = await response.json();
            setsalesdata(data);
            console.log('Sales:',data);
        } catch (error) {
            console.error('Error fetching messages from last message:', error);
        }
    }
    getsales();
}, []);
// charts
const chartRef = useRef(null); // Reference to the canvas element
const chartInstanceRef = useRef(null); // Reference to the Chart instance

console.log('Sales Data ',salesdata);
useEffect(() => {

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      
      const data = monthNames.map((month, index) => {
        const monthIndex = String(index + 1).padStart(2, '0');
        const sale = salesdata.find(sale => sale.sale_month === `2024-${monthIndex}`);
        return {
          month,
          sales: sale ? sale.total_amount : 0,
        };
      });
      
      console.log(data);
    const ctx = chartRef.current?.getContext('2d');

    if (ctx) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy(); // Destroy previous chart instance if it exists
      }

      chartInstanceRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map(row => row.month),
          datasets: [
            {
              label: 'Monthly Sales',
              data: data.map(row => row.sales),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
    // return () => {
    //     if (chartInstanceRef.current) {
    //       chartInstanceRef.current.destroy(); // Cleanup on component unmount
    //     }
    //   };
  });

  

    //     const data = [
    //     { year: 2010, count: 10 },
    //     { year: 2011, count: 20 },
    //     { year: 2012, count: 15 },
    //     { year: 2013, count: 25 },
    //     { year: 2014, count: 22 },
    //     { year: 2015, count: 30 },
    //     { year: 2016, count: 28 },
    // ];

    // new Chart(
    //     document.getElementById('myChart'),
    //     {
    //         type: 'bar',
    //         data: {
    //             labels: data.map(row => row.year),
    //             datasets: [
    //                 {
    //                 label: 'Acquisitions by year',
    //                 data: data.map(row => row.count)
    //                 }
    //             ]
    //         }
    //     }
    //     );
    // })();

const notificationCount24HoursOld = notification.reduce((count, notification) => {
    const reminderTime = new Date(notification.reminder);
    const currentTime = new Date();  
    // const twentyFourHoursAgo = new Date(currentTime.getTime() - (24 * 60 * 60 * 1000)); // Subtract 24 hours from the current time

    // Check if last_seen time is 24 hours or more in the past
    // const is24HoursOrMore = lastSeenTime <= twentyFourHoursAgo;
    const isReminderTime = reminderTime <= currentTime;
    // If the notification is 24 hours or more old, increment the count
    if (isReminderTime) {
        return count + 1;
    } else {
        return count;
    }
}, 0);
// Closed List count
let  closeLeadcount = closedLeadslist.length||0;
let successLeadcount =  successLead.length||0;
let  inprogrssclient = inprogrss.length||0;


  return (
    <>
    {isLogedin&&
        <div>
            <div className="container-fluid bg-blue">
                <div className='container'>
                    <div className='nav'>
                        <div className="tradeimex">
                            <h2>TRADEIMEX</h2>
                        </div>
                        <div className="welcome">
                            <h2>Welcome {sales_person_name}</h2>
                        </div>
                        <div onClick={handleNotification} style={{ position: 'relative',cursor:'pointer' }}>
                            <FaBell />
                            {notificationCount24HoursOld > 0 && (
                                <span
                                style={{
                                    position: 'absolute',
                                    top: '-13px',
                                    right: '-15px',
                                    backgroundColor: 'red',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '20px',
                                    height: '20px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '14px',
                                    cursor:'pointer',
                                }}
                                >
                                {notificationCount24HoursOld}
                                </span>
                            )}
                            </div>
                        <div className="logout">
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-gray">
                <div className='row col-lg-12 col-md-12 col-sm-12'>
                    <div className="sidebar col-lg-3 col-md-3 col-sm-2">
                        <div className="profile">
                            <div className="profile-logo">

                            </div>
                            <div className="account-info">
                                <div className="account-info-option-one">
                                    <div className="user">
                                        <FaUser/>
                                    </div>
                                </div>
                                <div className="account-info-option-two">
                                    <div className="account-name">
                                        <span>{sales_person_email}</span>
                                    </div>
                                    <div className="account-email">
                                        <span>{sales_person_name}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="option">
                            <li>
                                <a href="/sales-dashboard">
                                    <span id='leadlist'><a href="/sales-dashboard">Home</a></span>
                                </a>
                            </li>
                            {/* <li>
                                <span id='leadlist' onClick={handleList}>Created Leads</span>
                            </li> */}
                            {/* <li>
                                <span >Succesfull Leads</span>
                            </li> */}
                            <li>
                                <span>Sales Stats</span>
                            </li>
                            <li>
                                <a href="#generated-invoices" >
                                <span onClick={handleGeneratedInvoice}>Generated Invoice</span>
                                </a>
                            </li>
                        </div>
                    </div>
                    {/* Create New Lead */}
                    <div className="hero-content col-lg-9 col-md-9">
                        { notificationshow&&
                            <Notificationpage notification={notification} handleLeads={handleLeads}/>
                        }
                        {newlead&&
                            <div className='hero-options'>
                                <div className="row gap-4 col-lg-12 p-6 justify-center">
                                    <div className="col-lg-3 col-md-3 lead-category closed-leads"  onClick={handleClosedleadlist}>
                                        <span>Closed Leads</span>
                                        <span>{closeLeadcount}</span>
                                    </div>
                                    <div className="col-lg-3 col-md-3 lead-category inprogrss-lead">
                                        <span>In Progress</span>
                                        <span>{inprogrssclient}</span>
                                    </div>
                                    <div className="col-lg-3 col-md-3 lead-category successfull-leads" onClick={handleSuccessfulleadlist}>
                                        <span>Successful Leads</span>
                                        <span>{successLeadcount}</span>
                                    </div>
                                </div>
                                <div className='container'>
                                    <div className='row col-lg-12'>
                                        <div className='col-lg-6'>
                                            <div className="form-container">
                                                <h3>Create New Lead</h3>
                                                {message && <p className='message'>{message}</p>}
                                                <form className="form" method='POST' onSubmit={createLead}>
                                                    <div className="form-group">
                                                    <input type="text" placeholder="Enter your full name" name='fullname'value={formlead.fullname} onChange={handleChange} className="input-field" required />
                                                    </div>
                                                    <div className="form-group">
                                                    <input type="email" placeholder="Enter your email address" name='email' value={formlead.email} onChange={handleChange} className="input-field" required/>
                                                    </div>
                                                    <div className="form-group">
                                                    <input type="tel" placeholder="Enter your phone number" name='phone' value={formlead.phone} onChange={handleChange} className="input-field" required/>
                                                    </div>
                                                    <div className="form-group">
                                                    <input type="text" name="company" id="" placeholder='Enter Company Name....' className='input-field' value={formlead.company} onChange={handleChange}/>
                                                    {/* <textarea placeholder="Enter requirements" name='requirements' value={formlead.requirements} onChange={handleChange} className="textarea-field" rows={10} required/> */}
                                                    </div>
                                                    <div className="form-group">                                  
                                                    <textarea placeholder="Enter requirements" name='requirements' value={formlead.requirements} onChange={handleChange} className="textarea-field"  required/>
                                                    </div>
                                                    <div className="form-group">     
                                                    <label htmlFor="">Set Reminder</label>                             
                                                    <input type="datetime-local" name="reminder" id="" className="input-field" value={formlead.reminder} onChange={handleChange}/>
                                                    </div>
                                                    <div className="form-group">
                                                    <button type="submit" className="submit-button">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div style={{ width: '500px', height: '500px' }}>
                                           <canvas ref={chartRef} id="myChart" width="500" height="500"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {/* New Client List */}
                        {list&&
                            <div className="new-lead">
                                <Newlead handleLeads={handleLeads}/>
                            </div>
                        }
                        {/* Selected Leads */}
                        {leads&&
                            <div className="lead">
                                <Leads leadData={selectedLead} handleClosedLead={handleClosedLeads} handleInvoice={handleInvoice}/>
                            </div>
                        }
                        {/* Close Leads */}
                        {closedleadform&&
                            <div className="closedlead">
                                <ClosedLeads ClosedLeads={closedleaddata}/>
                            </div>
                        }
                        {/* Closed Lead List */}
                        {closedLeadlist&&
                            <div className="closed-lead-list">
                                <ClosedLeadsList closedLeadslist={closedLeadslist} handleLeads={handleLeads} handleClosedLeadsChat={handleClosedLeadsChat} />
                            </div>
                        }
                        {successLeads&&
                            <div className="SuccessfulLeads">
                                <SuccessfulLeads successLead={successLead} errormessage={errormessage} handleDelivereddata={handleDelivereddata}/>
                            </div>
                        }
                        {invoice&&
                            <div className="invoice">
                                <Invoice leadData={selectedLead} inVoiceClientdata={invoiceData} handleLeads={handleLeads}/>
                            </div>
                        }
                        {closedChat&&
                            <div className="closedchat">
                                <ClosedLeadChat closedLeadchat={closedleadschat}  handleClosedleadlist={handleClosedleadlist}/>
                            </div>
                        }
                        {generatedInvoice&&
                            <div className="generatedinvoice">
                            < GeneratedInvoice/>
                            </div>
                        }
                        {dataDelivery&&
                            <div className="DataDelivery">
                            < DataDeliveryStatus successLead={successLead} handleDelivereddata={handleDelivereddata} handleSuccessfulleadlist={handleSuccessfulleadlist} successfulleadsdata={successfulleadsdata}/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    }
    </>

  )
}

export default Index