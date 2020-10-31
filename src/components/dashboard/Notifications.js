import React from "react";
import moment from "moment";

const Notifications = ({ notifications }) => {
    return (
        <div className="notifications">
            <div>Notifications</div>
            <ul className="notifications-container">
                {notifications &&
                    notifications.map((notification) => {
                        return (
                            <li className="notification" key={notification.id}>
                                <div className="notification-user">
                                    {notification.user}
                                </div>
                                <div className="notification-content">
                                    {notification.content}
                                </div>
                                <div className="notification-date">
                                    {moment(
                                        notification.time.toDate()
                                    ).fromNow()}
                                </div>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default Notifications;
