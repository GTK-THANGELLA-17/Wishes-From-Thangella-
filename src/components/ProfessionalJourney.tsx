
import { useEffect, useState } from 'react';

const ProfessionalJourney = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('professional-journey');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      year: "7+ Years",
      title: "Professional Excellence",
      description: "Building a remarkable career in software analysis"
    },
    {
      year: "Current",
      title: "Analyst",
      description: "Making an impact at LTI Mindtree"
    },
    {
      year: "Always",
      title: "Amazing Sister",
      description: "Being an inspiration to everyone around you"
    }
  ];

  return (
    <section id="professional-journey" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Your Amazing Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating your professional achievements and the incredible person you are
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 text-center transform transition-all duration-1000 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-2xl font-bold py-3 px-6 rounded-full inline-block mb-6">
                {achievement.year}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {achievement.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;
