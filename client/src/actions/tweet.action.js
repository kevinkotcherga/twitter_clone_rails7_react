import axios from "axios";

export const GET_TWEETS = "GET_TWEETS";

export const getTweets = () => {
  return (dispatch) => {
    return axios.get('api/tweets?_sort=id&_order=desc').then((res) => {
      dispatch({ type: GET_TWEETS, payload: res.data})
    })
    .catch((err) => console.log(err))
  };
};
