import React from "react";
import { useParams } from "react-router";

const SingleCandy = () => {
  const params = useParams()
  console.log(params)

  return <div>Candy</div>;
};

export default SingleCandy;
