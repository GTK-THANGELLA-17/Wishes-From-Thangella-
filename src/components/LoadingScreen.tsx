
import { useEffect, useState } from 'react';
import { Gift, Cake, Timer, Baby, Sparkles, Heart, Star, Instagram } from 'lucide-react';

const COUNTDOWN_START = 3;

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [countdown, setCountdown] = useState(COUNTDOWN_START);
  const [showCountdown, setShowCountdown] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  const messages = [
    "Crafting a celebration worthy of excellence ✨",
    "Preparing heartfelt wishes for our remarkable Habbeb Akka 💖",
    "Celebrating motherhood and the beautiful journey ahead 🌟",
    "Honoring your achievements and the precious life you're nurturing 👶"
  ];

  useEffect(() => {
    if (countdown > 0) {
      const t = setTimeout(() => setCountdown(c => c - 1), 800);
      return () => clearTimeout(t);
    } else if (countdown === 0) {
      const t2 = setTimeout(() => setShowCountdown(false), 600);
      return () => clearTimeout(t2);
    }
  }, [countdown]);

  useEffect(() => {
    if (!showCountdown) {
      // Rapid progress loading after countdown
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => setIsComplete(true), 500);
            return 100;
          }
          return prev + 8; // Faster loading
        });
      }, 40);

      const messageInterval = setInterval(() => {
        setCurrentMessage(prev => (prev + 1) % messages.length);
      }, 800);

      return () => {
        clearInterval(progressInterval);
        clearInterval(messageInterval);
      };
    }
  }, [showCountdown]);

  return (
    <div className={`min-h-screen flex flex-col justify-between items-center bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 relative overflow-hidden transition-all duration-1000 ${isComplete ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      {/* Enhanced floating elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-4 top-3 animate-bounce">
          <Gift className="w-8 h-8 md:w-10 md:h-10 text-pink-400 opacity-60" />
        </div>
        <div className="absolute right-4 bottom-6 animate-bounce delay-300">
          <Cake className="w-10 h-10 md:w-12 md:h-12 text-purple-400 opacity-60" />
        </div>
        <div className="absolute right-6 top-6 animate-pulse">
          <Timer className="w-7 h-7 md:w-9 md:h-9 text-indigo-400 opacity-70" />
        </div>
        <div className="absolute left-14 bottom-11 animate-bounce delay-200">
          <Heart className="w-6 h-6 md:w-8 md:h-8 text-pink-300 opacity-60" />
        </div>
        <div className="absolute top-1/4 right-1/4 animate-spin">
          <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 opacity-50" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-pulse">
          <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-purple-300 opacity-60" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 w-full flex items-center justify-center py-6 px-2 md:px-8">
        {/* Countdown section */}
        {showCountdown ? (
          <div className="text-center z-10 w-full">
            <div className="flex justify-center space-x-4 sm:space-x-8 items-end mb-6 sm:mb-8">
              {[3,2,1].map((num, idx) => (
                <span
                  key={num}
                  className={`text-[2.5rem] xs:text-[3rem] sm:text-[4rem] md:text-[6rem] font-extrabold transition-all duration-700 ease-in-out
                    ${countdown === num ? "text-pink-700 scale-125 animate-bounce drop-shadow-lg" : "text-gray-300 opacity-50 scale-90"} 
                    ${countdown < num ? "blur-md opacity-20" : ""}`
                  }
                >
                  {num}
                </span>
              ))}
              {countdown <= 0 &&
                <span className="text-[2rem] xs:text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] font-bold ml-2 sm:ml-4 animate-pulse text-gradient bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Begin!
                </span>
              }
            </div>
            <div className="text-lg xs:text-xl sm:text-2xl mt-4 sm:mt-6 font-medium text-gray-700 px-2">
              <span className="animate-fade-in">Preparing something extraordinary for Habbeb Akka ✨</span>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-2xl mx-auto text-center space-y-8 z-10 p-2 xs:p-6 sm:p-8 relative">
            {/* Enhanced mother & baby animation section */}
            <div className="flex justify-center items-center space-x-4 sm:space-x-8 mb-4 sm:mb-8 relative">
              <div className="relative animate-fade-in group">
                <div className="absolute -inset-2 sm:-inset-4 bg-pink-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute -top-4 sm:-top-6 left-5 sm:left-8 w-4 sm:w-6 h-4 sm:h-6 bg-pink-300 rounded-full animate-bounce opacity-80"></div>
                <div className="absolute top-7 sm:top-10 -right-2 w-3 sm:w-5 h-3 sm:h-5 bg-yellow-300 rounded-full animate-pulse opacity-70"></div>
                <Baby className="w-14 h-14 sm:w-20 sm:h-20 text-pink-500 animate-bounce relative z-10" />
                <div className="absolute left-2 sm:left-3 top-1">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 animate-spin" />
                </div>
                <div className="absolute -bottom-4 sm:-bottom-6 right-2 sm:right-3 w-3 sm:w-5 h-3 sm:h-5 bg-purple-200 rounded-full animate-ping"></div>
              </div>
              
              <div className="relative animate-fade-in delay-200">
                <div className="absolute -inset-2 sm:-inset-3 bg-purple-100 rounded-full opacity-0 animate-pulse"></div>
                <Heart className="w-10 h-10 sm:w-16 sm:h-16 text-purple-500 animate-bounce relative z-10" />
              </div>
              
              <div className="relative animate-fade-in delay-400">
                <div className="absolute -inset-2 sm:-inset-3 bg-pink-100 rounded-full opacity-0 animate-pulse"></div>
                <Gift className="w-12 h-12 sm:w-18 sm:h-18 text-pink-400 animate-bounce relative z-10" />
              </div>
            </div>

            {/* Enhanced loading message */}
            <div className="relative">
              <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold text-gray-700 animate-fade-in min-h-[2.2rem] xs:min-h-[2.6rem] sm:min-h-[3rem] flex items-center justify-center">
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {messages[currentMessage]}
                </span>
              </h2>
            </div>

            {/* Enhanced progress bar */}
            <div className="relative w-full max-w-sm sm:max-w-lg mx-auto">
              <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 shadow-inner">
                <div 
                  className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 h-3 sm:h-4 rounded-full transition-all duration-200 ease-out shadow-lg relative overflow-hidden"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                </div>
              </div>
              <div className="absolute -top-5 sm:-top-8 right-0 text-xs sm:text-sm font-medium text-gray-600">
                {progress}%
              </div>
            </div>

            {/* Enhanced floating elements */}
            <div className="relative flex justify-center items-center h-10 sm:h-16">
              <div className="absolute inset-0 flex items-center justify-center space-x-2 sm:space-x-4">
                <span className="animate-bounce text-pink-400 text-lg sm:text-2xl delay-100">💕</span>
                <span className="animate-pulse text-purple-400 text-xl sm:text-3xl delay-300">⭐</span>
                <span className="animate-bounce text-yellow-400 text-lg sm:text-2xl delay-500">🌟</span>
                <span className="animate-pulse text-pink-500 text-xl sm:text-3xl delay-700">👶</span>
                <span className="animate-bounce text-purple-500 text-lg sm:text-2xl delay-900">🎀</span>
              </div>
            </div>

            {/* Professional closing message */}
            <div className="pt-3 sm:pt-6 max-w-xs sm:max-w-lg mx-auto">
              <p className="text-base sm:text-lg font-medium text-gray-600 animate-fade-in leading-relaxed">
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                  Celebrating your remarkable journey, Habbeb Akka—
                </span>
                <br />
                <span className="text-gray-700">
                  where professional excellence meets the beautiful anticipation of motherhood.
                </span>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer for designer credit - always visible and slightly elevated on mobile */}
      <footer className="relative z-50 w-full flex justify-center items-center gap-2 py-3 xs:py-4 mb-3 xs:mb-2 sm:mb-2 text-gray-500 text-xs xs:text-sm sm:text-base bg-white/40 backdrop-blur-lg rounded-t-xl shadow-sm">
        <span>
          Designed and developed by <span className="font-semibold text-gray-700">G.Thangella --GTK</span>
        </span>
        <a
          href="https://www.instagram.com/g_thangella_k"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center ml-1 text-pink-500 hover:text-pink-700 transition-colors"
          aria-label="Instagram profile"
        >
          <Instagram size={18} strokeWidth={2} />
        </a>
      </footer>
    </div>
  );
};

export default LoadingScreen;
