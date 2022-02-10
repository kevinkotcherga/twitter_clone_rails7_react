import { GET_TWEETS } from "../actions/tweet.action";

const initialState = {};

export default function tweetReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TWEETS:
      return action.payload;
    default:
      return state;
  }
}
