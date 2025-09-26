import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const HomeHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden bg-cover bg-center font-serif"
      style={{
        backgroundImage:
          "url('https://nkvermaassociates.com/wp-content/uploads/2022/04/neve-lawyers-demo-08.jpg')",
      }}
    >
      {/* Overlay to darken the background image and contain content */}
      <div className="absolute inset-0 flex items-center justify-center bg-gray-900/70">
        {/* Content Box */}
        <div 
          className={`text-center p-5 sm:p-6 md:p-8 lg:p-12 max-w-3xl bg-[#363544] bg-opacity-90 rounded-lg shadow-xl transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-[#B9A38F] text-sm sm:text-base md:text-lg font-sans font-bold tracking-widest uppercase mb-3 sm:mb-4 animate-fadeIn">
            N.K. VERMA & ASSOCIATES
          </p>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-serif font-bold leading-tight mb-4 sm:mb-6 md:mb-8 animate-fadeInUp animation-delay-200">
            Providing you with <br /> Lawgical Solution.
          </h2>
          <a href="tel:+919876543210">
            <button 
              className={`flex items-center justify-center mx-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-red-600 text-white text-sm sm:text-base md:text-lg font-semibold rounded-full shadow-lg hover:bg-white hover:text-red-700 transition duration-300 ease-in-out transform hover:scale-105 ${
                isHovered ? 'animate-pulse' : ''
              } animate-fadeInUp animation-delay-400`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <FaPhoneAlt className="mr-2 sm:mr-3 text-sm sm:text-base md:text-xl animate-bounce" /> Click to Call
            </button>
          </a>
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
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        .animate-pulse {
          animation: pulse 1.5s infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default HomeHero;