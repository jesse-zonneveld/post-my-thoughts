import React, { Component } from "react";
import ThoughtsList from "../thoughts/ThoughtsList";
import Notifications from "./Notifications";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import UserInfo from "./UserInfo";

class Dashboard extends Component {
    render() {
        const { thoughts, auth, notifications, profile } = this.props;

        if (!auth.uid) return <Redirect to="/post-my-thoughts/login" />;

        return (
            <div className="dashboard l-container-full-screen">
                <div className="l-container-full-screen filter-white">
                    <div className="l-container-1080">
                        <div className="top-dash">
                            <Notifications notifications={notifications} />
                            <UserInfo profile={profile} />
                        </div>
                        <ThoughtsList thoughts={thoughts} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        thoughts: state.firestore.ordered.thoughts,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications,
        profile: state.firebase.profile,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: "thoughts", orderBy: ["createdAt", "desc"] },
        { collection: "notifications", limit: 20, orderBy: ["time", "desc"] },
    ])
)(Dashboard);
