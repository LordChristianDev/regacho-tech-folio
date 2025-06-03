
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-[110vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-12 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto text-center animate-fade-in relative z-10 max-w-6xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 leading-[1.1]">
          Lord Christian Carl H. 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 block leading-[1.1] pb-2">Regacho</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Software Analyst | Flutter Developer | Full-Stack Developer | AI-Driven Solutions in Healthcare Tech
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Building smart tools to solve real-world problems
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection("projects")}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-400/25"
          >
            View My Work
          </Button>
          <Button 
            onClick={() => scrollToSection("contact")}
            variant="outline" 
            className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105 bg-transparent backdrop-blur-sm"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
