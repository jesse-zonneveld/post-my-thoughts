import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = ({ auth, profile }) => {
    const links = auth.uid ? (
        <SignedInLinks profile={profile} />
    ) : (
        <SignedOutLinks />
    );
    return (
        <nav className="main-nav">
            <Link to="/post-my-thoughts/">
                <div className="logo">
                    PostMy<strong>Thoughts</strong>
                </div>
            </Link>
            <ul className="nav-items-container">{links}</ul>
        </nav>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    };
};

export default connect(mapStateToProps)(Navbar);
