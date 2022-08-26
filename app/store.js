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
  candies: [
    {
      id: 1,
      name: "example",
      description: "example description",
      imageUrl:
        "https://media.istockphoto.com/photos/assortment-of-multicolored-candies-jelly-beans-and-lollipops-picture-id1270389595?b=1&k=20&m=1270389595&s=170667a&w=0&h=j9las-CDlYSyWhmg-2jZDg22UAPGjpSv88aFsr8u-38=",
    },
  ],
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
