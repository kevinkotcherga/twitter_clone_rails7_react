import React from "react";

const TweetForm = () => {
  return (
    <div className="form-container">
      <form>
        <textarea placeholder="Quoi de neuf ?"></textarea>
        <input type="submit" value="Tweeter" />
      </form>
    </div>
  );
};

export default TweetForm;
