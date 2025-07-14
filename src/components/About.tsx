import { useEffect, useState, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'SQL', level: 85 },
    { name: 'Python', level: 75 },
    { name: 'PowerBI', level: 90 },
    { name: 'Excel', level: 95 },
    { name: 'Tableau', level: 85 },
    { name: 'Figma', level: 85 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills with delay
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => ({
                ...prev,
                [skill.name]: skill.level
              }));
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-16 sm:py-20 bg-section-bg" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* About Text */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I decode data to uncover stories, patterns, and possibilities. With a sharp eye for insights and a love for clean visuals, I turn raw numbers into real impact. From dashboards to predictions, I blend logic with creativity — because great data speaks, and I make sure it's heard.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 pt-4">
                {['Data Analysis', 'Business Intelligence', 'SQL Queries', 'Dashboard Creation', 'Statistical Analysis'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className={`space-y-6 sm:space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">My Skills</h3>
              <div className="space-y-4 sm:space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-base sm:text-lg font-medium text-foreground">{skill.name}</span>
                      <span className="text-primary font-semibold text-sm sm:text-base">
                        {animatedSkills[skill.name] || 0}%
                      </span>
                    </div>
                    <div className="w-full bg-skill-bar-bg rounded-full h-2.5 sm:h-3">
                      <div
                        className="bg-gradient-accent h-2.5 sm:h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                        style={{ width: `${animatedSkills[skill.name] || 0}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;