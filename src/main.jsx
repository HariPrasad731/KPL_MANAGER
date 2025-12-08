import React from "react";
import ReactDOM from "react-dom/client";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import "./index.css";

// pages
import Dashboard from "./pages/Dashboard";
import Teams from "./pages/Teams";
import TeamDetails from "./pages/TeamDetails";
import AddTeam from "./pages/AddTeam";
import Matches from "./pages/Matches";
import Sponsors from "./pages/Sponsors";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* HashRouter works very well with GitHub Pages */}
    <HashRouter>
      <Routes>
        {/* App is the layout that renders <Outlet /> */}
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="teams" element={<Teams />} />
          <Route path="teams/:teamId" element={<TeamDetails />} />
          <Route path="add-team" element={<AddTeam />} />
          <Route path="matches" element={<Matches />} />
          <Route path="sponsors" element={<Sponsors />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
