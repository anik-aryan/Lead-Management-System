import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        
        <div
          className="text-2xl font-bold text-gray-900 cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          LeadDesk<span className="text-lime-500">.</span>
        </div>

        
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo("home")}
            className="text-gray-700 hover:text-black font-medium transition"
          >
            Home
          </button>

          <button
            onClick={() => scrollTo("about")}
            className="text-gray-700 hover:text-black font-medium transition"
          >
            About Us
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            Contact
          </button>
        </nav>

        
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <button
            onClick={() => scrollTo("home")}
            className="w-full py-4"
          >
            Home
          </button>

          <button
            onClick={() => scrollTo("about")}
            className="w-full py-4"
          >
            About Us
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="w-full py-4 bg-black text-white"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}