import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  // Define the statistics data
  const stats = [
    { value: 4, label: 'Offices in 2 States' },
    { value: 1073, label: 'Online Services Provided' },
    { value: 18, label: 'Years of Experience' },
  ];

  // Define the colors used in the design
  const darkNavy = '#363544'; // Base color for the CTA box and background
  const lightBrown = '#D4C0A2'; // Accent color for text and button
  const lightBeige = '#B9A38F'; // Background color for the stats row

  return (
    <section className="w-full overflow-hidden">
      
      {/* 1. Statistics Row */}
      <div className="py-8 md:py-10 lg:py-12 text-center" style={{ backgroundColor: lightBeige }}>
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center animate-staggeredFadeIn"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              {/* Animated Number using react-countup */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-extrabold text-white mb-2">
                <CountUp 
                  end={stat.value} 
                  duration={2.5} 
                  enableScrollSpy={true} 
                  scrollSpyOnce={true}    // Only counts once
                />+
              </h3>
              {/* Label */}
              <p className="text-xs md:text-sm font-medium uppercase tracking-wider text-gray-700">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Call to Action (CTA) Section */}
      <div className="py-10 md:py-12 lg:py-16" style={{ backgroundColor: darkNavy }}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          
          {/* CTA Box (White card element) */}
          <div className="bg-white p-5 md:p-8 lg:p-12 max-w-4xl mx-auto text-center shadow-2xl animate-fadeInUp animation-delay-600">
            
            <p className="text-xs md:text-sm font-medium uppercase tracking-widest animate-fadeIn" style={{ color: lightBrown }}>
              Online Legal Services
            </p>
            
            <h2 className="text-xl md:text-2xl lg:text-4xl font-serif font-bold text-gray-800 leading-tight my-3 md:my-4 animate-fadeInUp animation-delay-200">
              Have a challenging case? Get a <br className='hidden md:block'/> consultation by our experts
            </h2>
            
            {/* Underline Accent */}
            <div className="w-8 h-0.5 md:w-10 md:h-0.5 mx-auto mb-4 md:mb-6 animate-scaleIn animation-delay-400" style={{ backgroundColor: lightBrown }}></div>
            
            {/* Button */}
            <a 
              href="/book-consultation"
              className="inline-block px-5 md:px-7 lg:px-9 py-2.5 md:py-3 font-semibold uppercase tracking-wide transition duration-300 hover:bg-[#C0AD92] transform hover:scale-105 animate-fadeInUp animation-delay-600"
              style={{ backgroundColor: lightBrown, color: '#4A4A4A' }} // Using a dark text color for contrast
            >
              Book Your Consultation!
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        
        @keyframes staggeredFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .animate-staggeredFadeIn {
          animation: staggeredFadeIn 0.6s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
};

export default StatsSection;