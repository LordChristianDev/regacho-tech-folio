
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-400"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Touch</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <Card className="border border-green-400/20 bg-gray-900/80 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-6 text-center">Let's Connect</h3>
              <p className="text-gray-300 mb-8 text-center text-lg">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and innovation.
              </p>
              
              <div className="space-y-6">
                <a 
                  href="https://www.linkedin.com/in/lordchristian-regacho/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-4 text-gray-300 hover:text-green-400 transition-colors group p-4 rounded-lg border border-green-400/20 hover:border-green-400/40 bg-gray-800/30"
                >
                  <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">Connect on LinkedIn</span>
                </a>
                
                <a 
                  href="mailto:lordchristian.regacho@gmail.com"
                  className="flex items-center justify-center space-x-4 text-gray-300 hover:text-green-400 transition-colors group p-4 rounded-lg border border-green-400/20 hover:border-green-400/40 bg-gray-800/30"
                >
                  <Mail className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">lordchristian.regacho@gmail.com</span>
                </a>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-300">
                  Currently based in the Philippines, available for remote work and collaboration.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
