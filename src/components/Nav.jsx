import React, { useState } from "react";
import DateTime from "./DateTime";
import Drop from "./Drop";
import Drop1 from "./Drop1";
import appleIcon from "../assets/navbar-icons/apple.svg";
import wifiIcon from "../assets/navbar-icons/wifi.svg";

const Nav = ({ setWindowState }) => {
  const [showFileMenu, setShowFileMenu] = useState(false);
  const [showFile1Menu, setShowFile1Menu] = useState(false);

  return (
    <div className="relative">
      <nav className="relative flex justify-between items-center px-5  backdrop-blur-md bg-white/10 shadow-lg">
        <div className="flex items-center gap-4 cursor-pointer py-1">
          <div
            onClick={() => {
              setShowFileMenu((prev) => !prev);
              setShowFile1Menu(false);
            }}
            className="flex justify-center hover:bg-white/10 hover:backdrop-blur-md hover:shadow-lg px-2 py-2 rounded "
          >
            <img src={appleIcon} alt="Apple" />
          </div>
          <div className="hover:bg-white/10 hover:backdrop-blur-md hover:shadow-lg px-2 py-2 rounded ">
            <p>Rishi Ranjan</p>
          </div>
          <div
            className="hover:bg-white/10 hover:backdrop-blur-md hover:shadow-lg px-4 py-2 rounded "
            onClick={() => {
              setShowFileMenu(false);
              setShowFile1Menu((prev) => !prev);
            }}
          >
            <p>File</p>
          </div>
          <div className="hover:bg-white/10 hover:backdrop-blur-md hover:shadow-lg px-2 py-2 rounded ">
            <p>Window</p>
          </div>
          <div
            className="hover:bg-white/10 hover:backdrop-blur-md hover:shadow-lg px-2 py-2 rounded "
            onClick={() => setWindowState((s) => ({ ...s, cli: !s.cli }))}
          >
            <p>Terminal</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="hover:bg-white/10 hover:backdrop-blur-md hover:shadow-lg px-2 py-2 rounded cursor-pointer">
            <img src={wifiIcon} alt="WiFi" />
          </div>
          <div className="hover:bg-white/10 hover:backdrop-blur-md hover:shadow-lg px-2 py-2 rounded cursor-pointer">
            <DateTime />
          </div>
        </div>
      </nav>
      {showFileMenu && (
        <div className="absolute top-12 left-2 z-10">
          <Drop />
        </div>
      )}
      {showFile1Menu && (
        <div className="absolute top-12 left-35 z-10">
          <Drop1 />
        </div>
      )}
    </div>
  );
};

export default Nav;
