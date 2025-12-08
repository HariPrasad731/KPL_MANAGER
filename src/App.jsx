import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";

function App() {
  return (
    <div className="app-root">

      {/* Optional video if added to /public */}
      {/* <video className="bg-video" src="/stadium.mp4" autoPlay muted loop playsInline /> */}

      <div className="app-overlay"></div>

      <div className="app-shell">
        <NavBar />

        <main className="app-main">
          <Outlet />
        </main>

        <ChatBox />
      </div>
    </div>
  );
}

export default App;
