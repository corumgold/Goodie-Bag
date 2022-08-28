import React from "react";
import { useSelector } from "react-redux";
import Form from "./Form";


const Candies = () => {
  const candies = useSelector((state) => state.candies);

  return (
    <>
      <Form />
      <ul className="candy-list">
        {candies.map((candy) => {
          return (
            <li key={candy.id}>
              <h1>{candy.name}</h1>
              <img src={candy.imageUrl} />
              <p>{candy.description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Candies;
