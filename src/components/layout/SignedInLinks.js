import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/authActions";

const SignedInLinks = (props) => {
    return (
        <ul className="nav-items-container">
            <NavLink to="/post-my-thoughts/create-thought">
                <li className="nav-item">New Thought</li>
            </NavLink>
            <a onClick={props.logout}>
                <li className="nav-item">Logout</li>
            </a>
            <NavLink to="/post-my-thoughts/">
                <li className="nav-item">{props.profile.initials}</li>
            </NavLink>
        </ul>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
