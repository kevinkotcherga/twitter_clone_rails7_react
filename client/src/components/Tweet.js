import React from "react";
import Like from "./Like";

const Tweet = ({ tweet }) => {
  return (
    <div className="post">
      <p>{tweet.content}</p>

      <div className="author">
        <Like tweet={tweet} />
      </div>
    </div>
  );
};

export default Tweet;
