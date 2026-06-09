import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import Splash from "./components/Splash";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import WhyNeuraxis from "./components/WhyNeuraxis";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && <Splash onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <WhyNeuraxis />
        <Team />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
