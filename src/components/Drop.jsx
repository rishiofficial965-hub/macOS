import React from "react";

const Drop = () => {
  return (
    <div className="text-white backdrop-blur-md bg-white/10 shadow-lg rounded-xl px-2 py-1 font-bold cursor-pointer">
      <div className="hover:bg-blue-400 transition-transform transition-all duration-200 hover:scale-102  px-3 py-2 border-b rounded-sm">
        System Information
      </div>
      <div className="hover:bg-blue-400 transition-transform transition-all duration-200 hover:scale-102 px-3 py-2 border-b rounded-sm">
        System Setting
      </div>
      <div className="hover:bg-blue-400 transition-transform transition-all duration-200 hover:scale-102 px-3 py-2 border-b rounded-sm">
        App Store
      </div>
      <div className="hover:bg-blue-400 transition-transform transition-all duration-200 hover:scale-102 px-3 py-2 border-b rounded-sm">
        Sleep
      </div>
      <div className="hover:bg-blue-400 transition-transform transition-all duration-200 hover:scale-102 px-3 py-2 border-b rounded-sm">
        Restart
      </div>
      <div
        className="hover:bg-blue-400 transition-transform transition-all duration-200 hover:scale-102
       px-3 py-2 rounded-sm"
      >
        Shut Down
      </div>
    </div>
  );
};

export default Drop;
