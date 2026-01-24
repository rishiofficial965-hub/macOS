import React from "react";

const Drop1 = () => {
  return (
    <div className="text-white backdrop-blur-md bg-white/10 shadow-lg rounded-xl px-2 py-1 font-bold cursor-pointer">
      <div className="hover:bg-blue-400 transition-transform transition-all duration-200 hover:scale-102  px-3 py-2 border-b rounded-sm">
        New Folder
      </div>
      <div className="hover:bg-blue-400 transition-transform transition-all duration-200 hover:scale-102 px-3 py-2 border-b rounded-sm">
        New Smart Folder
      </div>
      <div className="hover:bg-blue-400 transition-transform transition-all duration-200 hover:scale-102 px-3 py-2 border-b rounded-sm">
        Open
      </div>
      <div className="hover:bg-blue-400 transition-transform transition-all duration-200 hover:scale-102 px-3 py-2 border-b rounded-sm">
        Open With
      </div>
      <div className="hover:bg-blue-400 transition-transform transition-all duration-200 hover:scale-102 px-3 py-2 border-b rounded-sm">
        Get Info
      </div>
      <div className="hover:bg-blue-400 transition-transform transition-all duration-200 hover:scale-102
       px-3 py-2 border-b rounded-sm">
        Rename
      </div>
      <div className="hover:bg-blue-400 transition-transform transition-all duration-200 hover:scale-102
       px-3 py-2 border-b rounded-sm">
       Move to Trash
      </div>
      <div className="hover:bg-blue-400 transition-transform transition-all duration-200 hover:scale-102
       px-3 py-2 rounded-sm">
        Print
      </div>
    </div>
  );
};

export default Drop1;
