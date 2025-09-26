import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center font-serif overflow-hidden"
      style={{
        backgroundImage:
          "url('https://nkvermaassociates.com/wp-content/uploads/2022/04/neve-lawyers-demo-09.jpg')",
      }}
    >
      {/* Overlay to darken the background image and contain content */}
      <div className="absolute inset-0 flex items-center justify-center bg-gray-900/70">
        {/* Content Box */}
        <div 
          className={`text-center w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 p-4 sm:p-5 md:p-6 bg-[#2F2E42] bg-opacity-90 rounded-lg shadow-xl transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4 animate-fadeInUp animation-delay-200">
            N.K.Verma & <br />Associates
          </h2>
          <a href="tel:+919876543210">
            <button 
              className={`flex items-center justify-center mx-auto px-5 sm:px-6 py-2 sm:py-2.5 bg-red-600 text-white text-base sm:text-lg font-semibold rounded-full shadow-lg hover:bg-white hover:text-red-700 transition duration-300 ease-in-out transform hover:scale-105 ${
                isHovered ? 'animate-pulse' : ''
              } animate-fadeInUp animation-delay-400`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <FaPhoneAlt className="mr-2 text-base sm:text-lg animate-bounce" /> Click to Call
            </button>
          </a>
        </div>
      </div>

      <style jsx>{`
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

export default AboutHero;