import React, { useState, useEffect } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const ContactHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url('https://nkvermaassociates.com/wp-content/uploads/2022/04/neve-lawyers-demo-10.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // Parallax-like effect
  };

  return (
    <section
      className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] flex items-center justify-center font-serif overflow-hidden"
      style={backgroundImageStyle}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content Box */}
      <div 
        className={`relative z-10 bg-[#353648] p-3 sm:p-4 md:p-5 lg:p-6 text-center w-full sm:w-4/5 md:w-3/4 lg:w-1/2 xl:max-w-2xl mx-4 rounded-lg shadow-xl transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#B9A38F] mb-1 sm:mb-2 animate-pulseOnce">
          Get in touch
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 animate-fadeInUp animation-delay-200">
          Contact us
        </h2>
        <a
          href="tel:+1234567890" // Replace with your actual phone number
          className={`inline-flex items-center justify-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-red-600 hover:bg-white text-white hover:text-red-700 text-sm sm:text-base md:text-lg font-semibold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105 ${
            isHovered ? 'animate-pulse' : ''
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <FaPhoneAlt className="mr-2 sm:mr-3 text-sm sm:text-base md:text-lg animate-bounce" />
          Click to Call
        </a>
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
        
        @keyframes pulseOnce {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
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
        
        .animate-pulseOnce {
          animation: pulseOnce 1.5s ease-out;
        }
        
        .animate-pulse {
          animation: pulse 1.5s infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
};

export default ContactHero;