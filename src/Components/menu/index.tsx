import React from "react";
import { SearhBar } from "../SearchBar";

export const Menu = () => {
  return (
    <div className="absolute bg-black-secondary  w-10/12
     md:top-[-130px] top-[-160px] translate-x-[-50%] 
    left-1/2 rounded-2xl shadow-xl z-50">
      <SearhBar />
    </div>
  );
};
