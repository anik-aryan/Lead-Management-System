import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f6f8]">

      <Navbar />

      <main>

        <ContactForm />

        <About />

      </main>

      <Footer />

    </div>
  );
}