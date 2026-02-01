import React from "react";
import githubIcon from "../assets/doc-icons/github.svg";
import calenderIcon from "../assets/doc-icons/calender.svg";
import cliIcon from "../assets/doc-icons/cli.svg";
import linkIcon from "../assets/doc-icons/link.svg";
import mailIcon from "../assets/doc-icons/mail.svg";
import noteIcon from "../assets/doc-icons/note.svg";
import pdfIcon from "../assets/doc-icons/pdf.svg";
import spotifyIcon from "../assets/doc-icons/spotify.svg";

const Dock = ({ setWindowState }) => {
  return (
    <footer className="flex items-center justify-center gap-2 px-4 py-2 absolute bottom-2 left-1/2 -translate-x-1/2 backdrop-blur-lg bg-white/10 rounded-2xl shadow-lg z-50">
      <div
        onClick={() => setWindowState((s) => ({ ...s, github: !s.github }))}
        className="dock-icon bg-gradient-to-b from-white to-black p-2 rounded-2xl flex justify-center items-center cursor-pointer"
      >
        <img className="w-6 h-6" src={githubIcon} alt="GitHub" />
      </div>

      <div
        onClick={() => {
          window.open("https://calendar.google.com/", "_blank");
        }}
        className="dock-icon bg-gradient-to-r from-blue-400 to-blue-700 p-2 rounded-2xl flex justify-center items-center cursor-pointer"
      >
        <img className="w-6 h-6" src={calenderIcon} alt="Calendar" />
      </div>

      <div
        onClick={() => setWindowState((s) => ({ ...s, cli: !s.cli }))}
        className="dock-icon bg-black p-2 rounded-2xl flex justify-center items-center cursor-pointer"
      >
        <img className="w-6 h-6" src={cliIcon} alt="Terminal" />
      </div>

      <div
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/rishi-ranjan-3a5527330",
            "_blank",
          );
        }}
        className="dock-icon bg-gradient-to-r from-purple-300 to-purple-700 p-2 rounded-2xl flex justify-center items-center cursor-pointer"
      >
        <img className="w-6 h-6" src={linkIcon} alt="LinkedIn" />
      </div>

      <div
        onClick={() => {
          window.open("mailto:rishiofficial965@gmail.com", "_blank");
        }}
        className="dock-icon bg-gradient-to-r from-blue-400 to-blue-700 p-2 rounded-2xl flex justify-center items-center cursor-pointer"
      >
        <img className="w-6 h-6" src={mailIcon} alt="Email" />
      </div>

      <div
        onClick={() => setWindowState((s) => ({ ...s, note: !s.note }))}
        className="dock-icon bg-gradient-to-r from-orange-400 to-orange-500 p-2 rounded-2xl flex justify-center items-center cursor-pointer"
      >
        <img className="w-6 h-6" src={noteIcon} alt="Notes" />
      </div>

      <div
        onClick={() => setWindowState((s) => ({ ...s, resume: !s.resume }))}
        className="dock-icon bg-gradient-to-r from-red-400 to-red-500 p-2 rounded-2xl flex justify-center items-center cursor-pointer"
      >
        <img className="w-6 h-6" src={pdfIcon} alt="Resume" />
      </div>

      <div
        onClick={() => setWindowState((s) => ({ ...s, spotify: !s.spotify }))}
        className="dock-icon bg-gradient-to-r from-green-400 to-green-700 p-2 rounded-2xl flex justify-center items-center cursor-pointer"
      >
        <img className="w-6 h-6" src={spotifyIcon} alt="Spotify" />
      </div>
    </footer>
  );
};

export default Dock;
