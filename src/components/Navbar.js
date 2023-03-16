import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <nav className="mx-auto max-w-xs flex justify-between mt-12">
      <button
        onClick={() => setPage("planets")}
        className=" inline-flex items-center justify-center h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
      >
        Planets
      </button>
      <button
        onClick={() => setPage("people")}
        className=" inline-flex items-center justify-center h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
      >
        People
      </button>
    </nav>
  );
};

export default Navbar;


<a href="#_" class="inline-flex items-center justify-center h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">
Button Text
</a>