import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
const profileImage = '/vaishnavi-uploads/vaishnavi-profile-photo.png';

const Hero = () => {
  const techWords = [
    'Data Analyst',
    'Machine Learning Engineer',
    'AI Enthusiast',
    'Business Intelligence',
    'Data Visualization',
    'SQL Expert',
    'Python Developer',
    'Dashboard Designer',
    'Insight Generator',
    'Predictive Modeler',
    'Data Storyteller',
    'Automation Builder',
    'Power BI Proficent',
    'Problem Solver',
  ];
  const [currentWord, setCurrentWord] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % techWords.length);
        setFade(true);
      }, 300); // fade out duration
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = async () => {
    const response = await fetch('/VaishnaviGuptaResume.pdf');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'VaishnaviGuptaResume.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  };

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 lg:pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh] gap-4 sm:gap-6 lg:gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left mb-4 sm:mb-6 lg:mb-0 max-w-2xl lg:max-w-xl md:max-w-lg md:mx-auto lg:mx-0">
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-3 sm:mb-4 lg:text-left leading-tight">
                <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-2">I'm</span>
                <span className="block text-primary">Vaishnavi Gupta</span>
                <span className="block">
                  <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium align-baseline mr-2">as</span>
                  <span
                    className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-yellow-400 align-baseline transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
                    style={{ minHeight: '1.2em', display: 'inline-block' }}
                  >
                    {techWords[currentWord]}
                  </span>
                </span>
              </h1>
              <div className="text-lg sm:text-xl md:text-xl lg:text-xl text-primary font-medium mb-4 sm:mb-5 lg:mb-6 lg:text-left leading-relaxed">
                I love solving problems using data and building clean, insightful dashboards.
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-glow relative z-50 text-sm sm:text-base"
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Download Resume
              </Button>
              <Button
                onClick={handleContactClick}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 text-sm sm:text-base"
              >
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end md:max-w-md lg:max-w-lg xl:max-w-none">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[28rem] xl:h-[28rem] rounded-full overflow-hidden shadow-glow relative z-10">
                <img
                  src={profileImage}
                  alt="Vaishnavi Gupta"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-primary/30 rounded-full blur-lg" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;