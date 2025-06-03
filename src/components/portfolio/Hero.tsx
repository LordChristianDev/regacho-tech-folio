import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-6 py-32 relative overflow-hidden">
      {/* Enhanced futuristic background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0deg,rgba(120,119,198,0.05)_90deg,transparent_180deg)]"></div>
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      
      <div className="container mx-auto text-center animate-fade-in relative z-10 max-w-6xl">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-cyan-300 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Available for opportunities
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-16 leading-[1.05] pb-8">
          <span className="block text-white mb-4">Lord Christian Carl H.</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse pb-6">
            Regacho
          </span>
        </h1>
        
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
            Software Analyst • Flutter Developer • Full-Stack Engineer
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Crafting AI-driven healthcare solutions and building the future of digital transformation
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
          <Button 
            onClick={() => scrollToSection("projects")}
            className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-cyan-400/25 border border-cyan-400/20"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </Button>
          <Button 
            onClick={() => scrollToSection("contact")}
            variant="outline" 
            className="group relative border-2 border-purple-400/50 text-purple-300 hover:text-white px-8 py-4 rounded-full text-lg transition-all duration-500 transform hover:scale-105 bg-transparent backdrop-blur-sm hover:bg-purple-500/20 hover:border-purple-400"
          >
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
