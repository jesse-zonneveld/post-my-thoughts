import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const ThoughtDetails = ({ thought, auth }) => {
    if (!auth.uid) return <Redirect to="/post-my-thoughts/login" />;

    if (thought) {
        return (
            <div className="thought-details">
                <div className="thought-title">{thought.title}</div>
                <div className="thought-desc">{thought.content}</div>
                <div className="author-and-date-container">
                    <div className="author">
                        Posted by {thought.authorFirstName}{" "}
                        {thought.authorLastName}
                    </div>
                    <div className="date">
                        {moment(thought.createdAt.toDate()).calendar()}
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
