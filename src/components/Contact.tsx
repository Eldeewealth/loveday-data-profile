import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  Calendar,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Lovedayokoro93@gmail.com",
      href: "mailto:Lovedayokoro93@gmail.com",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+44 7308 079194",
      href: "tel:+447308079194",
      color: "from-accent to-success"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bolton, UK",
      href: "#",
      color: "from-success to-primary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View Projects",
      href: "https://https://github.com/Eldeewealth?tab=repositories",
      color: "from-primary-glow to-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-card/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next data project or collaboration opportunity?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up delay-200">
            <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-accent" />
                Get In Touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, whether it's a 
                data science project, product management role, or collaboration on 
                innovative solutions. Let's create something amazing together!
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-all duration-300 hover:scale-105 group"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} group-hover:shadow-glow transition-all duration-300`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">{info.label}</div>
                        <div className="text-muted-foreground group-hover:text-accent transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <h4 className="font-semibold mb-4">Quick Actions</h4>
                <div className="flex flex-wrap gap-3">
                  <a
                  href="https://calendly.com/lovedayokoro93/30min"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/30 hover:border-accent hover:text-black transition-all duration-300"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Call
                  </Button>
                  </a>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/30 hover:border-success hover:text-success transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </Card>

            {/* Availability Card */}
            <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                Available for Opportunities
              </h4>
              <p className="text-sm text-muted-foreground">
                Currently open to full-time positions, freelance projects, and consulting opportunities 
                in data science, product management, and digital analytics.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up delay-300">
            <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Send className="w-6 h-6 text-primary" />
                Send Message
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input 
                      placeholder="Your full name"
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input 
                    placeholder="Project collaboration, job opportunity, etc."
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border/50 text-center">
                <p className="text-sm text-muted-foreground">
                  Typically responds within 24 hours
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;