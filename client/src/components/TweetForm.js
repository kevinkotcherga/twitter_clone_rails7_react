import React from "react";

const TweetForm = () => {
  return (
    <div className="form-container">
      <form>
        <h1>Accueil</h1>
        <textarea placeholder="Quoi de neuf ?"></textarea>
        <input type="submit" value="Tweeter" className="submit" />
      </form>
    </div>
  );
};

export default TweetForm;
