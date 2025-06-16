
import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import BirthdayWisher from '@/components/BirthdayWisher';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTransition(true);
      // Additional delay for smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }, 5500); // Adjusted timing for new loading sequence

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`transition-all duration-1000 ${showTransition ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <BirthdayWisher />
    </div>
  );
};

export default Index;
