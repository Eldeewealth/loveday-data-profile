import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Target } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Years Experience", value: "3+", icon: "📈" },
    { label: "App Downloads", value: "100K+", icon: "📱" },
    { label: "Certifications", value: "8+", icon: "🏆" },
    { label: "Successful Projects", value: "15+", icon: "✨" }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about transforming data into actionable insights that drive business growth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in-up delay-200">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="p-6 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="text-center space-y-2">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* About Content */}
          <div className="space-y-8 animate-fade-in-up delay-300">
            {/* Career Objective */}
            <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold">Career Objective</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Aspiring Data Scientist currently pursuing an MSc in Data Analytics with practical 
                experience in cloud-based data engineering, web scraping, and data visualization. 
                Skilled in using AWS services and Python for data processing, with a strong interest 
                in building scalable pipelines and applying machine learning for business insights.
              </p>
            </Card>

            {/* Location & Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">Location</h4>
                </div>
                <p className="text-muted-foreground">Bolton, UK</p>
              </Card>

              <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="w-5 h-5 text-success" />
                  <h4 className="font-semibold">Education</h4>
                </div>
                <p className="text-muted-foreground">MSc Data Analytics & Technology</p>
              </Card>
            </div>

            {/* Key Highlights */}
            <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <p className="text-muted-foreground">
                    Led the launch of mySME App at Ecobank Nigeria with <span className="text-accent font-medium">100,000+ downloads</span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">
                    Improved client lead generation by <span className="text-primary font-medium">25%</span> through data-driven strategies
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-success mt-2" />
                  <p className="text-muted-foreground">
                    Boosted adoption rates by <span className="text-success font-medium">30%</span> through targeted training workshops
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;