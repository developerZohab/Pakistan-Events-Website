import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  targetDate: string;
  eventName: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, eventName }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
        setIsExpired(false);
      } else {
        setIsExpired(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isExpired) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 animate-pulse">
        <div className="flex items-center space-x-2 text-red-600">
          <Clock className="h-5 w-5" />
          <span className="font-semibold">Event has passed</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-700 rounded-lg p-4 animate-gradient-x">
      <div className="flex items-center space-x-2 mb-3">
        <Clock className="h-5 w-5 text-green-600 animate-spin" />
        <span className="font-semibold text-green-800 dark:text-green-300">Time until {eventName}</span>
      </div>
      
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="bg-white dark:bg-gray-700 rounded-lg p-2 shadow-sm transform hover:scale-110 transition-transform duration-300 animate-bounce-slow">
          <div className="text-2xl font-bold text-green-700 dark:text-green-400">{timeLeft.days}</div>
          <div className="text-xs text-green-600 dark:text-green-500">Days</div>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg p-2 shadow-sm transform hover:scale-110 transition-transform duration-300 animate-bounce-slow" style={{animationDelay: '0.1s'}}>
          <div className="text-2xl font-bold text-green-700 dark:text-green-400">{timeLeft.hours}</div>
          <div className="text-xs text-green-600 dark:text-green-500">Hours</div>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg p-2 shadow-sm transform hover:scale-110 transition-transform duration-300 animate-bounce-slow" style={{animationDelay: '0.2s'}}>
          <div className="text-2xl font-bold text-green-700 dark:text-green-400">{timeLeft.minutes}</div>
          <div className="text-xs text-green-600 dark:text-green-500">Minutes</div>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg p-2 shadow-sm transform hover:scale-110 transition-transform duration-300 animate-bounce-slow" style={{animationDelay: '0.3s'}}>
          <div className="text-2xl font-bold text-green-700 dark:text-green-400">{timeLeft.seconds}</div>
          <div className="text-xs text-green-600 dark:text-green-500">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;