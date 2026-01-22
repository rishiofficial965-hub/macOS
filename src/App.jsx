import React from "react";
import Nav from "./components/Nav";
import Github from './components/windows/Github'
import MacWin from "./components/windows/MacWin";
import Dock from "./components/Dock"

const App = () => {
  return (
    <main className="h-screen bg-[url('/mac.jpg')] bg-cover bg-center">
      <Nav></Nav>
      <Dock></Dock>
      <Github></Github>
    </main>
  );
};

export default App;
