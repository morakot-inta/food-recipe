import React, { useState } from "react";

const Nav = () => {
  const [search, setSearch] = useState("");
  return (
    <nav
      className="
        bg-orange-500 
        text-white 
        p-4 
        flex 
        justify-between 
        items-center 
        shadow-lg
    "
    >
      <h1>My App</h1>
      <input
        type="text"
        placeholder="Search"
        className="
          p-2 
          rounded 
          border 
          border-gray-300 
          focus:outline-none 
          focus:ring-2 
          focus:ring-orange-500 
          focus:border-transparent 
          w-1/4
          text-black
      "
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <ul
        className="
        flex 
        gap-4 
        list-none 
        text-sm 
        font-semibold 
      "
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
