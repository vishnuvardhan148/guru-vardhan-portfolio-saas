
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const Index = () => {
  useEffect(() => {
    document.title = "Vishnu Vardhan Gurram - Portfolio";
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-background text-foreground font-sans">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Index;
