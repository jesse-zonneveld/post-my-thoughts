import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = (props) => {
    return (
        <ul className="nav-items-container">
            <NavLink to="/post-my-thoughts/login">
                <li className="nav-item">Login</li>
            </NavLink>
            <NavLink to="/post-my-thoughts/signup">
                <li className="nav-item">Signup</li>
            </NavLink>
        </ul>
    );
};

export default SignedOutLinks;
