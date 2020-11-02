import React from "react";
import moment from "moment";

const Notifications = ({ notifications }) => {
    return (
        <div className="notifications">
            <h2 className="notifications-title">Notifications</h2>
            <ul className="notifications-container">
                {notifications &&
                    notifications.map((notification) => {
                        return (
                            <li className="notification" key={notification.id}>
                                <span className="notification-user">
                                    {notification.user}&nbsp;
                                </span>
                                {notification.content}&nbsp;
                                <span className="notification-date">
                                    &nbsp; --- &nbsp;
                                    {moment(
                                        notification.time.toDate()
                                    ).fromNow()}
                                </span>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default Notifications;
