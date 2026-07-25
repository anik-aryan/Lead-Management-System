import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-3 gap-10">

          

          <div>
            <h2 className="text-3xl font-bold">
              LeadDesk<span className="text-lime-400">.</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              LeadDesk CRM helps businesses collect, organize and manage
              customer enquiries efficiently with a modern lead management
              system.
            </p>
                    <p className="text-gray-400 mt-5 leading-7">
                Built for{" "}
                <a
                href="https://digitalheroesco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-semibold hover:underline"
                >
                Digital Heroes Training Task
                </a>
            </p>
          </div>

          

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <button
                onClick={() => scrollTo("home")}
                className="text-left text-gray-400 hover:text-lime-400 transition"
              >
                Home
              </button>

              <button
                onClick={() => scrollTo("about")}
                className="text-left text-gray-400 hover:text-lime-400 transition"
              >
                About Us
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="text-left text-gray-400 hover:text-lime-400 transition"
              >
                Contact
              </button>

            </div>
          </div>

          

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3 items-center text-gray-400">
                <Mail size={18} />
                support@leaddesk.com
              </div>

              <div className="flex gap-3 items-center text-gray-400">
                <Phone size={18} />
                +91 98765 43210
              </div>

              <div className="flex gap-3 items-center text-gray-400">
                <MapPin size={18} />
                Bhopal, Madhya Pradesh
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 text-center lg:text-left">
            © {new Date().getFullYear()} LeadDesk CRM. All rights reserved.
          </p>

          <button
            onClick={() => scrollTo("home")}
            className="w-12 h-12 rounded-full bg-lime-500 hover:bg-lime-400 flex items-center justify-center transition"
          >
            <ArrowUp size={22} color="black" />
          </button>

        </div>

      </div>
    </footer>
  );
}