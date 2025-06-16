import { useState } from 'react';
import Confetti from './Confetti';
import { Zap } from "lucide-react";

interface Activity {
  icon: string;
  text: string;
  action: () => void;
  count: number;
  emoji: string;
  soundEffect: string;
}

const InteractiveActivities = () => {
  const [candlesBlown, setCandlesBlown] = useState(0);
  const [starsCollected, setStarsCollected] = useState(0);
  const [balloonsPopped, setBalloonsPopped] = useState(0);
  const [wishesTouchstone, setWishesTouchstone] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const playSound = (soundType: string) => {
    // Create sound effect using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Different sound frequencies for different actions
    const soundMap: { [key: string]: number } = {
      candle: 440,  // A note
      star: 523,    // C note
      balloon: 659, // E note
      wish: 783     // G note
    };

    oscillator.frequency.setValueAtTime(soundMap[soundType] || 440, audioContext.currentTime);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  };

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const blowCandles = () => {
    setCandlesBlown(prev => prev + 1);
    playSound('candle');
    if (candlesBlown > 0 && candlesBlown % 3 === 0) triggerConfetti();
  };

  const collectStar = () => {
    setStarsCollected(prev => prev + 1);
    playSound('star');
    if (starsCollected > 0 && starsCollected % 5 === 0) triggerConfetti();
  };

  const popBalloon = () => {
    setBalloonsPopped(prev => prev + 1);
    playSound('balloon');
    if (balloonsPopped > 0 && balloonsPopped % 4 === 0) triggerConfetti();
  };

  const makeWish = () => {
    setWishesTouchstone(prev => prev + 1);
    playSound('wish');
    triggerConfetti();
  };

  const activities: Activity[] = [
    { icon: "🎂", text: "Blow Birthday Candles", action: blowCandles, count: candlesBlown, emoji: "💨", soundEffect: "candle" },
    { icon: "⭐", text: "Collect Blessing Stars", action: collectStar, count: starsCollected, emoji: "✨", soundEffect: "star" },
    { icon: "🎈", text: "Pop Celebration Balloons", action: popBalloon, count: balloonsPopped, emoji: "🎊", soundEffect: "balloon" },
    { icon: "🌟", text: "Make Special Wishes", action: makeWish, count: wishesTouchstone, emoji: "💫", soundEffect: "wish" }
  ];

  return (
    <>
      {showConfetti && <Confetti />}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {activities.map((activity, index) => (
          <div
            key={index}
            onClick={activity.action}
            className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/30 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 text-center group focus:ring-4 focus:ring-pink-300"
            tabIndex={0}
            aria-label={`${activity.text}, interactive`}
          >
            {/* Animation ring */}
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
              <span className="animate-ping inline-flex h-5 w-5 rounded-full bg-pink-300 opacity-60"></span>
            </span>
            {/* Pointer hand for call to action */}
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 z-20">
              <span className="text-pink-500 text-2xl animate-bounce select-none" role="img" aria-label="Tap here">☝️</span>
            </span>
            <div className="text-3xl mb-2 group-hover:animate-bounce group-active:animate-pulse transition-all">{activity.icon}</div>
            <p className="text-sm font-semibold text-gray-700 mb-1">{activity.text}</p>
            <p className="text-xs text-gray-500">
              {activity.count} {activity.emoji}
            </p>
            {activity.count > 0 && (
              <div className="mt-2 text-xs text-green-600 font-medium">
                Great job! 🎉
              </div>
            )}
            {/* Tap/click me indicator on first render */}
            {activity.count === 0 && (
              <div className="mt-3 flex flex-col items-center">
                <span className="inline-flex items-center text-xs bg-pink-100/70 text-pink-600 rounded-full px-3 py-1 animate-pulse font-medium shadow-sm">
                  Tap or Click Me!
                  <Zap className="w-3 h-3 ml-1 text-pink-400 inline" />
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default InteractiveActivities;
