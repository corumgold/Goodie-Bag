import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { deleteCandy } from "../store";

const SingleCandy = () => {
  const params = useParams();
  const candies = useSelector((state) => state.candies);
  const candy = candies?.find((candy) => candy.id === +params.id);
  const dispatch = useDispatch();

  return (
    <div className="candy">
      <h1>{candy?.name}</h1>
      <img src={candy?.imageUrl} />
      <p>{candy?.description}</p>
      <Link to={"/"}>
        <button onClick={() => dispatch(deleteCandy(candy))}>
          Delete {candy?.name}
        </button>
      </Link>
    </div>
  );
};

export default SingleCandy;
