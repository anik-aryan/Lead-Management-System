import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, User, ClipboardList } from "lucide-react";
import { useState } from "react";
import api from "../services/api";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
        await api.post("/auth/logout");

        navigate("/admin/login", {
          replace: true,
        });
    } catch (error) {
        console.log(error);
    }
 };

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
      isActive
        ? "bg-lime-400 text-black font-semibold"
        : "text-gray-300 hover:bg-gray-800"
    }`;

  return (
    <>
      
      <button
        className="lg:hidden fixed top-4 left-4 z-50 w-11 h-11 flex items-center justify-center bg-[#111827] text-white rounded-xl shadow-lg border border-gray-700"
        onClick={() => setOpen(true)}
      >
        <Menu size={20} />
      </button>

      
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      
      <aside
        className={`
        fixed 
        top-0 left-0
        h-screen
        w-72
        bg-[#111827]
        text-white
        flex flex-col
        justify-between
        p-6
        z-50
        transition-transform duration-300
        ${
          open
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
      `}
      >
        
        <div>
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-xl font-bold">
                Lead Desk
              </h1>

              <p className="text-xs text-gray-400">
                CRM Platform
              </p>
            </div>

            <button
              className="lg:hidden"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
          </div>

          <nav className="space-y-3">
            <NavLink
              to="/admin/leads"
              className={navLinkClass}
            >
              <ClipboardList size={18} />
              Leads
            </NavLink>

            <NavLink
              to="/admin/profile"
              className={navLinkClass}
            >
              <User size={18} />
              Profile
            </NavLink>
          </nav>
        </div>

        
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-800 hover:bg-red-500 transition-all"
        >
          <LogOut size={18} />
          Logout
        </button>
      </aside>
    </>
  );
}