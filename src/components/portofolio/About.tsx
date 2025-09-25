import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { GraduationCap, MapPin, Languages, Heart } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const interests = ["Basketball", "Dessin", "Mannequinat"];
  
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            À propos de <span className="text-gradient">moi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionné par le développement web et l'intelligence artificielle, je combine créativité et technologies pour créer des solutions innovantes.
          </p>
        </div>
        
        {/* Photo Profile Section */}
        <div className="flex justify-center mb-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-glow"></div>
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="Régis d'ALMEIDA - Développeur Web" 
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-background shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Formation */}
          <Card className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-semibold">Formation</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-primary">Licence Professionnelle en Informatique</h4>
                  <p className="text-sm text-muted-foreground">Institut Polytechnique DEFITECH</p>
                  <p className="text-xs text-muted-foreground">Oct 2022 - En cours</p>
                </div>
                <div>
                  <h4 className="font-medium">Baccalauréat Scientifique</h4>
                  <p className="text-sm text-muted-foreground">Collège Saint Joseph</p>
                  <p className="text-xs text-muted-foreground">2021 - 2022</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Localisation */}
          <Card className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-semibold">Localisation</h3>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-medium text-primary">Lomé, Togo 🇹🇬</p>
                <p className="text-sm text-muted-foreground">
                  Disponible pour des projets locaux et internationaux en remote
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Langues */}
          <Card className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Languages size={24} />
                </div>
                <h3 className="text-xl font-semibold">Langues</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Français</span>
                  <Badge variant="secondary">Natif</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Anglais</span>
                  <Badge variant="outline">Avancé</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Centres d'intérêt */}
          <Card className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group md:col-span-2 lg:col-span-3">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-semibold">Centres d'intérêt</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary transition-colors"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground mt-4">
                Quand je ne code pas, vous me trouverez sur un terrain de basket, en train de dessiner ou lors de séances photo. 
                Ces activités nourrissent ma créativité et m'aident à aborder les projets tech avec une perspective unique.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;