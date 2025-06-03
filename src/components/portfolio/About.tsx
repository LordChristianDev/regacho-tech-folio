
import { Card, CardContent } from "@/components/ui/card";
import TechnicalSkills from "./TechnicalSkills";

const About = () => {
  return (
    <>
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Futuristic background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-400/10 to-green-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Me</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border border-green-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm transform hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-4">
                  🚀 Flutter Stack Developer | UI/UX Designer | Full-Stack Problem Solver
                </div>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    I'm a versatile developer with a strong foundation in Flutter, PHP, and React, backed by a solid eye for UI/UX design. I build clean, scalable, and intuitive applications that not only work great—but feel great to use.
                  </p>
                  <p>
                    With hands-on experience conducting product demos in 10+ health facilities, including 3 Level 1 and 1 Level 2 hospitals, I understand how to present complex systems in user-friendly ways. I combine my technical expertise with a people-first mindset, making me equally comfortable in front of stakeholders as I am in front of code.
                  </p>
                  <p>
                    I specialize in end-to-end analytics integration—from Firebase to PostHog to New Relic—and use Sentry for proactive error tracking and performance monitoring. I'm comfortable working independently, managing my own roadmap, and delivering polished features that meet real user needs.
                  </p>
                  <p>
                    Driven, reliable, and ready to make an impact—I'm here to ship great products and deliver excellence every step of the way.
                  </p>
                  <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                    Let's create something users will love. 🎯
                  </p>
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
