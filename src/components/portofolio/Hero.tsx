import { Button } from "../../components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full animate-float blur-xl"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-primary rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main heading with gradient text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Bonjour, je suis{" "}
            <span className="text-gradient">Régis d'ALMEIDA</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            Étudiant en informatique & Développeur web passionné par l'IA générative
          </p>
          
          {/* Location */}
          <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            📍 Lomé, Togo
          </p>
          
          {/* Contact info */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a href="tel:+22897511636" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone size={18} />
              +228 97 51 16 36
            </a>
            <a href="mailto:regisd16@icloud.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail size={18} />
              regisd16@icloud.com
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="glow-primary hover:scale-105 transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => scrollToSection('projects')}
            >
              Voir mes projets
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
              onClick={() => navigate('/services')}
            >
              Mes services
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
              <Github size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
              <Linkedin size={24} />
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce animate-slide-up" style={{ animationDelay: '1s' }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection('about')}
              className="hover:text-primary transition-colors"
            >
              <ArrowDown size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;