import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { ExternalLink, Github, Layout, Settings, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Designs de Pages Web",
      description: "Collection de designs modernes et responsives créés avec HTML et CSS, mettant l'accent sur l'expérience utilisateur et l'esthétique contemporaine.",
      icon: Layout,
      technologies: ["HTML5", "CSS3", "Responsive Design", "UI/UX"],
      features: [
        "Designs responsives multi-appareils",
        "Animations CSS avancées",
        "Optimisation des performances",
        "Standards d'accessibilité"
      ],
      status: "Terminé",
      color: "primary"
    },
    {
      title: "Générateur de Memes",
      description: "Application amusante qui permet de créer des memes personnalisés avec des templates populaires et des outils de personnalisation.",
      icon: Zap,
      technologies: ["Python", "Flask", "Templates", "Image Processing"],
      features: [
        "Templates de memes populaires",
        "Personnalisation du texte",
        "Interface intuitive",
        "Export en haute qualité"
      ],
      status: "En développement",
      color: "accent"
    },
    {
      title: "App de Gestion de Projets",
      description: "Solution complète pour la gestion et le suivi de projets, avec des fonctionnalités avancées de collaboration et de reporting.",
      icon: Settings,
      technologies: ["React", "Python", "API REST", "Database"],
      features: [
        "Dashboard interactif",
        "Collaboration en temps réel",
        "Reporting avancé",
        "Notifications intelligentes"
      ],
      status: "En développement",
      color: "primary"
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
                      disabled={project.status !== 'Terminé'}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Voir le projet
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      disabled={project.status !== 'Terminé'}
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
              <Button className="glow-primary hover:scale-105 transition-all">
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