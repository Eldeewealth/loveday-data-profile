import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const portfolioCategories = [
    {
      title: "Data Science Projects",
      description: "Machine learning models, data analysis, and predictive analytics solutions",
      icon: <Folder className="w-6 h-6" />,
      projects: [
        {
          title: "Customer Churn Prediction Model",
          description: "Built a machine learning model to predict customer churn using Python, scikit-learn, and advanced feature engineering techniques.",
          tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
          date: "2024",
          github: "#",
          demo: "#"
        },
        {
          title: "Query Squad Project",
          description: "A comprehensive data analytics project that scrapes and analyzes used car data from TheAA and Cinch. Features data cleaning, transformation, and insightful visualizations including correlation heatmaps, scatter plots, and comparative analysis.",
          tags: ["R", "Web Scraping", "Data Analysis", "ggplot2", "dplyr"],
          date: "2025",
          github: "https://github.com/Eldeewealth/Query_Squad_Project",
          demo: "#"
        },
        {
          title: "NLP Sentiment Analysis",
          description: "Created a sentiment analysis tool for social media monitoring using natural language processing.",
          tags: ["Python", "NLTK", "TensorFlow", "API"],
          date: "2023",
          github: "#",
          demo: "#"
        }
      ]
    },
    {
      title: "Digital Marketing Portfolio",
      description: "Marketing campaigns, analytics dashboards, and automation solutions",
      icon: <Folder className="w-6 h-6" />,
      projects: [
        {
          title: "Marketing Analytics Dashboard",
          description: "Comprehensive dashboard tracking campaign performance across multiple channels with real-time insights.",
          tags: ["Google Analytics", "Power BI", "SQL", "Marketing Mix"],
          date: "2023",
          github: "#",
          demo: "#"
        },
        {
          title: "Email Marketing Automation",
          description: "Automated email marketing campaigns with personalization and A/B testing capabilities.",
          tags: ["Mailchimp", "Python", "Automation", "A/B Testing"],
          date: "2023",
          github: "#",
          demo: "#"
        },
        {
          title: "Social Media Campaign Analysis",
          description: "Analyzed social media campaign performance and ROI across Facebook, Instagram, and LinkedIn.",
          tags: ["Social Media", "ROI Analysis", "Campaign Optimization"],
          date: "2022",
          github: "#",
          demo: "#"
        }
      ]
    },
    {
      title: "Web Development Projects",
      description: "Full-stack applications and responsive web solutions",
      icon: <Folder className="w-6 h-6" />,
      projects: [
        {
          title: "E-commerce Analytics Platform",
          description: "A real-time E-commerce Analytics Platform for tracking sales performance and digital product metrics. Features user-friendly dashboard with performance analytics, secure authentication, and responsive UI for seamless data analysis across devices.",
          tags: ["React", "TypeScript", "Vite", "Chart.js", "Vercel"],
          date: "2025",
          github: "https://github.com/Eldeewealth/eldeetech_website",
          demo: "https://eldeetech.com.ng"
        },
        {
          title: "Personal Portfolio Website",
          description: "Responsive portfolio website showcasing projects and skills with modern design principles.",
          tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
          date: "2025",
          github: "https://github.com/Eldeewealth/loveday-data-profile",
          demo: "https://loveday-data-profile.vercel.app/"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            My Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my work across data science, digital marketing, and web development. 
            Each project represents a unique challenge solved with innovative approaches.
          </p>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {portfolioCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.projects.map((project, projectIndex) => (
                  <Card key={projectIndex} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {project.date}
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-sm leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                        <Button size="sm" className="flex-1">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in collaborating?</h2>
          <p className="text-muted-foreground mb-8">
            I'm always open to discussing new opportunities and innovative projects.
          </p>
          <Button size="lg" onClick={() => window.location.href = '/#contact'}>
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;