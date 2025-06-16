import { useEffect, useState } from 'react';
import { Calendar, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const calculateAge = () => {
    const birthDate = new Date(1994, 5, 16); // June 16, 1994
    const today = new Date();
    return today.getFullYear() - birthDate.getFullYear();
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-6 h-6 bg-pink-300 rounded-full animate-bounce opacity-70"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-purple-400 rounded-full animate-bounce delay-1000 opacity-70"></div>
        <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-indigo-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-pink-400 rounded-full animate-ping opacity-50"></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-purple-300 rounded-full animate-bounce delay-2000 opacity-70"></div>
      </div>

      <div className={`text-center max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} relative z-10`}>
        {/* Birthday Badge */}
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-purple-100 px-6 py-3 rounded-full mb-8 animate-scale-in shadow-lg border border-pink-200">
          <Calendar className="w-5 h-5 text-pink-600 animate-pulse" />
          <span className="text-pink-700 font-medium">June 16th Special 🎉</span>
          <Sparkles className="w-5 h-5 text-purple-600 animate-pulse" />
        </div>

        {/* Wishes From Your Bro THANGELLA - animated */}
        <div
          className="mb-4 flex justify-center"
        >
          <span className="block px-6 py-2 rounded-full bg-gradient-to-r from-indigo-100 via-pink-100 to-purple-100 shadow font-bold text-lg md:text-2xl text-indigo-700 border border-pink-200 animate-fade-in animate-bounce drop-shadow-md tracking-wider hover:scale-105 transition-all"
            style={{ animationDuration: "1s" }}
          >
            Wishes From Your Bro <span className="text-pink-500">THANGELLA</span>
          </span>
        </div>

        {/* Removed: Happy 31st Birthday, Habbeb! Akka message */}

        {/* Main Heading with enhanced animations */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 animate-fade-in hover:scale-105 transition-transform duration-300">
            Happy {calculateAge()}
            <span className="text-2xl align-top text-pink-600">st</span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 animate-fade-in delay-300 hover:scale-105 transition-transform duration-300">
            Birthday, Habbeb! AKKA 🎂
          </h2>
        </div>

        {/* Personal Message, updated as per request */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 animate-fade-in delay-700 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4 font-medium">
            To amazing <span className="font-bold text-pink-600">Habbeb,  AKKA</span>
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
  This year marks a beautiful chapter in your life — a time of both personal and professional celebration! 🎉 With over 7 years of rich experience across esteemed organizations like HCL, Western Union, and now LTI Mindtree, your journey as an Analyst has been nothing short of inspiring. Your dedication, growth, and perseverance shine through every milestone you've achieved. ✨<br/><br/>

  Now, as you step into your 31st year, life blesses you with another incredible journey — the joy of parenthood. 👶 You and <span className="font-semibold text-purple-600">Hussainaiah Anna</span> are about to welcome a precious new life into the world, and we couldn’t be happier for you both. <span className="font-semibold text-purple-600">Congratulations on this heartwarming transition into becoming parents! 🎈</span><br/><br/>

  Wishing you and your growing family a year filled with love ❤️, laughter 😂, and unforgettable memories 📸. May this new beginning bring even more purpose, joy, and beautiful surprises your way. 🌟
</p>


          <div className="flex flex-wrap justify-center gap-2 mt-6 text-[2rem] animate-bounce">
            <span>🎈</span>
            <span>🎉</span>
            <span>🍼</span>
            <span>🥳</span>
            <span>🤰</span>
            <span>👶</span>
            <span>✨</span>
          {/* Removed 💖 love symbol */}
          </div>
        </div>

        {/* Extra floating animated elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-pink-300 rounded-full animate-bounce delay-1000 opacity-80"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-300 rounded-full animate-bounce delay-1500 opacity-80"></div>
          <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-indigo-300 rounded-full animate-bounce delay-2000 opacity-80"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
