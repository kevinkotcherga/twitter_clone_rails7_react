import React, {useEffect} from 'react'
import TweetForm from "./components/TweetForm";

function App() {

  useEffect(() => {
    fetch('api/tweets')
    .then(res => res.json())
    .then(data => console.log(data))
  }, []);

  return (
    <div>
      <h1>Accueil</h1>
      <TweetForm />
      <div className="content">
        <div className="post-container">CONTENU</div>
      </div>
    </div>
  );
}

export default App;
