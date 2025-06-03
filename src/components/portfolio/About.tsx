
import { Card, CardContent } from "@/components/ui/card";
import TechnicalSkills from "./TechnicalSkills";

const About = () => {
  return (
    <>
      <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-emerald-900 relative overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(37,99,235,0.05)_180deg,transparent_360deg)]"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Card className="relative bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl hover:shadow-emerald-400/10 transition-all duration-500 transform hover:-translate-y-1 overflow-hidden">
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-blue-400/20 to-purple-400/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <CardContent className="p-10 md:p-12 relative z-10">
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <div className="flex items-center mb-8">
                    <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full mr-4 animate-pulse"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                      Flutter Developer • Healthcare Tech Innovator • UI/UX Designer
                    </h3>
                  </div>
                  
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                    I'm a versatile developer specializing in <span className="text-emerald-400 font-semibold">Flutter</span>, <span className="text-blue-400 font-semibold">PHP</span>, and <span className="text-purple-400 font-semibold">React</span>, with a passion for creating intuitive healthcare solutions that transform how medical professionals and patients interact with technology.
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    With hands-on experience conducting product demos across <span className="text-emerald-400 font-semibold">10+ healthcare facilities</span>, including Level 1 and Level 2 hospitals, I bridge the gap between complex technical systems and user-friendly experiences. My approach combines deep technical expertise with real-world healthcare insights.
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I specialize in comprehensive analytics integration—from <span className="text-blue-400 font-semibold">Firebase</span> to <span className="text-emerald-400 font-semibold">PostHog</span> to <span className="text-purple-400 font-semibold">New Relic</span>—and leverage <span className="text-green-400 font-semibold">Sentry</span> for proactive monitoring. I thrive working independently, managing roadmaps, and delivering polished solutions that meet critical healthcare needs.
                  </p>
                  
                  <div className="mt-8 p-6 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-xl border border-white/10">
                    <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 text-center">
                      ⚡ Ready to build the future of healthcare technology ⚡
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <TechnicalSkills />
    </>
  );
};

export default About;
