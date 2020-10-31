import React, { Component } from "react";
import ThoughtsList from "../thoughts/ThoughtsList";
import Notifications from "./Notifications";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
    render() {
        const { thoughts, auth, notifications } = this.props;

        if (!auth.uid) return <Redirect to="/post-my-thoughts/login" />;

        return (
            <div className="dashboard">
                <ThoughtsList thoughts={thoughts} />
                <Notifications notifications={notifications} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        thoughts: state.firestore.ordered.thoughts,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: "thoughts", orderBy: ["createdAt", "desc"] },
        { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
    ])
)(Dashboard);
