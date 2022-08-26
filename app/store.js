import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import thunk from "redux-thunk";

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

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_CANDIES:
      return { ...state, candies: action.candies };
    default:
      return state;
  }
};

export default createStore(reducer, applyMiddleware(thunk));
