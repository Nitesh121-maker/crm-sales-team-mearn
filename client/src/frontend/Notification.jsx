import React from 'react';
import '../css/notification.css';
const Notification = ({ notification ,handleLeads }) => {
    console.log(notification);

    console.log('Notification',notification);
    
    // const UpdateReminder = async(unique_id)=>{
    //     try {
    //         const response = await fetch(`http://192.168.1.10:3002/reminder-update/${unique_id}`);
    //         if (!response.ok) {
    //             throw new Error(`Error! status: ${response.status}`);
    //           }
    //         const json = await response.json();
    //         console.log(json);
    //     } catch (error) {
            
    //     }
    // }
    const handleClick = (lead) => {
        // const unique_id = lead.unique_id;
        // UpdateReminder(unique_id);
        // Call handleLeads function with selected lead's data
        handleLeads(lead);
    };
  return (
    <div className="notification-container">
        <h2 className="notification-heading">Notifications</h2>
        <ul className="notification-list">
        {Array.isArray(notification) && notification.map((notification, index) => {
            // const lastSeenTime = new Date(notification.last_seen);
            // const currentTime = new Date();
            // const twentyFourHoursAgo = new Date(currentTime.getTime() - (24 * 60 * 60 * 1000)); // Subtract 24 hours from the current time
             
            // Check if last_seen time is 24 hours or more in the past
            // const is24HoursOrMore = lastSeenTime <= twentyFourHoursAgo;
            const reminderTime = new Date(notification.reminder);
            const currentTime = new Date();    
            // const timeDifference = Math.abs(reminderTime - currentTime);
            // const fiveMinutes = 13* 60 * 1000; // 2 minutes in milliseconds
            const isReminderTime = reminderTime <= currentTime;
            if (isReminderTime) {
                return (
                    <li key={index} className="notification-item" onClick={()=>handleClick(notification)}>
                        <div className="notification-content">
                            <span className="notification-icon">🔔</span>
                            <span className="notification-text">{notification.fullname}: {notification.requirements}</span>
                        </div>
                    </li>
                );
            } else {
                return null; 
            }
        })}

        </ul>
    </div>
  );
};

export default Notification;
