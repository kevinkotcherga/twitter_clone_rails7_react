import React from "react";

const Like = ({ tweet }) => {
  return (
    <div>
      <img src="./icons/clap.png" className="clap" alt="clap" />
      <span>{tweet.likes}</span>
    </div>
  );
};

export default Like;
