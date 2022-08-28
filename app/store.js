import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import thunk from "redux-thunk";
import loggingMiddleware from "redux-logger";

//action types
const SET_CANDIES = "SET_CANDIES";
const CREATE_CANDY = "CREATE_CANDY";
const DELETE_CANDY = "DELETE_CANDY";

//action creators
const _setCandies = (candies) => {
  return {
    type: SET_CANDIES,
    candies,
  };
};

const _createCandy = (candy) => {
  return {
    type: CREATE_CANDY,
    candy,
  };
};

const _deleteCandy = (candy) => {
  return {
    type: DELETE_CANDY,
    candy,
  };
};

//Thunk creators

export const fetchCandies = () => {
  return async (dispatch) => {
    const { data: candies } = await axios.get("/api/candies");
    dispatch(_setCandies(candies));
  };
};

export const createCandy = (candy) => {
  return async (dispatch) => {
    const { data: created } = await axios.post("/api/candies", candy);
    dispatch(_createCandy(created));
  };
};

export const deleteCandy = (candy) => {
  return async (dispatch) => {
    const { data: deleted } = await axios.delete(`/api/candies/${candy.id}`);
    dispatch(_deleteCandy(deleted));
  };
};

const initState = {
  candies: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CANDIES:
      return { ...state, candies: action.candies };
    case CREATE_CANDY:
      return { ...state, candies: [...state.candies, action.candy] };
    case DELETE_CANDY:
      return state.candies.filter((candy) => candy.id !== action.candy.id);
    default:
      return state;
  }
};

function configureStore() {
  return createStore(reducer, applyMiddleware(thunk, loggingMiddleware));
}

export default configureStore;
