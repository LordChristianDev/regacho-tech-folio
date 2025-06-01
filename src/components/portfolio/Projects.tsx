
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Featured <span className="text-green-600">Projects</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
              <CardTitle className="text-2xl">GrowRight PH</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                A prototype web app designed to help Filipino farmers forecast crop yields and match 
                planting seasons using public APIs. This project combines agricultural data with 
                modern web technologies to support sustainable farming practices.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Web Development
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  API Integration
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Agriculture Tech
                </span>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Card className="border-green-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Certifications</h3>
                <p className="text-lg text-gray-700">
                  <strong>Speaker & Participant</strong> at International Conference on NLP, 
                  Data Mining & Machine Learning (NLDML 2023) by AIRCC
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
