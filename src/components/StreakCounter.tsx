
import { useState, useEffect } from 'react';
import { Calendar, Flame } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface StreakCounterProps {
  currentStreak?: number;
  longestStreak?: number;
}

const StreakCounter = ({ currentStreak = 5, longestStreak = 14 }: StreakCounterProps) => {
  const [animateStreak, setAnimateStreak] = useState(false);

  useEffect(() => {
    // Create animation effect when streak updates
    setAnimateStreak(true);
    const timer = setTimeout(() => setAnimateStreak(false), 700);
    return () => clearTimeout(timer);
  }, [currentStreak]);

  return (
    <Card className="bg-white border border-soft-pink border-opacity-30 rounded-xl overflow-hidden book-shadow">
      <div className="p-4">
        <h3 className="text-xl mb-4 font-serif flex items-center gap-2">
          <Flame className="h-5 w-5 text-accent-pink" />
          Reading Streak
        </h3>
        
        <div className="flex justify-between items-center">
          <div className="text-center">
            <p className="text-sm text-text-brown/70 mb-1">Current</p>
            <div 
              className={`text-3xl font-bold ${
                animateStreak ? "scale-110 text-accent-pink transition-all" : ""
              }`}
            >
              {currentStreak}
              <span className="text-sm font-normal ml-1">days</span>
            </div>
          </div>
          
          <div className="h-12 w-px bg-soft-yellow"></div>
          
          <div className="text-center">
            <p className="text-sm text-text-brown/70 mb-1">Longest</p>
            <div className="text-3xl font-bold">
              {longestStreak}
              <span className="text-sm font-normal ml-1">days</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex gap-1 justify-center">
          {Array.from({ length: 7 }).map((_, i) => {
            // Simplified logic to show recent days as active or not
            const isActive = i < currentStreak % 7;
            return (
              <div 
                key={i} 
                className={`w-4 h-4 rounded-full ${
                  isActive ? 'bg-soft-pink' : 'bg-soft-yellow'
                }`}
              ></div>
            );
          })}
        </div>
      </div>
      
      <div className="bg-soft-yellow px-4 py-2 flex items-center justify-between">
        <span className="text-sm flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          Last read: Today
        </span>
        <span className="text-sm font-medium text-accent-pink">+ 12 pages</span>
      </div>
    </Card>
  );
};

export default StreakCounter;
