import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/candies">All Candies</Link>
    </nav>
  );
};

export default Nav;
