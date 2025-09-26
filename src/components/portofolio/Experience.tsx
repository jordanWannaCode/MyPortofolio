import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Calendar, MapPin, Building2, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Freelance – Développeur Python / IA Générative",
      company: "Client Confidentiel",
      period: "Juin 2024 - Juillet 2024",
      location: "Remote",
      type: "Freelance",
      highlights: [
        "Développement d'un LLM",
        "Extraction intelligente et structuration de données avec embeddings sémantiques",
        "Optimisation des performances avec traitement par fenêtre glissante",
        "Implémentation d'indexation vectorielle",
        "Interface CLI complète pour conversion PDF/DOCX vers Markdown, JSON, YAML"
      ],
      technologies: ["Confidentiel"]
    },
    {
      title: "Stagiaire en développement web",
      company: "ICS SARL",
      period: "Août 2024 - Septembre 2024",
      location: "Lomé, Togo",
      type: "Stage",
      highlights: [
        "Optimisation de l'architecture du catalogue e-commerce",
        "Mise à jour et structuration des données produits (tarifs, caractéristiques, descriptions)",
        "Garantie de la cohérence des informations via l'API du système",
        "Refonte et optimisation de l'interface utilisateur",
        "Intégration de nouveaux plugins pour améliorer l'UX et les performances"
      ],
      technologies: ["E-commerce", "API", "UI/UX", "Web Optimization"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mon <span className="text-gradient">expérience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mes expériences professionnelles qui ont façonné mes compétences en développement web et IA.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-accent font-medium">
                      <Building2 size={18} />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <Badge 
                      variant={exp.type === 'Freelance' ? 'default' : 'outline'}
                      className="w-fit"
                    >
                      {exp.type}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Réalisations clés :</h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Technologies utilisées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA for more experience */}
        <div className="text-center mt-16">
          <Card className="card-gradient border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="text-primary" size={24} />
                <h3 className="text-xl font-semibold">Prêt pour de nouveaux défis</h3>
              </div>
              <p className="text-muted-foreground">
                Je recherche activement des opportunités pour enrichir mon expérience professionnelle 
                et contribuer à des projets innovants dans le développement web et l'IA.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;