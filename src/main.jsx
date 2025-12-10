import React from "react";
import ReactDOM from "react-dom/client";
import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import "./index.css";

// context
import { LeagueProvider } from "./context/LeagueContext";

// pages
import Dashboard from "./pages/Dashboard";
import Teams from "./pages/Teams";
import TeamDetails from "./pages/TeamDetails";
import AddTeam from "./pages/AddTeam";
import Matches from "./pages/Matches";
import Sponsors from "./pages/Sponsors";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 🔹 Wrap everything with LeagueProvider */}
    <LeagueProvider>
      {/* <HashRouter> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path="teams" element={<Teams />} />
            <Route path="teams/:teamId" element={<TeamDetails />} />
            <Route path="add-team" element={<AddTeam />} />
            <Route path="matches" element={<Matches />} />
            <Route path="sponsors" element={<Sponsors />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* </HashRouter> */}
    </LeagueProvider>
  </React.StrictMode>
);
