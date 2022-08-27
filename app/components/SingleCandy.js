import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleCandy = () => {
  const params = useParams();
  const candies = useSelector((state) => state.candies);
  const candy = candies.find((candy) => candy.id === +params.id);

  return (
    <div>
      <h1>{candy?.name}</h1>
      <img src={candy?.imageUrl} />
      <p>{candy?.description}</p>
    </div>
  );
};

export default SingleCandy;
