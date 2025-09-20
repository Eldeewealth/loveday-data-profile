import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-primary to-accent blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-accent to-primary blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-primary-glow to-success blur-lg animate-bounce delay-500" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                Loveday
              </span>
              <br />
              <span className="text-foreground">Okoro</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              Data Scientist & 
              <span className="text-accent font-medium">
                {" "}Product Manager
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              MSc Data Analytics graduate with expertise in cloud-based data engineering, 
              machine learning, and product management. Transforming complex data into 
              actionable business insights.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            
            <a 
            href="https://drive.google.com/file/d/1qH_2JjJQRtf-fq3HIwnYRbA0gJQ0F9TR/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            >          
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:border-accent hover:text-accent transition-all duration-300 hover:shadow-elegant"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-4">
            <a 
              href="https://github.com/Eldeewealth/Query_Squad_Project" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all duration-300 hover:shadow-elegant group"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/amlovedayokoro/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all duration-300 hover:shadow-elegant group"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            
            <a 
              href="mailto:Lovedayokoro93@gmail.com" 
              className="p-3 rounded-full bg-card hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all duration-300 hover:shadow-elegant group"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-success transition-colors" />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative justify-self-center animate-fade-in-up delay-300">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-glow-pulse" />
            
            {/* Image container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-primary to-accent shadow-card">
              <img 
                src={profilePhoto} 
                alt="Loveday Okoro - Data Scientist"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-accent to-success rounded-full flex items-center justify-center text-2xl animate-bounce delay-1000">
              📊
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator 
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-primary to-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;