
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import ProfessionalJourney from '@/components/ProfessionalJourney';
import AgeMilestones from '@/components/AgeMilestones';
import BirthdayCake from '@/components/BirthdayCake';
import MemoryGallery from '@/components/MemoryGallery';
import EnhancedWishesSection from '@/components/EnhancedWishesSection';
import Confetti from '@/components/Confetti';
import { Instagram } from 'lucide-react';
import BackgroundMusicPlayer from './BackgroundMusicPlayer';

const BirthdayWisher = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Trigger confetti after a short delay
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 relative overflow-hidden flex flex-col">
      {/* BGM Player - top right */}
      <BackgroundMusicPlayer />

      {showConfetti && <Confetti />}

      <div className="relative z-10 flex-1">
        <Hero />
        <AgeMilestones />
        <ProfessionalJourney />
        <BirthdayCake />
        <MemoryGallery />
        <EnhancedWishesSection />
      </div>
      {/* Footer - raised for visibility */}
      <footer className="w-full flex justify-center items-center gap-2 py-3 md:py-4 mb-6 md:mb-8 text-gray-500 text-xs md:text-base bg-white/40 backdrop-blur-lg rounded-t-xl shadow-sm z-30">
        <span>Designed and developed by <span className="font-semibold text-gray-700">G.Thangella --GTK</span></span>
        <a
          href="https://www.instagram.com/g_thangella_k"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center ml-1 text-pink-500 hover:text-pink-700 transition-colors"
          aria-label="Instagram profile"
        >
          <Instagram size={20} strokeWidth={2} />
        </a>
      </footer>
    </div>
  );
};

export default BirthdayWisher;

