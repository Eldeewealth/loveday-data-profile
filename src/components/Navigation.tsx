import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Briefcase, Code, Mail, FolderOpen } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: "home", label: "Home", icon: Home, href: "#home", isRoute: false },
    { id: "about", label: "About", icon: User, href: "#about", isRoute: false },
    { id: "experience", label: "Experience", icon: Briefcase, href: "#experience", isRoute: false },
    { id: "skills", label: "Skills", icon: Code, href: "#skills", isRoute: false },
    { id: "portfolio", label: "Portfolio", icon: FolderOpen, href: "/portfolio", isRoute: true },
    { id: "contact", label: "Contact", icon: Mail, href: "#contact", isRoute: false }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: string, isRoute: boolean) => {
    if (isRoute) {
      navigate(href);
    } else {
      // Handle section scrolling
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);
        
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-card/80 backdrop-blur-lg border border-border/50 rounded-full px-6 py-3 shadow-elegant">
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = item.isRoute 
                ? location.pathname === item.href 
                : activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.href, item.isRoute)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-accent text-white shadow-glow"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-6 right-6 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-card/80 backdrop-blur-lg border-border/50 hover:shadow-elegant transition-all duration-300"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-14 right-0 bg-card/95 backdrop-blur-lg border border-border/50 rounded-lg shadow-elegant p-2 min-w-[200px]">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = item.isRoute 
                ? location.pathname === item.href 
                : activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.href, item.isRoute)}
                  className={`w-full px-4 py-3 rounded-lg text-left font-medium transition-all duration-300 flex items-center gap-3 ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-accent text-white"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </nav>

      {/* Brand/Logo - Top Left */}
      <div className="fixed top-6 left-6 z-40 hidden md:block">
        <button
          onClick={() => handleNavigation("#home", false)}
          className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        >
          LO
        </button>
      </div>
    </>
  );
};

export default Navigation;