import React from 'react';
import '../css/notification.css';
const Notification = ({ notification }) => {
    // console.log(notification)
  return (
    <div className="notification-container">
        <h2 className="notification-heading">Notifications</h2>
        <ul className="notification-list">
        {Array.isArray(notification) && notification.map((notification, index) => {
            const lastSeenTime = new Date(notification.last_seen);
            const currentTime = new Date();
            const twentyFourHoursAgo = new Date(currentTime.getTime() - (24 * 60 * 60 * 1000)); // Subtract 24 hours from the current time

            // Check if last_seen time is 24 hours or more in the past
            const is24HoursOrMore = lastSeenTime <= twentyFourHoursAgo;

            if (is24HoursOrMore) {
                return (
                    <li key={index} className="notification-item">
                        <div className="notification-content">
                            <span className="notification-icon">🔔</span>
                            <span className="notification-text">Update status of {notification.clientName}</span>
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
