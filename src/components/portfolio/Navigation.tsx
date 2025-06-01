
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-green-400/20" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={scrollToTop}
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 hover:scale-105 transition-transform duration-300"
          >
            Lord Christian Carl Regacho
          </button>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-gray-300 hover:text-green-400 transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-green-400 transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("experience")}
              className="text-gray-300 hover:text-green-400 transition-colors duration-300"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-green-400 transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-green-400 transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
