import React from "react";
import DateTime from "./DateTime"

const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-5 py-3 backdrop-blur-md bg-white/10 shadow-lg">
      <div className="flex gap-4">
        <div className="flex justify-center ">
          <img src="/navbar-icons/apple.svg" />
        </div>
        <div>
          <p>Rishi Ranjan</p>
        </div>
        <div>
          <p>File</p>
        </div>
        <div>
          <p>Window</p>
        </div>
        <div>
          <p>Terminal</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div>
            <img src="/navbar-icons/wifi.svg"/>
        </div>
        <div>
            <DateTime></DateTime>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
