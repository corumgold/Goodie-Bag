import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCandies } from "./store";
import Candies from "./components/Candies";
import { Routes, Route } from "react-router-dom";

const Root = () => {
  const dispatch = useDispatch();
  const candies = useSelector((state) => state.candies);
  console.log(candies)

  useEffect(() => {
    dispatch(fetchCandies());
  }, []);

  return (
    <div>
      <nav>Goodie Bag</nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <Routes>
          <Route exact path="/" element={<Candies />} />
        </Routes>
      </main>
    </div>
  );
};

export default Root;
