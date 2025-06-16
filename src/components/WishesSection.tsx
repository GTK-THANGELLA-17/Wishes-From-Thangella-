
import { useEffect, useState } from 'react';
import { Gift } from 'lucide-react';

const WishesSection = () => {
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

    const element = document.getElementById('wishes-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const wishes = [
    "May your 31st year be filled with new opportunities and exciting challenges in your career",
    "Wishing you continued success at LTI Mindtree and beyond",
    "May you find joy in every code you write and every problem you solve",
    "Here's to another year of being the amazing sister and professional you are",
    "May your analytical mind continue to find creative solutions to every challenge",
    "Wishing you happiness, health, and endless possibilities in your 31st year"
  ];

  return (
    <section id="wishes-section" className="py-20 px-6 bg-gradient-to-r from-indigo-100/50 to-pink-100/50">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Birthday Wishes for You
          </h2>
          <p className="text-xl text-gray-600">
            From your loving sibling, with all my heart ❤️
          </p>
        </div>

        <div className="space-y-6">
          {wishes.map((wish, index) => (
            <div
              key={index}
              className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 transform transition-all duration-1000 hover:scale-102 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Gift className="w-6 h-6 text-pink-500 mt-1" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {wish}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Happy 31st Birthday, Dear Sister! 🎉
            </h3>
            <p className="text-lg leading-relaxed">
              Thank you for being such an inspiration with your dedication to your career 
              and for always being there as an amazing sister. May this new year bring you 
              everything your heart desires and more success in your journey as a  Analyst!
            </p>
            <p className="mt-4 text-xl font-semibold">
              With all my love and best wishes! 💕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
