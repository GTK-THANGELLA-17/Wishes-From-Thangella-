
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const photos = [
    {
      url: "/Birthday 2.jpg",
      caption: "Beautiful Birthday Moment",
      description: "Celebrating another wonderful year of life"
    },
    {
      url: "/Birthday 1.jpg",
      caption: "Family Joy",
      description: "Together with loved ones on this special day"
    },
    {
      url: "/Birthday 3.jpg",
      caption: "Celebration Time",
      description: "Making memories that will last forever"
    },
    {
      url: "/Birthday 1.jpg",
      caption: "Career Achievements",
      description: "Your amazing journey as a Data Analyst"
    },
    {
      url: "/Birthday 3.jpg",
      caption: "Future Adventures",
      description: "Excited for the beautiful journey ahead"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, photos.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const toggleSlideshow = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/30 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-gray-800">Memory Gallery</h3>
        <button
          onClick={toggleSlideshow}
          className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          <span>{isPlaying ? 'Pause' : 'Play'}</span>
        </button>
      </div>

      <div className="relative">
        <div className="relative h-80 rounded-2xl overflow-hidden">
          <img
            src={photos[currentIndex].url}
            alt={photos[currentIndex].caption}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h4 className="text-xl font-bold mb-1">{photos[currentIndex].caption}</h4>
            <p className="text-sm opacity-90">{photos[currentIndex].description}</p>
          </div>
        </div>

        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
