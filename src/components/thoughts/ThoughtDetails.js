import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { NavLink } from "react-router-dom";

const ThoughtDetails = ({ thought, auth }) => {
    if (!auth.uid) return <Redirect to="/post-my-thoughts/login" />;

    if (thought) {
        return (
            <div className="thought-details l-container-full-screen">
                <div className="l-container-full-screen filter-white">
                    <div className="l-container-1080">
                        <div className="thought-container">
                            <h2 className="thought-title">{thought.title}</h2>
                            <div className="author-and-date">
                                Posted by{" "}
                                <span className="author">
                                    {thought.authorFirstName}&nbsp;
                                    {thought.authorLastName}
                                </span>
                                ,&nbsp;
                                <span className="date">
                                    {moment(
                                        thought.createdAt.toDate()
                                    ).calendar()}
                                </span>
                            </div>
                            <div className="thought-content">
                                {thought.content}
                            </div>
                            <NavLink to="/post-my-thoughts/">
                                <button className="back-btn">
                                    Back to Dashboard
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <div>Loading Thought...</div>;
    }
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const thoughts = state.firestore.data.thoughts;
    const thought = thoughts ? thoughts[id] : null;
    return {
        thought: thought,
        auth: state.firebase.auth,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "thoughts" }])
)(ThoughtDetails);
