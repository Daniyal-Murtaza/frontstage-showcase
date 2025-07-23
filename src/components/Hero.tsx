import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-in fade-in duration-1000">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
            Frontend Developer
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crafting beautiful, interactive web experiences with modern technologies and clean code
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <Button variant="ghost" size="icon" className="hover:shadow-glow">
              <Github size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:shadow-glow">
              <Linkedin size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:shadow-glow">
              <Mail size={20} />
            </Button>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" onClick={scrollToProjects}>
              View My Work
            </Button>
            <Button variant="outline-hero" onClick={scrollToContact}>
              Get In Touch
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;