import { useSelector } from "react-redux";
import TweetForm from "./components/TweetForm";
import Tweet from "./components/Tweet";
import { isEmpty } from "./components/Utils";

function App() {

  const tweets = useSelector((state) => state.tweetReducer);

  return (
    <div>
      <h1>Accueil</h1>
      <TweetForm />
      <div className="content">
        <div className="post-container">
          {!isEmpty(tweets) && tweets.map((tweet, index) => <Tweet tweet={tweet} key={index} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
