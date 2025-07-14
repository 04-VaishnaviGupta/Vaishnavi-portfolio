import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Computer Science',
      institution: 'Parul University',
      location: 'Vadodara, Gujarat',
      duration: 'Sept. 2022 - May 2026',
      cgpa: '8.19',
      description: 'Comprehensive computer science education with focus on programming, algorithms, and software development.',
    },
    {
      id: 2,
      degree: '12th Major: Physics, Chemistry, Mathematics, Biology',
      institution: 'M.G.M Higher Secondary School',
      location: 'B.S.City, Jharkhand',
      duration: 'June 2020 - July 2021',
      percentage: '92.8%',
      achievement: 'CBSE School Scholar',
      description: 'Excelled in science subjects with strong foundation in analytical thinking and problem-solving.',
    },
    {
      id: 3,
      degree: '10th Grade',
      institution: 'M.G.M Higher Secondary School',
      location: 'B.S.City, Jharkhand',
      duration: 'April 2019',
      percentage: '90.02%',
      achievement: 'CBSE School Scholar',
      description: 'Strong academic performance with well-rounded education in core subjects.',
    },
  ];

  return (
    <section id="education" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic journey in computer science and foundational education that built my analytical and technical skills.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6 sm:space-y-8">
            {education.map((edu, index) => (
              <Card
                key={edu.id}
                className={`bg-gradient-card border-border hover:shadow-glow transition-all duration-500 group relative ${
                  index % 2 === 0 ? 'animate-fade-in' : 'animate-fade-in'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Line */}
                {index !== education.length - 1 && (
                  <div className="absolute left-6 sm:left-8 top-20 w-0.5 h-16 bg-primary/20 hidden md:block" />
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 shrink-0">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                        {edu.degree}
                      </CardTitle>
                      <div className="flex flex-col gap-2 text-muted-foreground text-sm">
                        <div className="flex items-center gap-1">
                          <span className="font-medium text-primary">{edu.institution}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{edu.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      {edu.cgpa && (
                        <div className="text-base sm:text-lg font-bold text-primary">CGPA: {edu.cgpa}</div>
                      )}
                      {edu.percentage && (
                        <div className="text-base sm:text-lg font-bold text-primary">{edu.percentage}</div>
                      )}
                      {edu.achievement && (
                        <div className="text-xs sm:text-sm text-muted-foreground mt-1">{edu.achievement}</div>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 pl-4 sm:pl-20">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;