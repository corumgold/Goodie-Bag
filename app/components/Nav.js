import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const candies = useSelector((state) => state.candies);

  return (
    <nav>
      <Link className="candy-link" to="/candies">
        All Candies
      </Link>
      {candies?.map((candy) => {
        const route = `/candies/${candy.id}`;
        return (
          <Link key={candy.id} className="candy-link" to={route}>
            {candy.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
