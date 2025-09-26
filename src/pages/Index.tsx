import Navigation from "../components/portofolio/Navigation";
import Hero from "../components/portofolio/Hero";
import About from "../components/portofolio/About";
import Skills from "../components/portofolio/Skills";
import Experience from "../components/portofolio/Experience";
import Projects from "../components/portofolio/Projects";
import Contact from "../components/portofolio/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update page metadata for SEO
    document.title = "Régis d'ALMEIDA - Développeur Web & IA | portofolio";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'portofolio de Régis d\'ALMEIDA, étudiant en informatique et développeur web spécialisé en IA générative. Découvrez mes projets, compétences et expériences professionnelles.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Régis d'ALMEIDA. A Lomé, Togo.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;