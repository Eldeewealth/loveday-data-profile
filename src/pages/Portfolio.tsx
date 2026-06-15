
import Navbar from "../components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const portfolioCategories = [
    {
      title: "Featured Project",
      description: "End-to-end data analytics case study showcasing business insights and dashboard design",
      icon: <Folder className="w-6 h-6" />,
      projects: [
        {
          title: "Databel Customer Churn Insights & Retention Dashboard",
          description:
            "End-to-end churn analysis using Excel and Google Sheets. Identified customer retention drivers and delivered actionable business recommendations through an interactive dashboard.",
          tags: ["Excel", "Data Analysis", "Dashboard"],
          date: "2026",
          github: "https://github.com/Eldeewealth/customer-churn-retention-analysis-dashboard",
          demo: null
        },
        {
          title: "Fairness-Aware XAI for Algorithmic Trading",
          description:
            "Built a machine learning pipeline for S&P 500 trading with fairness constraints, SHAP interpretability, calibration diagnostics, and backtesting for economic evaluation.",
          tags: ["Python", "ML", "SHAP", "Fairlearn", "Finance"],
          date: "2026",
          github: "https://github.com/Eldeewealth/Fairness-Aware-XAI-for-Responsible-Algorithmic-Trading"
        }
      ]
    },
    {
      title: "Data Analytics & Machine Learning",
      description: "Projects demonstrating analytics, ML, NLP, and applied research",
      icon: <Folder className="w-6 h-6" />,
      projects: [
        {
          title: "Used Car Data Analysis (Query Squad)",
          description:
            "Collected and analysed used car data using web scraping in R. Built visualisations and identified pricing trends and correlations in the automotive market.",
          tags: ["R", "Web Scraping", "EDA", "ggplot2"],
          date: "2025",
          github: "https://github.com/Eldeewealth/Query_Squad_Project"
        },
        {
          title: "Car Sentiment Analysis",
          description:
            "Developed a web scraping pipeline to extract car reviews and performed sentiment analysis using NLP techniques to derive customer insights.",
          tags: ["Python", "NLP", "Scrapy", "Data Analysis"],
          date: "2025",
          github: "https://github.com/Eldeewealth/Project-Car-Sentiment-Data"
        },
        
        {
          title: "Gambling & Mental Health Analysis (MSc)",
          description:
            "Explored the relationship between gambling behaviour and mental health outcomes in the UK using statistical analysis and data visualisation.",
          tags: ["Statistics", "Research", "Data Analysis"],
          date: "2025",
          github: "https://github.com/Eldeewealth/Gambling_MentalHealth_MSc"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* ✅ Navbar (renamed to avoid TS conflict) */}
      <Navbar />

      {/* ✅ Portfolio Header */}
      <section id="portfolio" className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            My Portfolio
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of end-to-end data analytics projects, demonstrating my ability to extract insights, build models, and support data-driven decision-making.
          </p>

        </div>
      </section>

      {/* ✅ Projects */}
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
                  <h2 className="text-3xl font-bold text-foreground">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Project Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {category.projects.map((project, index) => (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">

                    <CardHeader>
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {project.date}
                      </div>

                      <CardDescription className="text-sm leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-2">

                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>

                        {project.demo && (
                          <Button
                            size="sm"
                            className="flex-1"
                            onClick={() => window.open(project.demo, "_blank")}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                        )}

                      </div>

                    </CardContent>

                  </Card>
                ))}

              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default Portfolio;
