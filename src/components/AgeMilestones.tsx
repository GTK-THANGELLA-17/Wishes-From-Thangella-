import { useEffect, useState } from 'react';
import { Trophy, Star, Heart, Sparkles } from 'lucide-react';
import LiveAgeCounter from './LiveAgeCounter';

const AgeMilestones = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -50% 0px', // Trigger when element is halfway visible
        threshold: 0.1, // Trigger when 10% visible
      }
    );

    const element = document.getElementById('age-milestones');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const milestones = [
    {
      age: "31 Years",
      title: "Prime of Excellence! 🌸",
      description: "Celebrating Habbeb in her prime—a brilliant Analyst and soon a wonderful mother with Hussainaiah Anna! 👶💖",
      icon: Star,
      color: "from-pink-400 to-rose-500"
    },
    {
      age: "7+ Years",
      title: "Data Analytics Expert! 📊",
      description: "Over 7 years mastering data insights as a Analyst at LTI Mindtree while building a beautiful life together.",
      icon: Trophy,
      color: "from-purple-400 to-indigo-500"
    },
    {
      age: "372+ Months",
      title: "Life's Beautiful Journey! 🎈",
      description: "Each month has shaped this incredible couple's path toward welcoming their precious miracle together. 👶✨",
      icon: Heart,
      color: "from-indigo-400 to-blue-500"
    },
    {
      age: "∞ Achievements",
      title: "Endless Possibilities! ✨",
      description: "From data insights to nurturing new life—Habbeb and Hussainaiah Anna's journey showcases unlimited potential! 💕",
      icon: Sparkles,
      color: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <section
      id="age-milestones"
      className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Life's Remarkable Milestones 👑
          </h2>
          <p className="text-xl text-gray-600">
            Celebrating every moment and this extraordinary couple's journey ahead! 🎉👶
          </p>
        </div>

        {/* Live Age Counter */}
        <div
          className={`mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <LiveAgeCounter />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => {
            const IconComponent = milestone.icon;
            return (
              <div
                key={index}
                className={`bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 transform transition-all duration-1000 hover:scale-105 hover:shadow-2xl relative ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${milestone.color} flex items-center justify-center mb-4 mx-auto animate-pulse`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <div className="text-center">
                  <h3
                    className={`text-2xl font-bold bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent mb-2`}
                  >
                    {milestone.age}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">{milestone.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-pink-300 rounded-full animate-ping opacity-75"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-300 rounded-full animate-ping opacity-75 delay-1000"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgeMilestones;
