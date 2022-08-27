import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import thunk from "redux-thunk";
import loggingMiddleware from "redux-logger";

//action types
const SET_CANDIES = "SET_CANDIES";

//action creators
const _setCandies = (candies) => {
  return {
    type: SET_CANDIES,
    candies,
  };
};

//Thunk creators

export const fetchCandies = () => {
  return async (dispatch) => {
    const { data: candies } = await axios.get("/api/candies");
    dispatch(_setCandies(candies));
  };
};

const initState = {
  candies: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CANDIES:
      return { ...state, candies: action.candies };
    default:
      return state;
  }
};

function configureStore() {
  return createStore(reducer, applyMiddleware(thunk, loggingMiddleware));
}

export default configureStore;
