import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import "./index.css";

// your pages
import Dashboard from "./pages/Dashboard";
import Teams from "./pages/Teams";
import TeamDetails from "./pages/TeamDetails";
import AddTeam from "./pages/AddTeam";
import Matches from "./pages/Matches";
import Sponsors from "./pages/Sponsors";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* VERY IMPORTANT for GitHub Pages */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* App is the layout, Outlet will render children */}
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
  </React.StrictMode>
);
