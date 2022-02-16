import axios from "axios";

export const GET_TWEETS = "GET_TWEETS";
export const ADD_TWEET = "ADD_TWEET";

export const getTweets = () => {
  return (dispatch) => {
    return axios.get('api/tweets')
    .then((res) => {
      dispatch({ type: GET_TWEETS, payload: res.data})
    })
    .catch((err) => console.log(err));
  };
};

export const addTweet = (data) => {
  return (dispatch) => {
    return axios.post('api/tweets.json', data)
    .then((res) => {
      dispatch({ type: ADD_TWEET, payload: res.data})
    })
    .catch((err) => console.log(err));
  };
};
