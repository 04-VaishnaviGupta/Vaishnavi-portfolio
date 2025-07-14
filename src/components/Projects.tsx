import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import powerbiImage from '@/assets/powerbi-dashboard.jpg';
import sqlImage from '@/assets/sql-analysis.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'HealthMirror - AI Medical Analysis',
      description: 'Advanced AI-powered medical analysis system using facial recognition to detect stress, fatigue & skin conditions with medical-grade accuracy in seconds.',
      image: '/health-mirror.png', // Using actual project image
      tags: ['Machine Learning', 'AI', 'Computer Vision', 'Healthcare'],
      githubUrl: 'https://github.com/04-VaishnaviGupta/healthmirror',
      liveUrl: 'https://health-mirror.vercel.app/',
    },
    {
      id: 2,
      title: 'Hotel Booking Cancellations Dashboard',
      description: 'Comprehensive analysis of hotel booking trends and cancellation behavior using Power BI and Excel. The dashboard identifies key patterns by guest type, hotel type, room preference, and monthly trends across 2015-2017.',
      image: 'https://raw.githubusercontent.com/04-VaishnaviGupta/Hotel-Booking-Cancellations-Dashboard/main/Dashboard.png',
      tags: ['Power BI', 'Excel', 'Data Analysis', 'Dashboard'],
      githubUrl: 'https://github.com/04-VaishnaviGupta/Hotel-Booking-Cancellations-Dashboard',
      liveUrl: 'https://github.com/04-VaishnaviGupta/Hotel-Booking-Cancellations-Dashboard/blob/main/Dashboard.png',
    },
    {
      id: 3,
      title: 'E-Commerce Sales Dashboard (Power BI)',
      description: 'An interactive Power BI dashboard project simulating a real-world e-commerce business scenario. Analyzes and visualizes key business metrics such as product performance, customer value, and revenue trends using mock data.',
      image: 'https://raw.githubusercontent.com/04-VaishnaviGupta/E-commerce_powerbi_dashboard/main/Dashboard.png',
      tags: ['Power BI', 'Data Visualization', 'E-Commerce', 'Dashboard'],
      githubUrl: 'https://github.com/04-VaishnaviGupta/E-commerce_powerbi_dashboard',
      liveUrl: 'https://github.com/04-VaishnaviGupta/E-commerce_powerbi_dashboard/blob/main/Dashboard.png',
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent data analysis projects showcasing my skills in 
              data visualization, SQL analysis, and business intelligence.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`bg-gradient-card border-border hover:shadow-glow transition-all duration-500 group overflow-hidden ${
                  index % 2 === 0 ? 'animate-fade-in' : 'animate-fade-in'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>

                <CardContent className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-4 sm:p-6 pt-0 flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xs sm:text-sm"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 text-xs sm:text-sm"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      View Project
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;