
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Junior Software Analyst",
      company: "SUGBODOC TECHNOLOGIES INC.",
      location: "Cebu City",
      period: "January 2024 – Present",
      responsibilities: [
        "Started as a Software Development Intern and transitioned to a Junior Software Analyst",
        "Built a Patient EMR App using Flutter and CodeIgniter 3, integrating ChatGPT 3.0, Google Maps, Brevo email API, and SQL injection protection",
        "Developed a standalone Radiology Information System (RIS) with HL7 socket integration",
        "Led UI/UX design, testing, and production deployment of the EMR App, using tools like Figma and Jira",
        "Attended DOHE Startup Summit and conducted fieldwork in hospitals to support their digital transformation",
        "Delivered platform demos and training for healthcare staff",
        "Integrated monitoring tools including Sentry, Firebase Analytics, PostHog, and New Relic"
      ]
    },
    {
      title: "Head of Operations",
      company: "Warriors Turf",
      location: "Philippines",
      period: "Feb 2020 – Sep 2023",
      responsibilities: [
        "Collaborated with ambassadors and volunteers to boost clothing sales",
        "Led sales and inventory during major campus events",
        "Skilled in POS and stock management"
      ]
    },
    {
      title: "Warehouse Researcher",
      company: "Cebu Home & Builders Center",
      location: "Cebu City",
      period: "Nov 2018 – Jan 2019",
      responsibilities: [
        "Researched and implemented strategies to improve delivery logistics",
        "Worked on barcode tagging and warehouse organization"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-gradient-to-tr from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 shadow-2xl hover:shadow-cyan-400/10 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10 bg-gradient-to-r from-slate-800/50 to-gray-800/50 backdrop-blur-sm border-b border-white/10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <CardTitle className="text-xl md:text-2xl text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mt-2">
                      <span className="text-cyan-400 font-semibold text-lg">{exp.company}</span>
                      {exp.location && (
                        <>
                          <span className="hidden md:block text-gray-500">•</span>
                          <span className="text-purple-400">{exp.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30">
                      <span className="text-cyan-300 text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-8 relative z-10">
                <ul className="space-y-4">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                        {resp}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
