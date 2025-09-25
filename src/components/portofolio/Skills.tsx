import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Palette, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      color: "primary",
      skills: [
        { name: "HTML", level: 95, badge: "Avancé" },
        { name: "CSS", level: 95, badge: "Avancé" },
        { name: "JavaScript", level: 75, badge: "Intermédiaire" },
        { name: "React", level: 70, badge: "Intermédiaire" },
      ]
    },
    {
      icon: Database,
      title: "Backend & Base de données",
      color: "accent",
      skills: [
        { name: "Python", level: 75, badge: "Intermédiaire" },
        { name: "Flask", level: 70, badge: "Intermédiaire" },
        { name: "API REST", level: 70, badge: "Intermédiaire" },
      ]
    },
    {
      icon: Cpu,
      title: "IA & Technologies avancées",
      color: "primary",
      skills: [
        { name: "LLM (Mistral/Ollama)", level: 80, badge: "Avancé" },
        { name: "SentenceTransformers", level: 75, badge: "Intermédiaire" },
        { name: "FAISS", level: 70, badge: "Intermédiaire" },
        { name: "Traitement NLP", level: 75, badge: "Intermédiaire" },
      ]
    },
    {
      icon: Palette,
      title: "Outils & Productivité",
      color: "accent",
      skills: [
        { name: "WordPress", level: 75, badge: "Intermédiaire" },
        { name: "Microsoft Office", level: 90, badge: "Avancé" },
        { name: "Git/GitHub", level: 80, badge: "Avancé" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mes <span className="text-gradient">compétences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un ensemble varié de technologies que je maîtrise pour créer des solutions web modernes et intelligentes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      category.color === 'primary' 
                        ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground' 
                        : 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground'
                    } transition-all`}>
                      <IconComponent size={24} />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {skill.badge}
                        </Badge>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted/30"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Additional info */}
        <div className="text-center mt-16">
          <Card className="card-gradient border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">En constante évolution</h3>
              <p className="text-muted-foreground leading-relaxed">
                Actuellement étudiant en licence professionnelle d'informatique, je continue d'approfondir mes connaissances 
                et d'explorer de nouvelles technologies. Mon expérience en IA générative et en développement web me permet 
                de créer des solutions innovantes qui combinent les dernières avancées technologiques.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;