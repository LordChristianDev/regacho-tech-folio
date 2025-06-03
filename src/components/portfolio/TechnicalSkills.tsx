
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { Code, Database, Wrench, TrendingUp, Activity } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TechnicalSkills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90, color: "#3776ab" },
        { name: "Dart", level: 85, color: "#0175c2" },
        { name: "TypeScript", level: 80, color: "#3178c6" },
        { name: "SQL", level: 75, color: "#336791" }
      ]
    },
    {
      icon: Wrench,
      title: "Frameworks & Libraries",
      skills: [
        { name: "Flutter", level: 90, color: "#02569b" },
        { name: "React", level: 80, color: "#61dafb" },
        { name: "CodeIgniter", level: 75, color: "#dd4814" }
      ]
    },
    {
      icon: Database,
      title: "Tools & Platforms",
      skills: [
        { name: "Power BI", level: 85, color: "#f2c811" },
        { name: "Figma", level: 80, color: "#f24e1e" },
        { name: "Supabase", level: 75, color: "#3ecf8e" },
        { name: "After Effects", level: 70, color: "#9999ff" }
      ]
    },
    {
      icon: Activity,
      title: "Analytics & Monitoring",
      skills: [
        { name: "Sentry", level: 85, color: "#362d59" },
        { name: "PostHog", level: 80, color: "#1d4aff" },
        { name: "Firebase", level: 85, color: "#ffca28" },
        { name: "Google Analytics", level: 75, color: "#e37400" }
      ]
    }
  ];

  const overallProficiency = [
    { name: "Frontend", value: 85, fill: "#10b981" },
    { name: "Backend", value: 80, fill: "#3b82f6" },
    { name: "Mobile", value: 90, fill: "#8b5cf6" },
    { name: "Analytics", value: 82, fill: "#f59e0b" }
  ];

  const chartConfig = {
    frontend: { label: "Frontend", color: "#10b981" },
    backend: { label: "Backend", color: "#3b82f6" },
    mobile: { label: "Mobile", color: "#8b5cf6" },
    analytics: { label: "Analytics", color: "#f59e0b" }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-400/10 to-green-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiency across different domains
          </p>

          {/* Overall Proficiency Chart */}
          <div className="mb-16">
            <Card className="border border-green-200/50 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  <TrendingUp className="inline-block mr-2 w-6 h-6" />
                  Overall Proficiency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart data={overallProficiency} innerRadius="20%" outerRadius="80%">
                      <RadialBar
                        dataKey="value"
                        cornerRadius={10}
                        fill="#8884d8"
                      />
                      <ChartTooltip
                        content={<ChartTooltipContent />}
                        cursor={false}
                      />
                    </RadialBarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.title}
                  className={`border border-green-200/50 hover:border-green-400/50 transition-all duration-500 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: `${categoryIndex * 200}ms` 
                  }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                      <IconComponent className="mr-3 w-6 h-6 text-green-600" />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill.name}
                        className={`transition-all duration-700 ${
                          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                        }`}
                        style={{ 
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` 
                        }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress 
                          value={isVisible ? skill.level : 0}
                          className="h-3 bg-gray-200"
                          style={{
                            ['--progress-background' as any]: skill.color
                          }}
                        />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Skills Bar Chart */}
          <div className="mt-16">
            <Card className="border border-green-200/50 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  Skills Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={skillCategories.flatMap(cat => 
                      cat.skills.map(skill => ({
                        name: skill.name,
                        level: skill.level,
                        category: cat.title,
                        fill: skill.color
                      }))
                    )}>
                      <XAxis 
                        dataKey="name" 
                        angle={-45}
                        textAnchor="end"
                        height={100}
                        fontSize={12}
                      />
                      <YAxis domain={[0, 100]} />
                      <Bar 
                        dataKey="level" 
                        radius={[4, 4, 0, 0]}
                        fill="#8884d8"
                      />
                      <ChartTooltip 
                        content={<ChartTooltipContent />}
                        cursor={{ fill: 'rgba(16, 185, 129, 0.1)' }}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
