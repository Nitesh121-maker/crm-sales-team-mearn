import React,{useState,useEffect} from 'react'
import '../css/closedleadchats.css'
import {FaArrowLeft} from  'react-icons/fa'
const ClosedLeadChat = ({closedLeadchat,handleClosedleadlist}) => {
    console.log('closedLeadchat:',closedLeadchat);
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
              uniqueid: closedLeadchat.unique_id,
              message: formData.requirements,
              reminder: formData.reminder,
            }),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // Clear the textarea after successful submission
          setFormData({ requirements: '' });
        } catch (error) {
          console.error('Error:', error);
          // Optionally, you can display an error message to the user
        }
      };
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const uniqueid = closedLeadchat.unique_id;
      const response = await fetch(`http://192.168.1.11:3002/closedLeadMessage/${uniqueid}`);
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
  useEffect(() => {
    const intervalId = setInterval(fetchMessages, 1000/2); // Fetch messages every 5 seconds

    // Clean up function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [closedLeadchat]);
//   New Message
const handlelastmessage = async (e)=>{
  
    try {
      const response = await fetch('http://192.168.1.11:3002/notification');
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
    } catch (error) { 
      console.error('Error fetching messages:', error);
    }
  }
  // Restore 
const handleRestore = async (closedLeadchat,e)  => {

    let clientid = closedLeadchat.unique_id;
    console.log('Client Id',clientid);
    try {
        const response =  await fetch(`http://192.168.1.11:3002/restore-closed-leads/${clientid}`);
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="chat-container">
        <div className="chat-back" onClick={handleClosedleadlist}><button><FaArrowLeft/></button></div>
        <div className="chat-body">
            <div className="conversation">
                <div className="old-message">
                    {/* Display the previous message or conversation */}
                    <div className="chat-header">
                        <p>Client Name: {closedLeadchat.fullname}</p>
                    </div>
                    <div className="chat">
                        <div className="admin-chat">
                        <span>Hi, who sent this?</span>
                        </div>
                        <div className="sales-chat">
                            {closedLeadchat.requirements}
                        
                        </div>
                        {messages.map((message, index) => (
                            <div className="sales-chat"  key={index}> {message.message}
                             <span>{new Date(message.sent_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            </div>
                        ))}
                    </div>    
                </div>
                <div className="new-conversation">
                    {/* Form for new conversation */}
                    <form onSubmit={(e) => {
                            e.preventDefault(); // Prevent default form submission behavior
                            handleSubmit(e); // Call the handleSubmit function
                            handlelastmessage(); // Call the handlelastmessage function
                        }}>
                        <div className="form-groups">
                        <textarea
                            id="requirements"
                            name="requirements"
                            value={formData.requirements}
                            onChange={handleChange}
                            placeholder="Enter requirements..."
                            required
                        ></textarea>
                        <input type="datetime-local"  name="reminder" id="" value={formData.reminder} onChange={handleChange}/>
                        </div>
                        <button type="submit" onClick={()=>handlelastmessage()}>Send</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="restore">
            <button onClick={(e) => {
              
                handleRestore(closedLeadchat);
            }}>Restore</button>
        </div>
    </div>

  )
}

export default ClosedLeadChat