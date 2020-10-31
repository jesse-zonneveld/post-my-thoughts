import React from "react";
import { Link } from "react-router-dom";
import ThoughtSummary from "./ThoughtSummary";

const ThoughtsList = ({ thoughts }) => {
    return (
        <div className="thoughts-list">
            {thoughts &&
                thoughts.map((thought) => {
                    return (
                        <Link
                            to={"post-my-thoughts/thoughts/" + thought.id}
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
