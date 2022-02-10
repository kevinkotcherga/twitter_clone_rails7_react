import React, {useEffect} from 'react'

function App() {

  useEffect(() => {
    fetch('api/tweets')
    .then(res => res.json())
    .then(data => console.log(data))
  }, []);

  return (
    <div>
      <h1>Accueil</h1>
    </div>
  );
}

export default App;
