
import { useState, useEffect } from 'react';
import { Cake, Sparkles } from 'lucide-react';

const BirthdayCake = () => {
  const [candlesBlown, setCandlesBlown] = useState(false);
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

    const element = document.getElementById('birthday-cake');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const blowCandles = () => {
    setCandlesBlown(true);
    setTimeout(() => setCandlesBlown(false), 3000);
  };

  return (
    <section id="birthday-cake" className="py-20 px-6 bg-gradient-to-br from-pink-100/60 to-purple-100/60 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-3 h-3 bg-pink-300 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-20 right-20 w-4 h-4 bg-purple-300 rounded-full animate-ping opacity-60 delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-indigo-300 rounded-full animate-ping opacity-60 delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Make a Wish, Habeeb! 🌟
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Blow the candles and let your dreams take flight! ✨
          </p>

          <div className="relative inline-block">
            {/* Enhanced Cake */}
            <div className="bg-gradient-to-b from-pink-200 to-pink-300 w-80 h-40 rounded-t-full mx-auto relative shadow-2xl transform hover:scale-105 transition-transform duration-300">
              {/* Cake layers with enhanced styling */}
              <div className="absolute bottom-0 w-full h-8 bg-gradient-to-b from-pink-300 to-pink-400 rounded-b-2xl shadow-inner"></div>
              <div className="absolute bottom-8 w-full h-8 bg-gradient-to-b from-purple-200 to-purple-300 shadow-inner"></div>
              
              {/* Enhanced Candles */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-6">
                {[1, 2, 3, 4, 5].map((candle) => (
                  <div key={candle} className="relative">
                    {/* Candle with gradient */}
                    <div className="w-3 h-10 bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-t-sm shadow-md"></div>
                    {/* Enhanced Flame */}
                    <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full ${candlesBlown ? 'opacity-0' : 'animate-pulse'} transition-opacity duration-500 shadow-lg`}>
                      <div className="w-1 h-2 bg-blue-200 rounded-full mx-auto opacity-60"></div>
                    </div>
                    {/* Enhanced Smoke when blown */}
                    {candlesBlown && (
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gray-300 rounded-full opacity-50 animate-fade-in">
                        <div className="w-1 h-4 bg-gray-200 rounded-full mx-auto animate-pulse"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Enhanced Decorations */}
              <div className="absolute top-12 left-8 w-4 h-4 bg-pink-500 rounded-full animate-pulse"></div>
              <div className="absolute top-16 right-8 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-500"></div>
              <div className="absolute top-20 left-12 w-3 h-3 bg-indigo-500 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-14 right-12 w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
              
              {/* Birthday message on cake */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-pink-700 font-bold text-sm">
                31 🎉
              </div>
            </div>

            {/* Enhanced Interactive button */}
            <button
              onClick={blowCandles}
              className="mt-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-10 py-5 rounded-full font-semibold text-lg hover:scale-110 transition-all duration-300 shadow-2xl flex items-center space-x-3 mx-auto group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Cake className="w-7 h-7 relative z-10 animate-bounce" />
              <span className="relative z-10">{candlesBlown ? 'Wish Made! 🌟' : 'Blow the Candles 💨'}</span>
              <Sparkles className="w-6 h-6 relative z-10 animate-pulse" />
            </button>

            {candlesBlown && (
              <div className="mt-6 animate-fade-in">
                <p className="text-xl text-gray-700 mb-2">
                  ✨ May all your dreams come true, Habeeb AKKA ✨
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="text-2xl animate-bounce">🎊</span>
                  <span className="text-2xl animate-bounce delay-100">🌟</span>
                  <span className="text-2xl animate-bounce delay-200">💫</span>
                  <span className="text-2xl animate-bounce delay-300">⭐</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthdayCake;
