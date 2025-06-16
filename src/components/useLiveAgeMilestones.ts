
import { useEffect, useState } from "react";

// Hook returns the live age milestones since a birth date
export interface AgeMilestones {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useLiveAgeMilestones(birthDateISO: string): AgeMilestones {
  const [age, setAge] = useState<AgeMilestones>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const birth = new Date(birthDateISO);
      let diff = (now.getTime() - birth.getTime()) / 1000; // seconds

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

      setAge({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [birthDateISO]);

  return age;
}
