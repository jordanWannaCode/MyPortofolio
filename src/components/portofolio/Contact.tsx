import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "../../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourriez ajouter la logique d'envoi d'email
    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "regisd16@icloud.com",
      href: "mailto:regisd16@icloud.com"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+228 97 51 16 36",
      href: "tel:+22897511636"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Lomé, Togo",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Restons en <span className="text-gradient">contact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une idée de projet ? Une opportunité ? N'hésitez pas à me contacter pour discuter de vos besoins.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient">Informations de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <p className="font-medium">{info.title}</p>
                        {info.href !== "#" ? (
                          <a 
                            href={info.href} 
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
            
            {/* Social Links */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Réseaux sociaux</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="hover:bg-primary/10 hover:border-primary hover:text-primary transition-all hover:scale-110"
                  >
                    <Github size={20} />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="hover:bg-primary/10 hover:border-primary hover:text-primary transition-all hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Suivez-moi pour rester au courant de mes derniers projets et partages technologiques.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Envoyez-moi un message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Sujet de votre message"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Décrivez votre projet ou votre demande..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full glow-primary hover:scale-105 transition-all"
                    size="lg"
                  >
                    <Send size={18} className="mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="card-gradient border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">Collaborons ensemble</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Que ce soit pour un stage, un projet freelance, ou une collaboration à long terme, 
                je suis toujours ouvert aux nouvelles opportunités passionnantes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="glow-primary hover:scale-105 transition-all"
                  onClick={() => window.location.href = 'mailto:regisd16@icloud.com'}
                >
                  <Mail size={18} className="mr-2" />
                  Discuter d'un projet
                </Button>
                <Button 
                  variant="outline" 
                  className="hover:bg-primary/10 hover:border-primary hover:text-primary transition-all"
                  onClick={() => window.location.href = 'tel:+22897511636'}
                >
                  <Phone size={18} className="mr-2" />
                  Planifier un appel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;