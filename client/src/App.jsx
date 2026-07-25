import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Leads from "./pages/Leads";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

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
        element={
          <ProtectedRoute>
            <Leads />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;