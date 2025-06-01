
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-6">
      <div className="container mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
          Lord Christian Carl H. 
          <span className="text-green-600 block">Regacho</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-4xl mx-auto">
          Software Analyst | Flutter Developer | Full-Stack Developer | AI-Driven Solutions in Healthcare Tech
        </p>
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          Building smart tools to solve real-world problems
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection("projects")}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </Button>
          <Button 
            onClick={() => scrollToSection("contact")}
            variant="outline" 
            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
