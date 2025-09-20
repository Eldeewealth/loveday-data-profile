import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        <div id="experience">
          <Experience />
        </div>
        
        <div id="skills">
          <Skills />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>

      {/* WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50 bg-card/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Loveday Okoro. Built with passion for data science and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
