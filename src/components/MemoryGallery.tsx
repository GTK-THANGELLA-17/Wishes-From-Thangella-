
import { useEffect, useState } from 'react';

const MemoryGallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('memory-gallery');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const memories = [
    {
      image: "/Birthday 4.jpg",
      title: "Professional Growth",
      description: "Your journey in tech has been amazing"
    },
    {
      image: "/Sister Bond.jpg",
      title: "Sisterly Bond",
      description: "All the wonderful memories "
    },
    {
      image: "/WEBICON.jpg",
      title: "Future Adventures",
      description: "Excited for what's ahead in your 31st year"
    }
  ];

  return (
    <section id="memory-gallery" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Cherished Memories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating the beautiful moments and looking forward to many more
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-1000 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {memory.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {memory.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryGallery;
