
import { useEffect, useState } from 'react';
import { Calendar, Clock, Timer } from 'lucide-react';

const LiveAgeCounter = () => {
  const [timeData, setTimeData] = useState({
    years: 31,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0,
    totalWeeks: 0,
    totalMonths: 0,
    totalHours: 0,
    totalMinutes: 0,
    totalSeconds: 0
  });

  useEffect(() => {
    // Assuming birthday is January 1st, 1993 (adjust as needed)
    const birthDate = new Date(1994, 0, 1); // Month is 0-indexed
    
    const updateTime = () => {
      const now = new Date();
      const diff = now.getTime() - birthDate.getTime();
      
      // Calculate total time lived
      const totalSeconds = Math.floor(diff / 1000);
      const totalMinutes = Math.floor(diff / (1000 * 60));
      const totalHours = Math.floor(diff / (1000 * 60 * 60));
      const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
      const totalWeeks = Math.floor(totalDays / 7);
      const totalMonths = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
      
      // Calculate current age breakdown
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
      const weeks = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24 * 7));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeData({
        years,
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds,
        totalDays,
        totalWeeks,
        totalMonths,
        totalHours,
        totalMinutes,
        totalSeconds
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/30">
      <div className="flex items-center justify-center mb-6">
        <Timer className="w-8 h-8 text-purple-500 mr-3" />
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Live Age Counter ⏰
        </h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl">
          <Calendar className="w-6 h-6 text-pink-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-pink-600">{timeData.years}</div>
          <div className="text-sm text-gray-600">Years</div>
        </div>
        
        <div className="text-center p-4 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl">
          <div className="text-2xl font-bold text-purple-600">{timeData.months}</div>
          <div className="text-sm text-gray-600">Months</div>
        </div>
        
        <div className="text-center p-4 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl">
          <div className="text-2xl font-bold text-indigo-600">{timeData.weeks}</div>
          <div className="text-sm text-gray-600">Weeks</div>
        </div>
        
        <div className="text-center p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl">
          <div className="text-2xl font-bold text-blue-600">{timeData.days}</div>
          <div className="text-sm text-gray-600">Days</div>
        </div>
        
        <div className="text-center p-4 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl">
          <Clock className="w-5 h-5 text-cyan-500 mx-auto mb-2" />
          <div className="text-xl font-bold text-cyan-600">{timeData.hours}</div>
          <div className="text-sm text-gray-600">Hours</div>
        </div>
        
        <div className="text-center p-4 bg-gradient-to-br from-teal-100 to-green-100 rounded-2xl">
          <div className="text-xl font-bold text-teal-600">{timeData.minutes}</div>
          <div className="text-sm text-gray-600">Minutes</div>
        </div>
        
        <div className="text-center p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl">
          <div className="text-xl font-bold text-green-600 animate-pulse">{timeData.seconds}</div>
          <div className="text-sm text-gray-600">Seconds</div>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-lg font-semibold text-gray-700 mb-4 text-center">Total Life Journey ✨</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-center">
          <div className="p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
            <div className="text-lg font-bold text-pink-600">{formatNumber(timeData.totalMonths)}</div>
            <div className="text-xs text-gray-600">Total Months</div>
          </div>
          <div className="p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl">
            <div className="text-lg font-bold text-purple-600">{formatNumber(timeData.totalWeeks)}</div>
            <div className="text-xs text-gray-600">Total Weeks</div>
          </div>
          <div className="p-3 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl">
            <div className="text-lg font-bold text-indigo-600">{formatNumber(timeData.totalDays)}</div>
            <div className="text-xs text-gray-600">Total Days</div>
          </div>
          <div className="p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
            <div className="text-lg font-bold text-blue-600">{formatNumber(timeData.totalHours)}</div>
            <div className="text-xs text-gray-600">Total Hours</div>
          </div>
          <div className="p-3 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl">
            <div className="text-lg font-bold text-cyan-600">{formatNumber(timeData.totalMinutes)}</div>
            <div className="text-xs text-gray-600">Total Minutes</div>
          </div>
          <div className="p-3 bg-gradient-to-r from-teal-50 to-green-50 rounded-xl">
            <div className="text-lg font-bold text-teal-600 animate-pulse">{formatNumber(timeData.totalSeconds)}</div>
            <div className="text-xs text-gray-600">Total Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveAgeCounter;
