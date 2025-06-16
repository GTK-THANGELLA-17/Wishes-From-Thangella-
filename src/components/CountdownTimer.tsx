
import { useState, useEffect } from 'react';
import { Clock, Gift } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let nextBirthday = new Date(currentYear, 5, 15, 9, 30, 0); // June 15th, 9:30 AM

      // If birthday has passed this year, use next year
      if (now > nextBirthday) {
        nextBirthday = new Date(currentYear + 1, 5, 15, 9, 30, 0);
      }

      const difference = nextBirthday.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-6 shadow-lg mb-8">
      <div className="flex items-center space-x-2 mb-4">
        <Gift className="w-6 h-6" />
        <h3 className="text-xl font-bold">Next Birthday Countdown</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="bg-white/20 rounded-xl p-3 mb-2">
            <div className="text-2xl md:text-3xl font-bold">{timeLeft.days}</div>
          </div>
          <div className="text-sm opacity-90">Days</div>
        </div>
        <div className="text-center">
          <div className="bg-white/20 rounded-xl p-3 mb-2">
            <div className="text-2xl md:text-3xl font-bold">{timeLeft.hours}</div>
          </div>
          <div className="text-sm opacity-90">Hours</div>
        </div>
        <div className="text-center">
          <div className="bg-white/20 rounded-xl p-3 mb-2">
            <div className="text-2xl md:text-3xl font-bold">{timeLeft.minutes}</div>
          </div>
          <div className="text-sm opacity-90">Minutes</div>
        </div>
        <div className="text-center">
          <div className="bg-white/20 rounded-xl p-3 mb-2">
            <div className="text-2xl md:text-3xl font-bold">{timeLeft.seconds}</div>
          </div>
          <div className="text-sm opacity-90">Seconds</div>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-sm opacity-90">
          <Clock className="w-4 h-4 inline mr-1" />
          Until the next amazing celebration! 🎉
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
