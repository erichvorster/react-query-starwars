import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <nav className="mx-auto max-w-xs flex justify-between ">
      <button
        onClick={() => setPage("planets")}
        className="text-2xl text-yellow-400"
      >
        Planets
      </button>
      <button
        onClick={() => setPage("people")}
        className="text-2xl text-yellow-400"
      >
        People
      </button>
    </nav>
  );
};

export default Navbar;
