import React from "react";
import moment from "moment";

const ThoughtSummary = ({ thought }) => {
    return (
        <div className="thought-card">
            <div className="card-title">{thought.title}</div>
            <div className="card-author">
                Posted by {thought.authorFirstName} {thought.authorLastName}
            </div>
            <div className="card-date">
                {moment(thought.createdAt.toDate()).calendar()}
            </div>
        </div>
    );
};

export default ThoughtSummary;
