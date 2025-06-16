
import { Gift } from 'lucide-react';
import { wishes } from './wishesData';

interface WishesListProps {
  isVisible: boolean;
}

const WishesList = ({ isVisible }: WishesListProps) => {
  return (
    <div className="space-y-6 mb-12">
      {wishes.map((wish, index) => (
        <div
          key={index}
          className={`bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/30 transform transition-all duration-1000 hover:scale-102 hover:shadow-2xl ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Gift className="w-6 h-6 text-pink-500 mt-1 animate-pulse" />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {wish}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishesList;
