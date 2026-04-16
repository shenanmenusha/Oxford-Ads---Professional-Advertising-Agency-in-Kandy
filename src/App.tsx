import { useState } from "react";
import { Toaster, toast } from "sonner";
import Hero from "./components/Hero";
import About from "./components/About";
import Hours from "./components/Hours";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <About />
        <Hours />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}
