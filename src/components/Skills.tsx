import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Database, 
  Cloud, 
  BarChart3, 
  GitBranch, 
  Brain,
  Palette,
  Globe
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Data Analysis",
      icon: Code2,
      color: "from-primary to-primary-glow",
      skills: [
        { name: "Python", level: 90, tools: ["pandas", "NumPy", "scikit-learn", "PySpark"] },
        { name: "R", level: 80, tools: ["dplyr", "ggplot2", "stringr"] },
        { name: "SQL", level: 85, tools: ["MySQL", "PostgreSQL"] }
      ]
    },
    {
      title: "Cloud & Big Data",
      icon: Cloud,
      color: "from-accent to-success",
      skills: [
        { name: "AWS Services", level: 85, tools: ["S3", "Glue", "Athena", "IAM"] },
        { name: "Data Engineering", level: 80, tools: ["ETL", "Pipelines"] },
        { name: "Big Data Tools", level: 70, tools: ["PySpark", "Hadoop"] },
        { name: "Containerisation", level: 72, tools: ["Docker"] },
        { name: "MLOps", level: 68, tools: ["MLflow", "CI/CD"] }
   ]
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      color: "from-success to-primary",
      skills: [
        { name: "Python Viz", level: 88, tools: ["Matplotlib", "Seaborn"] },
        { name: "R Visualization", level: 85, tools: ["ggplot2", "ggcorrplot"] },
        { name: "Business Intelligence", level: 80, tools: ["Power BI", "Tableau", "Excel", "Dashboards"] },
        { name: "Front-End Dashboards", level: 78, tools: ["React", "Vite", "Streamlit", "Dash", "Tailwind"] }
      ]
    },
    {
      title: "Development Tools & Standards",
      icon: GitBranch,
      color: "from-primary-glow to-accent",
      skills: [
        { name: "Version Control", level: 85, tools: ["Git", "GitHub"] },
        { name: "Data Formats", level: 90, tools: ["CSV", "JSON", "XML"] },
        { name: "Machine Learning", level: 75, tools: ["NLP", "Classification"] },
        { name: "Web Scraping", level: 75, tools: ["BeautifulSoup", "Scrapy", "Selenium", "rvest"] },
        { name: "Compliance", level: 65, tools: ["GDPR", "Data Ethics"] }
      ]
    }
  ];

  const certifications = [
    { name: "PostgreSQL Developer", provider: "Simplilearn", year: "2025", color: "primary" },
    { name: "AWS Cloud Practitioner", provider: "AWS", year: "2025", color: "accent" },
    { name: "Advanced Google Analytics", provider: "Google", year: "2023", color: "success" },
    { name: "HubSpot Content Marketing", provider: "HubSpot", year: "2023", color: "primary-glow" },
    { name: "Digital Marketing", provider: "Digify Africa", year: "2022", color: "accent" },
    { name: "Web Design", provider: "Wootlab & MTN", year: "2023", color: "success" }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-card/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the data science and analytics ecosystem
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.title} className="p-8 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                      <div className="flex gap-2 flex-wrap">
                        {skill.tools.map((tool) => (
                          <Badge key={tool} variant="secondary" className="text-xs bg-muted/50 hover:bg-muted transition-colors">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="animate-fade-in-up delay-500">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
              Certifications
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card key={cert.name} className="p-6 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="space-y-2">
                  <div className={`inline-block px-2 py-1 rounded text-xs font-medium bg-gradient-to-r from-${cert.color} to-${cert.color}-glow text-white`}>
                    {cert.year}
                  </div>
                  <h4 className="font-semibold text-sm">{cert.name}</h4>
                  <p className="text-xs text-muted-foreground">{cert.provider}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;