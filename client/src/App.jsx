import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Leads from "./pages/Leads";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/login" />} />

      <Route
        path="/admin/login"
        element={<Login />}
      />

      <Route
        path="/admin/leads"
        element={<Leads />}
      />

      <Route
        path="/admin/profile"
        element={<Profile />}
      />
    </Routes>
  );
}

export default App;