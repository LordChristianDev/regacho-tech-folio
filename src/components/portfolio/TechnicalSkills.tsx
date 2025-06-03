
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Cloud, Settings, Smartphone, Globe } from "lucide-react";

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["Flutter", "React", "TypeScript", "Tailwind CSS", "UI/UX Design"],
      gradient: "from-emerald-500 to-blue-500",
      bgGradient: "from-emerald-500/10 to-blue-500/10"
    },
    {
      title: "Backend Development", 
      icon: Database,
      skills: ["PHP", "CodeIgniter", "Node.js", "SQL", "API Integration"],
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-500/10 to-indigo-500/10"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["Firebase", "Google Cloud", "CI/CD", "Docker", "Git"],
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-500/10 to-purple-500/10"
    },
    {
      title: "Development Tools",
      icon: Settings,
      skills: ["Figma", "Jira", "Sentry", "PostHog", "New Relic"],
      gradient: "from-purple-500 to-emerald-500",
      bgGradient: "from-purple-500/10 to-emerald-500/10"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["Flutter", "Cross-platform", "App Store", "Mobile UI/UX"],
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10"
    },
    {
      title: "AI & Integration",
      icon: Globe,
      skills: ["ChatGPT API", "Google Maps", "HL7", "Healthcare Tech"],
      gradient: "from-teal-500 to-blue-500",
      bgGradient: "from-teal-500/10 to-blue-500/10"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Specialized in modern technologies that power next-generation healthcare solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-400/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4 group-hover:text-emerald-300 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                        <span className="text-sm font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
