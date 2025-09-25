import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Database, 
  Zap, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  Check,
  ArrowRight,
  Code,
  Palette,
  Server
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Sites Web Modernes",
      description: "Sites web responsives et performants avec les dernières technologies",
      features: ["Design responsive", "Optimisation SEO", "Performance optimale", "Compatible tous appareils"],
      price: "À partir de 150€",
      popular: false
    },
    {
      icon: Smartphone,
      title: "Sites Vitrines",
      description: "Présence en ligne professionnelle pour votre entreprise",
      features: ["Design sur-mesure", "Contenu optimisé", "Formulaire contact", "Hébergement inclus"],
      price: "À partir de 100€",
      popular: true
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Boutiques en ligne complètes pour développer vos ventes",
      features: ["Catalogue produits", "Panier d'achat", "Paiement sécurisé", "Gestion commandes"],
      price: "À partir de 300€",
      popular: false
    },
    {
      icon: Database,
      title: "Applications Web",
      description: "Solutions sur-mesure pour automatiser vos processus",
      features: ["Interface personnalisée", "Base de données", "Authentification", "Dashboard admin"],
      price: "Sur devis",
      popular: false
    },
    {
      icon: Zap,
      title: "Optimisation & IA",
      description: "Amélioration de sites existants et intégration d'IA",
      features: ["Audit performance", "Correction bugs", "Intégration IA", "Automatisation"],
      price: "À partir de 80€",
      popular: false
    },
    {
      icon: Code,
      title: "Maintenance & Support",
      description: "Suivi et maintenance continue de vos projets web",
      features: ["Mises à jour", "Sauvegarde", "Support technique", "Monitoring"],
      price: "20€/mois",
      popular: false
    }
  ];

  const whyChooseMe = [
    "🎓 Étudiant en informatique passionné",
    "💡 Spécialisé en IA générative",
    "⚡ Livraison rapide et efficace",
    "💰 Tarifs compétitifs pour jeunes entreprises",
    "🤝 Accompagnement personnalisé",
    "🔧 Support technique inclus"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header/Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full animate-float blur-xl"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-accent rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-primary rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              🚀 Développeur Web Junior à Lomé
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Régis d'ALMEIDA</span>
              <br />
              <span className="text-2xl md:text-4xl text-muted-foreground font-normal">
                Créateur de sites web modernes
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transformez votre présence en ligne avec des solutions web innovantes, 
              alliant créativité, performance et intelligence artificielle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="glow-primary hover:scale-105 transition-all">
                <Phone size={18} className="mr-2" />
                +228 97 51 16 36
              </Button>
              <Button size="lg" variant="outline" className="hover:bg-primary/10">
                <Mail size={18} className="mr-2" />
                regisd16@icloud.com
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mes <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Solutions complètes pour votre présence digitale
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className={`relative card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group ${
                    service.popular ? 'ring-2 ring-primary/20 shadow-lg shadow-primary/10' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-3 py-1 shadow-lg">
                        <Star size={14} className="mr-1" />
                        Populaire
                      </Badge>
                    </div>
                  )}
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <Check size={16} className="text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="font-bold text-lg text-primary">{service.price}</span>
                      <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
                        Commander
                        <ArrowRight size={14} className="ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Pourquoi me <span className="text-gradient">choisir ?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {whyChooseMe.map((reason, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50">
                  <span className="text-2xl">{reason.split(' ')[0]}</span>
                  <span className="font-medium">{reason.split(' ').slice(1).join(' ')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies <span className="text-gradient">Maîtrisées</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="card-gradient border-border/50 text-center">
              <CardContent className="p-6">
                <Palette className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Frontend</h3>
                <p className="text-sm text-muted-foreground mb-4">Interfaces modernes et responsives</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["HTML5", "CSS3", "JavaScript", "React"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-border/50 text-center">
              <CardContent className="p-6">
                <Server className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Backend</h3>
                <p className="text-sm text-muted-foreground mb-4">Logique métier et bases de données</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Python", "Flask", "API REST", "Databases"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-border/50 text-center">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">IA & Outils</h3>
                <p className="text-sm text-muted-foreground mb-4">Intelligence artificielle et automatisation</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["IA Générative", "WordPress", "Git", "SEO"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-2xl mx-auto card-gradient border-border/50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">
                Prêt à digitaliser votre <span className="text-gradient">projet ?</span>
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Discutons de vos besoins et créons ensemble la solution parfaite pour votre entreprise.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="glow-primary hover:scale-105 transition-all">
                    <Phone size={18} className="mr-2" />
                    Appelez maintenant
                  </Button>
                  <Button size="lg" variant="outline" className="hover:bg-primary/10">
                    <Mail size={18} className="mr-2" />
                    Envoyer un email
                  </Button>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin size={16} />
                  <span>Lomé, Togo • Disponible en remote</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Régis d'ALMEIDA • Développeur Web Junior • Lomé, Togo
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Services;