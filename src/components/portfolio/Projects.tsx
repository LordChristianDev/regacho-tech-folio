
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-400"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Projects</span>
        </h2>
        
        <div className="max-w-6xl mx-auto space-y-12">
          <Card className="border border-green-400/20 bg-gray-900/80 backdrop-blur-sm shadow-2xl hover:shadow-green-400/20 transition-all duration-500 transform hover:-translate-y-2">
            <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Guardian Angel Health</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                A medical emergency response platform designed to streamline patient care during critical moments. 
                Guardian Angel acts as a hybrid EMR and emergency response tool, allowing responders to be assigned 
                to real-time emergencies, record detailed patient accounts, track vital signs and medications, 
                bringing clarity and life-saving efficiency to emergency medical situations.
              </p>
              
              {/* Guardian Angel Images Gallery */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-4">
                  <img 
                    src="/lovable-uploads/146e30f7-c4d7-4f1b-a330-87e36ab9f6e8.png" 
                    alt="Guardian Angel Health Dashboard - Patient monitoring and vital signs tracking"
                    className="w-full rounded-lg shadow-lg border border-green-400/20 hover:border-green-400/40 transition-all duration-300"
                  />
                  <img 
                    src="/lovable-uploads/1a3cc1a8-0d54-43d7-b68d-6048fb41a70d.png" 
                    alt="Guardian Angel Health Patient Directory - Comprehensive patient management"
                    className="w-full rounded-lg shadow-lg border border-green-400/20 hover:border-green-400/40 transition-all duration-300"
                  />
                </div>
                <div className="space-y-4">
                  <img 
                    src="/lovable-uploads/ce12602a-bb12-4970-8229-258b5905666e.png" 
                    alt="Guardian Angel Health Medication Management - Real-time medication tracking"
                    className="w-full rounded-lg shadow-lg border border-green-400/20 hover:border-green-400/40 transition-all duration-300"
                  />
                  <img 
                    src="/lovable-uploads/17f182ea-d66f-4bd4-863d-c06248eee803.png" 
                    alt="Guardian Angel Health Field Responders - Emergency response coordination"
                    className="w-full rounded-lg shadow-lg border border-green-400/20 hover:border-green-400/40 transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-400/30">
                  Healthcare Tech
                </span>
                <span className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-400/30">
                  Emergency Response
                </span>
                <span className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-400/30">
                  EMR System
                </span>
                <span className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-400/30">
                  Real-time Tracking
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-green-400/20 bg-gray-900/80 backdrop-blur-sm shadow-2xl hover:shadow-green-400/20 transition-all duration-500 transform hover:-translate-y-2">
            <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl">GrowRight PH</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                A prototype web app designed to help Filipino farmers forecast crop yields and match 
                planting seasons using public APIs. This project combines agricultural data with 
                modern web technologies to support sustainable farming practices.
              </p>
              
              {/* Project Images Gallery */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-4">
                  <img 
                    src="/lovable-uploads/3000dae7-08dc-4261-92a8-3777cd0c6d5a.png" 
                    alt="GrowRight PH Landing Page - Smart Crop Recommendations"
                    className="w-full rounded-lg shadow-lg border border-green-400/20 hover:border-green-400/40 transition-all duration-300"
                  />
                  <img 
                    src="/lovable-uploads/287d29b6-04eb-4497-8c8d-f0f7c69aaeb5.png" 
                    alt="GrowRight PH Features - Location-Based, Data-Driven, Smart Farming"
                    className="w-full rounded-lg shadow-lg border border-green-400/20 hover:border-green-400/40 transition-all duration-300"
                  />
                </div>
                <div className="space-y-4">
                  <img 
                    src="/lovable-uploads/e368b5c4-3f28-47f7-bce7-9a3c5a97a367.png" 
                    alt="GrowRight PH Crop Recommendations Interface"
                    className="w-full rounded-lg shadow-lg border border-green-400/20 hover:border-green-400/40 transition-all duration-300"
                  />
                  <img 
                    src="/lovable-uploads/e705e99b-c333-4673-b6fd-8d46791aff02.png" 
                    alt="GrowRight PH Crop Calendar and Planting Schedule"
                    className="w-full rounded-lg shadow-lg border border-green-400/20 hover:border-green-400/40 transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-400/30">
                  Web Development
                </span>
                <span className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-400/30">
                  API Integration
                </span>
                <span className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-400/30">
                  Agriculture Tech
                </span>
                <span className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-400/30">
                  Data Analytics
                </span>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Card className="border border-green-400/20 bg-gray-900/80 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Certifications</span>
                </h3>
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/291db83a-b19e-457b-8faf-d066683c76f6.png" 
                    alt="NLDML 2023 Conference Certificate - Paper Presentation by Lord Christian Carl H. Regacho"
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-md border border-green-400/20"
                  />
                </div>
                <p className="text-lg text-gray-300">
                  <strong className="text-green-400">Speaker & Participant</strong> at International Conference on NLP, 
                  Data Mining & Machine Learning (NLDML 2023) by AIRCC
                </p>
                <p className="text-md text-gray-400 mt-2">
                  Presented paper: "Automated Identification of Disaster News for Crisis Management using Machine Learning"
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
