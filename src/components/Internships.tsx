import { Briefcase, Calendar, Award, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Internships = () => {
  const internships = [
    {
      id: 1,
      title: 'Machine Learning Virtual Internship',
      company: 'CodSoft',
      duration: '01/04/2025 - 30/04/2025',
      type: 'Virtual Internship Program',
      description: 'Completed a comprehensive 4-week virtual internship program in Machine Learning with wonderful remarks. Showcased skills and made invaluable contributions to various tasks and projects throughout the internship.',
      skills: ['Machine Learning', 'Python', 'Data Analysis', 'Model Development'],
      certificateId: 'C.ID: 715520b',
      image: '/vaishnavi-uploads/codsoft-ml-internship-certificate.png',
    },
    {
      id: 2,
      title: 'Data Science Internship',
      company: 'CodTech IT Solutions',
      duration: 'March 8th, 2025 - April 8th, 2025',
      type: 'Certificate of Internship Experience',
      description: 'Successfully completed the internship program at CODTECH IT SOLUTION in Data Science with unwavering dedication. Gained hands-on experience in data analysis, machine learning, and business intelligence.',
      skills: ['Data Science', 'Analytics', 'Machine Learning', 'Business Intelligence'],
      certificateId: 'ID:CT04WD19',
      image: '/vaishnavi-uploads/codtech-data-science-internship-certificate.png',
    },
    {
      id: 3,
      title: 'Data Science Internship',
      company: 'Prodigy InfoTech',
      duration: '1st March, 2025 - 31st March, 2025',
      type: '1-month Internship',
      description: 'Completed a 1-month internship in Data Science with outstanding remarks at Prodigy InfoTech. Developed strong analytical skills and contributed to various data science projects.',
      skills: ['Data Science', 'Data Analysis', 'Statistical Modeling', 'Python'],
      certificateId: 'CIN: PIT/MAR25/02516',
      image: '/vaishnavi-uploads/prodigy-data-science-internship-certificate.png',
    },
  ];

  return (
    <section id="internships" className="py-16 sm:py-20 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Internships
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical experience gained through virtual internships in data science and machine learning, 
              contributing to real-world projects and developing industry-relevant skills.
            </p>
          </div>

          {/* Internships Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {internships.map((internship, index) => (
              <Card
                key={internship.id}
                className={`bg-gradient-card border-border hover:shadow-glow transition-all duration-500 group overflow-hidden ${
                  index % 2 === 0 ? 'animate-fade-in' : 'animate-fade-in'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden h-40 sm:h-48">
                    <img
                      src={internship.image}
                      alt={`${internship.title} Certificate`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                      <div className="bg-primary/90 text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                        {internship.type}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1 line-clamp-2">
                        {internship.title}
                      </CardTitle>
                      <p className="text-primary font-semibold text-sm">{internship.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm mb-4">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{internship.duration}</span>
                  </div>

                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {internship.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {internship.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-border gap-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">{internship.certificateId}</span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xs w-full sm:w-auto"
                      onClick={() => window.open(internship.image, '_blank')}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Note */}
          <div className="text-center mt-12">
            <p className="text-sm sm:text-base text-muted-foreground">
              These virtual internships provided hands-on experience with real-world projects, 
              enhancing my practical skills in data science and machine learning applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;