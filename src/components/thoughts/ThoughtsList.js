import React from "react";
import { Link } from "react-router-dom";
import ThoughtSummary from "./ThoughtSummary";

const ThoughtsList = ({ thoughts }) => {
    return (
        <div className="thoughts-list">
            <h2 className="thoughts-list-title">Everyone's Thoughts</h2>
            {thoughts &&
                thoughts.map((thought) => {
                    return (
                        <Link
                            to={"/post-my-thoughts/thoughts/" + thought.id}
                            key={thought.id}
                        >
                            <ThoughtSummary thought={thought} />
                        </Link>
                    );
                })}
        </div>
    );
};

export default ThoughtsList;
