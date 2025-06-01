
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Junior Software Analyst",
      company: "SugboDoc Technologies",
      period: "Jan 2024 – Present",
      responsibilities: [
        "Lead developer of the SugboDoc Patient Application (appointments, prescriptions, care team, doctors)",
        "Conducted demos for clinics/hospitals across the Philippines",
        "Participated in startup events like DOHE Startup Summit",
        "Digitized EMRs for hospitals in Borongan, Catbalogan, and Oras",
        "Managed UI/UX, Figma prototypes, testing, Jira documentation, and branding"
      ]
    },
    {
      title: "Head of Operations",
      company: "Warriors Turf",
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
      period: "Nov 2018 – Jan 2019",
      responsibilities: [
        "Researched and implemented strategies to improve delivery logistics",
        "Worked on barcode tagging and warehouse organization"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-green-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Work <span className="text-green-600">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="bg-green-600 text-white rounded-t-lg">
                <CardTitle className="text-xl">{exp.title}</CardTitle>
                <div className="flex justify-between items-center">
                  <span className="text-green-100">{exp.company}</span>
                  <span className="text-green-200 text-sm">{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
