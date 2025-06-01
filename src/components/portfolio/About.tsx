
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = {
    languages: ["Python", "Dart", "SQL", "TypeScript"],
    frameworks: ["Flutter", "CodeIgniter", "React"],
    tools: ["Power BI", "Figma", "Supabase", "Excel", "After Effects"],
    analytics: ["Sentry", "PostHog", "Firebase", "Google Analytics"],
    softSkills: ["Communication", "Leadership", "People Management"]
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About <span className="text-green-600">Me</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 border-green-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                A passionate developer with hands-on experience in mobile development, UI/UX, and project operations. 
                I'm currently working at SugboDoc Technologies, where I lead mobile development and help digitize 
                healthcare records across the Philippines.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="border-green-100 hover:border-green-300 transition-colors duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-600 mb-4 capitalize">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span 
                        key={skill}
                        className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm border border-green-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
