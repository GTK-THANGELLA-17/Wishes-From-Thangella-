import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const BGM_URL = "/Bg music.mp3";

const BackgroundMusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);

  // On mount, try autoplay muted (allowed by browsers)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;
    audio.muted = true;
    audio.play()
      .then(() => {
        setIsPlaying(true);
        setIsMuted(true);
      })
      .catch(() => {
        setIsPlaying(false);
      });
  }, []);

  // On user interaction, unmute and play with sound
  const handlePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = false;
    audio.play()
      .then(() => {
        setIsPlaying(true);
        setIsMuted(false);
        setUserInteracted(true);
      })
      .catch(() => {
        setIsPlaying(false);
      });
  };

  const handleStop = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div className="fixed top-5 right-6 z-50 flex items-center gap-2 bg-white/70 rounded-full shadow px-3 py-1 border border-pink-200">
      <audio ref={audioRef} src={BGM_URL} preload="auto" loop />
      {isPlaying ? (
        <button
          onClick={handleStop}
          className={cn(
            "transition-colors flex items-center gap-1 text-pink-700 font-semibold",
            "hover:text-pink-900 focus:outline-none"
          )}
          aria-label="Stop music"
        >
          <ArrowLeft size={20} />
          <span className="hidden sm:inline">Stop Music</span>
        </button>
      ) : (
        <button
          onClick={handlePlay}
          className={cn(
            "transition-colors flex items-center gap-1 text-purple-600 font-semibold",
            "hover:text-indigo-800 focus:outline-none"
          )}
          aria-label="Play music"
        >
          <ArrowRight size={20} />
          <span className="hidden sm:inline">
            {userInteracted ? "Play Music" : "Click to enable music"}
          </span>
        </button>
      )}
      <span className="ml-1 text-xs text-gray-500 font-mono">
        {isMuted ? "Muted" : "BGM"}
      </span>
    </div>
  );
};

export default BackgroundMusicPlayer;
