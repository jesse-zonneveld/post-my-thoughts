import React from "react";
import { NavLink } from "react-router-dom";

const UserInfo = ({ profile }) => {
    return (
        <div className="user-info">
            <h2 className="thoughts-list-title">User Information</h2>
            <div className="user-first-name">
                User First Name: {profile.firstName}
            </div>
            <div className="user-last-name">
                User Last Name: {profile.lastName}
            </div>
            <div className="user-intitials">
                User Initials: {profile.initials}
            </div>
            <NavLink to="/post-my-thoughts/create-thought/">
                <button className="create-btn">Create Thought</button>
            </NavLink>
        </div>
    );
};

export default UserInfo;
