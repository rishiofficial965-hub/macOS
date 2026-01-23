import React from "react";

const Dock = ({ setWindowState }) => {
  return (
    <footer className="flex items-center justify-center gap-2 px-4 py-2 absolute bottom-2 left-1/2 -translate-x-1/2 backdrop-blur-lg bg-white/10 rounded-2xl shadow-lg">
      {/* GitHub */}
      <div
        onClick={() => setWindowState((s) => ({ ...s, github: true }))}
        className="dock-icon bg-gradient-to-b from-white to-black p-2 rounded-2xl flex justify-center items-center"
      >
        <img className="w-6 h-6" src="/doc-icons/github.svg" />
      </div>

      {/* Calendar (Not implemented yet) */}
      <div
        onClick={() => {
          window.open(
            "https://calendar.google.com/",
            "_blank",
          );
        }}
        className="dock-icon bg-gradient-to-r from-blue-400 to-blue-700 p-2 rounded-2xl flex justify-center items-center"
      >
        <img className="w-6 h-6" src="/doc-icons/calender.svg" />
      </div>

      {/* CLI */}
      <div
        onClick={() => setWindowState((s) => ({ ...s, cli: true }))}
        className="dock-icon bg-black p-2 rounded-2xl flex justify-center items-center"
      >
        <img className="w-6 h-6" src="/doc-icons/cli.svg" />
      </div>

      {/* Link */}
      <div
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/rishi-ranjan-3a5527330",
            "_blank",
          );
        }}
        className="dock-icon bg-gradient-to-r from-purple-300 to-purple-700 p-2 rounded-2xl flex justify-center items-center"
      >
        <img className="w-6 h-6" src="/doc-icons/link.svg" />
      </div>

      {/* Mail */}
      <div
        onClick={() => {
          window.open("mailto:rishiofficial965@gmail.com", "_blank");
        }}
        className="dock-icon bg-gradient-to-r from-blue-400 to-blue-700 p-2 rounded-2xl flex justify-center items-center"
      >
        <img className="w-6 h-6" src="/doc-icons/mail.svg" />
      </div>

      {/* Notes */}
      <div
        onClick={() => setWindowState((s) => ({ ...s, note: true }))}
        className="dock-icon bg-gradient-to-r from-orange-400 to-orange-500 p-2 rounded-2xl flex justify-center items-center"
      >
        <img className="w-6 h-6" src="/doc-icons/note.svg" />
      </div>

      {/* PDF / Resume */}
      <div
        onClick={() => setWindowState((s) => ({ ...s, resume: true }))}
        className="dock-icon bg-gradient-to-r from-red-400 to-red-500 p-2 rounded-2xl flex justify-center items-center"
      >
        <img className="w-6 h-6" src="/doc-icons/pdf.svg" />
      </div>

      {/* Spotify */}
      <div
        onClick={() => setWindowState((s) => ({ ...s, spotify: true }))}
        className="dock-icon bg-gradient-to-r from-green-400 to-green-700 p-2 rounded-2xl flex justify-center items-center"
      >
        <img className="w-6 h-6" src="/doc-icons/spotify.svg" />
      </div>
    </footer>
  );
};

export default Dock;
