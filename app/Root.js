import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCandies } from "./store";

const Root = () => {
  const dispatch = useDispatch();
  const candies = useSelector((state) => state.candies);

  useEffect(() => {
    dispatch(fetchCandies());
  }, []);

console.log(candies)

  return (
    <div>
      <nav>Goodie Bag</nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
      </main>
    </div>
  );
};

export default Root;
