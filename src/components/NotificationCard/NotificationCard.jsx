import React from 'react'
import "./NotifCard.scss"

function NotificationCard({notif}) {
    return (
        <div className="notification">
            <img src="https://www.x-innovations.se/wp-content/uploads/dummy-prod-1.jpg" alt="any" />
            <div>
                <h4>{notif.name}</h4>
                <h6>{notif.type}</h6>
                <p>{notif.message}</p>
            </div>
        </div>
    )
}

export default NotificationCard
