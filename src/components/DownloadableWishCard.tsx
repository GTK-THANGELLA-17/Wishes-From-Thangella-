import { useRef } from 'react';
import { Download, Heart } from 'lucide-react';
import html2canvas from 'html2canvas';

interface AgeMilestones {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface DownloadableWishCardProps {
  isVisible: boolean;
  photoUrl: string;
  age: AgeMilestones;
  message: string;
  couple: string;
}

const DownloadableWishCard = ({
  isVisible,
  photoUrl,
  age,
  message,
  couple,
}: DownloadableWishCardProps) => {
  const wishCardRef = useRef<HTMLDivElement>(null);

  const downloadWishCard = async () => {
    if (wishCardRef.current) {
      try {
        const canvas = await html2canvas(wishCardRef.current, {
          backgroundColor: '#ffffff',
          scale: 2,
          useCORS: true,
        });

        const link = document.createElement('a');
        link.download = 'birthday-wishes-habbeb-hussainaiah.png';
        link.href = canvas.toDataURL();
        link.click();
      } catch (error) {
        console.error('Error generating image:', error);
      }
    }
  };

  return (
    <div
      className={`transition-all duration-1000 delay-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div
        ref={wishCardRef}
        className="bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/15 rounded-full animate-bounce"></div>
          <div className="absolute top-6 left-6 w-3 h-3 bg-yellow-300/30 rounded-full animate-ping"></div>
          <div className="absolute bottom-8 right-8 w-5 h-5 bg-pink-300/30 rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Photo section - new */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white/20 relative">
              {photoUrl ? (
                <img
                  src={photoUrl}
                  alt="Birthday"
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-4xl text-pink-400">
                  ?
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full"></div>
            </div>
          </div>

          <div className="flex justify-center mb-2">
            <Heart className="w-10 h-10 text-pink-200 animate-pulse" />
          </div>

          {/* Heading with couple */}
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">{couple}</h3>
          <div className="text-lg md:text-xl text-pink-200 mb-4">
            Celebrating Life, Love & New Beginnings!
          </div>

          {/* Age milestones */}
          <div className="bg-white/10 rounded-xl px-4 py-3 mb-5 text-base grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 font-mono text-pink-100">
            <div><span className="font-semibold">Years</span> <span className="ml-1">{age.years}</span></div>
            <div><span className="font-semibold">Months</span> <span className="ml-1">{age.months}</span></div>
            <div><span className="font-semibold">Days</span> <span className="ml-1">{age.days}</span></div>
            <div><span className="font-semibold">Hours</span> <span className="ml-1">{age.hours}</span></div>
            <div><span className="font-semibold">Minutes</span> <span className="ml-1">{age.minutes}</span></div>
            <div><span className="font-semibold">Seconds</span> <span className="ml-1">{age.seconds}</span></div>
          </div>

          {/* Main dynamic heartfelt message */}
          <div className="space-y-3 text-lg leading-relaxed text-center">
            {message
              .split('\n')
              .map((line, idx) =>
                <div key={idx}>{line}</div>
              )}
          </div>

          {/* Festive activity-style prompts */}
          <div className="flex flex-wrap gap-3 justify-center mt-6 mb-4">
            <span className="bg-white/20 rounded-xl px-4 py-2 text-lg font-semibold shadow">Blow the Candles 💨</span>
            <span className="bg-white/20 rounded-xl px-4 py-2 text-lg font-semibold shadow">Pop the Balloons 🎈</span>
            <span className="bg-white/20 rounded-xl px-4 py-2 text-lg font-semibold shadow">Cut the Cake 🍰</span>
            <span className="bg-white/20 rounded-xl px-4 py-2 text-lg font-semibold shadow">Make a Special Wish ✨</span>
            <span className="bg-white/20 rounded-xl px-4 py-2 text-lg font-semibold shadow">Dance & Celebrate 🥳</span>
          </div>

          <div className="mt-6 text-xl font-semibold text-yellow-100">
            Radiant wishes as you await your precious little miracle!
          </div>

          <div className="flex justify-center space-x-2 mt-3 text-3xl">
            <span className="animate-bounce">🎂</span>
            <span className="animate-bounce delay-100">🎈</span>
            <span className="animate-bounce delay-200">🍼</span>
            <span className="animate-bounce delay-300">👶</span>
            <span className="animate-bounce delay-400">🌸</span>
            <span className="animate-bounce delay-500">🥳</span>
            <span className="animate-bounce delay-600">💝</span>
            <span className="animate-bounce delay-700">⭐</span>
          </div>
        </div>
      </div>
      {/* Download button */}
      <div className="text-center mt-8">
        <button
          onClick={downloadWishCard}
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-3 mx-auto hover:shadow-xl"
        >
          <Download className="w-6 h-6" />
          <span>Download Celebration Card 📱</span>
        </button>
        <p className="text-gray-200 mt-3 text-sm">
          Save this special memory for Habbeb, Hussainaiah Anna, and their precious journey! 💾✨
        </p>
      </div>
    </div>
  );
};

export default DownloadableWishCard;
