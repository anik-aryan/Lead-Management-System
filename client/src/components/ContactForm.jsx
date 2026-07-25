import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { toast } from "react-hot-toast";
import api from "../services/api";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const { name, email, budget, message } = formData;

    if (!name.trim()) {
      toast.error("Please enter your name");
      return false;
    }

    if (name.trim().length < 3) {
      toast.error("Name must be at least 3 characters");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email");
      return false;
    }


    if (!budget) {
      toast.error("Please select your budget");
      return false;
    }

    if (message.trim().length < 10) {
      toast.error("Message should be at least 10 characters");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      await api.post("/leads", formData);

      toast.success("Lead submitted successfully 🎉");

      setFormData({
        name: "",
        email: "",
        phone: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-6 py-16 lg:py-24"
    >
      <div className="grid lg:grid-cols-2 gap-14 items-center">

        

        <div>

          <span className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-semibold">
            <CheckCircle2 size={16} />
            Trusted Lead Management
          </span>

          <h1 className="text-5xl font-bold mt-6 leading-tight text-gray-900">
            Grow Your Business
            <br />
            With Better Leads.
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            Submit your requirements and our team will get back to
            you within 24 hours. We help businesses connect with
            quality customers and manage every lead efficiently.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <div className="bg-white shadow rounded-xl px-5 py-4">
              <h3 className="text-2xl font-bold">500+</h3>
              <p className="text-gray-500 text-sm">
                Leads Managed
              </p>
            </div>

            <div className="bg-white shadow rounded-xl px-5 py-4">
              <h3 className="text-2xl font-bold">24 Hrs</h3>
              <p className="text-gray-500 text-sm">
                Response Time
              </p>
            </div>

            <div className="bg-white shadow rounded-xl px-5 py-4">
              <h3 className="text-2xl font-bold">100%</h3>
              <p className="text-gray-500 text-sm">
                Secure Data
              </p>
            </div>

          </div>

        </div>

        

        <div
          id="contact"
          className="bg-white rounded-3xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold">
            Contact Us
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            Fill out the form below.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-lime-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-lime-400"
            />

            

            <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-lime-400"
                >
                <option value="">Select Budget</option>
                <option value="Under $500">Under $500</option>
                <option value="$500 - $1000">$500 - $1000</option>
                <option value="$1000 - $5000">$1000 - $5000</option>
                <option value="$5000+">$5000+</option>
            </select>

            <textarea
              rows={5}
              name="message"
              placeholder="Tell us about your requirement..."
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl border p-4 resize-none outline-none focus:ring-2 focus:ring-lime-400"
            />

            <button
              disabled={loading}
              className="w-full bg-black text-white rounded-xl py-4 flex justify-center items-center gap-2 hover:bg-gray-900 transition disabled:opacity-60"
            >
              <Send size={18} />

              {loading ? "Submitting..." : "Submit Enquiry"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}