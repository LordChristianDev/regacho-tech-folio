
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-400"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Touch</span>
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="border border-green-400/20 bg-gray-900/80 backdrop-blur-sm shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-lg">
              <CardTitle className="text-xl">Send me a message</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-green-400/20 focus:border-green-400 bg-gray-800/50 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-green-400/20 focus:border-green-400 bg-gray-800/50 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-green-400/20 focus:border-green-400 min-h-[120px] bg-gray-800/50 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-full py-3 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border border-green-400/20 bg-gray-900/80 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-4">Let's Connect</h3>
                <p className="text-gray-300 mb-6">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and innovation.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors group"
                  >
                    <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span>GitHub</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/lordchristian-regacho/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors group"
                  >
                    <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                  </a>
                  
                  <a 
                    href="mailto:christian@example.com"
                    className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors group"
                  >
                    <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span>Email</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-green-400/20 bg-gray-900/80 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-6 text-center">
                <p className="text-gray-300">
                  Currently based in the Philippines, available for remote work and collaboration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
