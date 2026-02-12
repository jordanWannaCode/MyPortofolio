import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { ExternalLink, Github, Layout, Settings, Zap } from "lucide-react";

const Projects = () => {
  
  const projects = [
    {
      title: "AgroConnect",
      description: "AgroConnect est une application destinée aux agriculteurs et acheteurs agricoles en Afrique de l'Ouest. Elle vise à connecter les producteurs aux marchés tout en leur fournissant des informations fiables pour optimiser la production, la gestion des cultures et la commercialisation.",
      icon: Layout,
      technologies: ["..."],
      features: [
        "...",
        "...",
        "...",
        "...",
        "...",
        "...",
      ],
      status: "En développement",
      color: "primary",
      url: null,
      githubUrl: null
    },
    {
      title: "Générateur de Memes",
      description: "Application amusante qui permet de créer des memes personnalisés avec des templates populaires et des outils de personnalisation.",
      icon: Zap,
      technologies: ["javascipt", "html", "css", ],
      features: [
        "Galerie de memes",
        "Personnalisation du texte",
        "Interface intuitive",
        "Partage de memes",
        "Export en haute qualité"
      ],
      status: "Terminé",
      color: "accent",
      url: "https://jordanwannacode.github.io/MEME_GENERATOR/", // Remplacez par l'URL réelle
      githubUrl: "https://github.com/jordanWannaCode/MEME_GENERATOR" // Remplacez par l'URL GitHub réelle
    },
    {
      title: "App de Gestion de Projets",
      description: "Solution complète pour la gestion et le suivi de projets, avec des fonctionnalités avancées de collaboration et de reporting.",
      icon: Settings,
      technologies: ["React", "typescript", "nodejs", "API REST", "mongodb", "Express"],
      features: [
        "Dashboard interactif",
        "Collaboration en temps réel",
        "Reporting avancé",
        "Notifications"
      ],
      status: "En développement",
      color: "primary",
      url: "",
      githubUrl: ""
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mes <span className="text-gradient">projets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une sélection de projets qui démontrent mes compétences en développement web, IA et création d'interfaces.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group h-full"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${
                        project.color === 'primary' 
                          ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground' 
                          : 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground'
                      } transition-all`}>
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                      </div>
                    </div>
                    <Badge 
                      variant={project.status === 'Terminé' ? 'default' : 'outline'}
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Fonctionnalités :</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Technologies :</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      disabled={project.status !== 'Terminé' || !project.url}
                      
                      {...project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                          Voir le projet
                        </a>
                      )}
                                          >
                      <ExternalLink size={16} className="mr-2" />
                      Voir le projet
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      disabled={project.status !== 'Terminé' || !project.githubUrl}

                      {...project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                        >
                          Voir sur GitHub
                        </a>
                      )}
                                          >
                      <Github size={16} className="mr-2" />
                      Code source
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Additional projects note */}
        <div className="text-center mt-16">
          <Card className="card-gradient border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">Et bien plus à venir...</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ces projets représentent une partie de mon travail. Je travaille constamment sur de nouvelles idées 
                et expérimente avec les dernières technologies. Chaque projet est une opportunité d'apprendre 
                et de perfectionner mes compétences.
              </p>
              <Button 
                className="glow-primary hover:scale-105 transition-all"
                onClick={() => window.open('https://github.com/jordanWannaCode', '_blank')}
              >
                <Github size={18} className="mr-2" />
                Voir tous mes projets sur GitHub
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
