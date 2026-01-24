import React, { useState } from "react";
import DateTime from "./DateTime";
import Drop from "./Drop";
import Drop1 from "./Drop1";

const Nav = ({ setWindowState }) => {
  const [showFileMenu, setShowFileMenu] = useState(false);
  const [showFile1Menu, setShowFile1Menu] = useState(false);

  return (
    <div className="relative">
      <nav className="relative flex justify-between items-center px-5 py-3 backdrop-blur-md bg-white/10 shadow-lg">
        <div className="flex gap-4 cursor-pointer">
          <div
            onClick={() => {
              setShowFileMenu((prev) => !prev);
              setShowFile1Menu(false);
            }}
            className="flex justify-center "
          >
            <img src="/navbar-icons/apple.svg" />
          </div>
          <div>
            <p>Rishi Ranjan</p>
          </div>
          <div
            onClick={() => {
              setShowFileMenu(false);
              setShowFile1Menu((prev) => !prev);
            }}
          >
            <p>File</p>
          </div>
          <div>
            <p>Window</p>
          </div>
          <div onClick={() => setWindowState((s) => ({ ...s, cli: !s.cli }))}>
            <p>Terminal</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="cursor-pointer">
            <img src="/navbar-icons/wifi.svg" />
          </div>
          <div>
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
