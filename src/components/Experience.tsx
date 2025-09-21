import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, TrendingUp, Users, Target } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Product Manager",
      company: "Ecobank Nigeria",
      project: "mySME App",
      period: "Dec 2023 – Feb 2025",
      type: "Full-time",
      achievements: [
        "Oversaw the launch of a digital SME platform with 100,000+ downloads across Nigeria",
        "Prepared and analyzed product performance data to monitor registration funnels",
        "Conducted training workshops that boosted adoption rates by 30%",
        "Delivered structured datasets and dashboards for senior management decision support"
      ],
      skills: ["Product Management", "Data Analysis", "Cross-functional Leadership", "Excel", "Scrum"],
      color: "from-primary to-primary-glow"
    },
    {
      title: "Freelance Digital Marketing Strategist",
      company: "Self-Employed",
      project: "Multiple Client Engagements",
      period: "Sep 2023 – Feb 2025",
      type: "Freelance",
      achievements: [
        "Designed and executed digital strategies, improving client lead generation by 25%",
        "Analyzed campaign performance and optimized targeting, increasing conversions by 15%",
        "Delivered data-driven reports to support SME and startup decisions",
        "Created tailored content achieving 20% uplift in engagement"
      ],
      skills: ["Digital Strategy", "Campaign Optimization", "Data Analysis", "Lead Generation"],
      color: "from-accent to-success"
    },
    {
      title: "Digital Marketing Specialist",
      company: "Pruvia Integrated Ltd",
      project: "Multi-channel Marketing",
      period: "Jan 2023 – Aug 2023",
      type: "Full-time",
      achievements: [
        "Managed multi-channel campaigns, increasing brand engagement by 40%",
        "Used Google Analytics to refine targeting, boosting conversion by 20%",
        "Developed comprehensive reporting systems for campaign performance",
        "Collaborated with design teams to optimize creative assets"
      ],
      skills: ["Google Analytics", "Multi-channel Marketing", "Conversion Optimization"],
      color: "from-success to-primary"
    },
    {
      title: "Social Media Manager",
      company: "Ebonyi Business School",
      project: "Social Media Growth",
      period: "Jan 2022 – Aug 2022",
      type: "Full-time",
      achievements: [
        "Increased social media engagement by 40% in three months",
        "Produced analytics reports to guide Instagram and Facebook strategies",
        "Coordinated event promotions, driving enrollment up by 20%",
        "Streamlined blog content processes, improving delivery speed by 15%"
      ],
      skills: ["Social Media Strategy", "Content Creation", "Analytics", "Event Marketing"],
      color: "from-primary-glow to-accent"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building impactful solutions across fintech, digital marketing, and data analytics
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-success opacity-50" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.title + exp.company} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Timeline dot */}
                <div className={`absolute left-2 md:left-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-glow`} />
                
                {/* Experience Card */}
                <div className="ml-12 md:ml-20">
                  <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="text-2xl font-bold">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-lg text-muted-foreground mt-1">
                            <Building className="w-4 h-4" />
                            <span>{exp.company}</span>
                            <span className="text-accent">•</span>
                            <span className="text-accent font-medium">{exp.project}</span>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <Badge variant="secondary" className="bg-muted/50">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-success" />
                        Key Achievements
                      </h4>
                      <div className="grid gap-3">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground leading-relaxed">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        Technologies & Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="border-primary/30 hover:border-accent hover:text-accent transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 animate-fade-in-up delay-500">
          <Card className="p-6 text-center bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              4+ Years
            </div>
            <div className="text-muted-foreground">Professional Experience</div>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
            <div className="text-3xl mb-2">📊</div>
            <div className="text-2xl font-bold bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
              100K+
            </div>
            <div className="text-muted-foreground">App Downloads Managed</div>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
            <div className="text-3xl mb-2">🚀</div>
            <div className="text-2xl font-bold bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
              40%
            </div>
            <div className="text-muted-foreground">Average Growth Achieved</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;