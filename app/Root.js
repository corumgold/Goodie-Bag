import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCandies } from "./store";
import Candies from "./components/Candies";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SingleCandy from "./components/SingleCandy";
import Home from "./components/Home";

const Root = () => {
  const dispatch = useDispatch();
  const candies = useSelector((state) => state.candies);

  useEffect(() => {
    dispatch(fetchCandies());
  }, []);

  return (
    <div>
      <Nav />
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/candies" element={<Candies />} />
          <Route path="/candies/:id" element={<SingleCandy />} />
        </Routes>
      </main>
    </div>
  );
};

export default Root;
