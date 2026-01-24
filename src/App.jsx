import React, { useState } from "react";
import Nav from "./components/Nav";
import Github from "./components/windows/Github";
import MacWin from "./components/windows/MacWin";
import Dock from "./components/Dock";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";
import Apps from "./components/Apps";

const App = () => {
  const [WindowsState, setWindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });
  return (
    <main className="relative overflow-hidden h-screen bg-[url('/mac.jpg')] bg-cover bg-center">
      <Nav WindowsState={WindowsState} setWindowState={setWindowState} />
      <Dock WindowsState={WindowsState} setWindowState={setWindowState} />
      {WindowsState.github && <Github setWindowState={setWindowState} />}
      {WindowsState.note && <Note setWindowState={setWindowState} />}
      {WindowsState.resume && <Resume setWindowState={setWindowState} />}
      {WindowsState.spotify && <Spotify setWindowState={setWindowState} />}
      {WindowsState.cli && <Cli setWindowState={setWindowState} />}
      <Apps />
    </main>
  );
};

export default App;
