import { useState, useEffect } from "react";
import InteractiveActivities from "./InteractiveActivities";
import WishesList from "./WishesList";
import DownloadableWishCard from "./DownloadableWishCard";
import PhotoGallery from "./PhotoGallery";
import SocialSharing from "./SocialSharing";
import CountdownTimer from "./CountdownTimer";

// Calculates live age milestones given a birth date
function useLiveAge(birthDateISO: string) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const birthDate = new Date(birthDateISO);
  let diff = (now.getTime() - birthDate.getTime()) / 1000; // diff in seconds

  const years = Math.floor(diff / (365.25 * 24 * 3600));
  diff -= years * (365.25 * 24 * 3600);
  const months = Math.floor(diff / (30.44 * 24 * 3600));
  diff -= months * (30.44 * 24 * 3600);
  const days = Math.floor(diff / (24 * 3600));
  diff -= days * (24 * 3600);
  const hours = Math.floor(diff / 3600);
  diff -= hours * 3600;
  const minutes = Math.floor(diff / 60);
  const seconds = Math.floor(diff % 60);

  const totalDaysLived = Math.floor((now.getTime() - birthDate.getTime()) / (24 * 60 * 60 * 1000));
  const totalWeeksLived = Math.floor(totalDaysLived / 7);

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    totalDaysLived,
    totalWeeksLived
  };
}

const BIRTH_DATE = "1994-06-15T09:30:00Z"; // adjust if needed

const EnhancedWishesSection = () => {
  // set isVisible to true always
  const isVisible = true;

  // Age calculation hook
  const age = useLiveAge(BIRTH_DATE);

  // Celebration prompts
  const celebrationActions = [
    { action: "Blow the Candles", icon: "🎂", emoji: "💨" },
    { action: "Pop the Balloons", icon: "🎈", emoji: "🎊" },
    { action: "Collect the Blessing Stars", icon: "⭐", emoji: "✨" },
    { action: "Make a Special Wish", icon: "🌟", emoji: "💫" }
  ];

  const message = `
  🎉 Happy Birthday, Habbeb Akka,

  As a talented Analyst with over 7 years of professional experience across HCL, Western Union, and now LTI Mindtree, your journey reflects a rare combination of technical expertise 🧠 and personal strength 💪. Your calm presence 🌿, sharp understanding 🎯, and focused mindset 🧘‍♀️ make you not only exceptional in your field but also deeply respected by those who work with you.

  What truly sets you apart is your ability to manage challenges with grace 🌸 and stay composed under pressure — whether it's in your career or in life. These qualities continue to inspire me every single day ✨.

  As we prepare to welcome a new chapter into our lives 👶, I feel incredibly proud and fortunate to walk this path with you. Your strength, patience, and quiet determination give me confidence in everything that lies ahead 💖.

  Wishing you a birthday as wonderful as you are 🥂, and a year filled with growth 🌱, happiness 😄, and countless meaningful moments 📖.
`.replace(/\n {2,}/g, " ");


  return (
    <section
      id="wishes-section"
      className="py-20 px-4 md:px-8 bg-gradient-to-br from-indigo-100/70 to-pink-100/70"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center animate-fade-in">
        {/* Birthday photo + age milestones */}
        <div className="w-full flex flex-col md:flex-row gap-8 items-center mb-8">
          <div className="flex-shrink-0 w-40 h-52 rounded-2xl overflow-hidden border-2 border-pink-400/30 shadow-lg bg-white">
            <img
              src="/Birthday 3.jpg"
              alt="Birthday portrait"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-indigo-500 bg-clip-text text-transparent">
              Age Milestones (Live!)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 font-mono text-lg text-gray-700">
              <div><span className="font-semibold">Years:</span> {age.years}</div>
              <div><span className="font-semibold">Months:</span> {age.months}</div>
              <div><span className="font-semibold">Days:</span> {age.days}</div>
              <div><span className="font-semibold">Hours:</span> {age.hours}</div>
              <div><span className="font-semibold">Minutes:</span> {age.minutes}</div>
              <div><span className="font-semibold">Seconds:</span> {age.seconds}</div>
            </div>
          </div>
        </div>
        {/* Main heartfelt message */}
        <div className={`mb-8 w-full transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <p className="text-lg md:text-xl font-display leading-relaxed text-center text-gray-800 px-2 md:px-6 whitespace-pre-line">
            {message}
          </p>
        </div>

        {/* Celebration interactive prompts */}
        <div className={`mb-10 w-full`}>
          <h4 className="text-xl font-semibold text-center text-pink-600 mb-2">Let's Celebrate!</h4>
          <div className="flex flex-wrap items-center gap-3 justify-center">
            {celebrationActions.map(({ action, icon, emoji }) => (
              <div
                key={action}
                className="flex items-center gap-2 px-4 py-2 bg-white/90 rounded-xl shadow backdrop-blur hover:scale-105 transition-transform border-2 border-indigo-100 text-indigo-800 font-semibold text-base"
              >
                <span className="text-2xl">{icon}</span>
                <span>{action}</span>
                <span className="text-xl">{emoji}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive activities */}
        <div className="w-full mb-10">
          <InteractiveActivities />
        </div>

        {/* Photo Gallery */}
        <div className="w-full mb-10">
          <PhotoGallery />
        </div>

        {/* Countdown Timer */}
        <div className="w-full mb-10">
          <CountdownTimer />
        </div>

        {/* Social Sharing */}
        <div className="w-full mb-10">
          <SocialSharing />
        </div>
        {/* Wishes List */}
        <div className="w-full mb-10">
          <WishesList isVisible={isVisible} />
        </div>
        {/* Downloadable Wish Card */}
        <div className="w-full mb-8">
          <DownloadableWishCard
            isVisible={isVisible}
            photoUrl="/Birthday 3.jpg"
            age={age}
            // Pass the rewritten, direct wish
            message={message}
            couple="Habbeb & Hussainaiah Anna"
          />
        </div>
      </div>
    </section>
  );
};
export default EnhancedWishesSection;
