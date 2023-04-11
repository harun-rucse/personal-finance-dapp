import React from "react";
import { Link } from "react-router-dom";
const NavButtons = () => {
  return (
    <>
      <Link
        to="/"
        className="inline-flex  items-center border-b-2  px-1 pt-1 text-sm font-medium text-gray-900"
      >
        Personal Finance Manager
      </Link>

      <Link
        to="/login"
        className="inline-flex items-center border-b-2 border-transparent pt-1 text-sm font-medium text-white bg-cyan-800 cursor-pointer  justify-self-end mx-3 my-2 px-3 rounded-md hover:bg-cyan-900 float-right"
      >
        Login
      </Link>
    </>
  );
};

export default NavButtons;
