import React, { useState, useEffect } from 'react';
import { FaCar, FaBriefcase, FaSeedling, FaArrowRight } from 'react-icons/fa';

const DifferentSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);
  
  // Define the data for the three feature columns
  const features = [
    {
      Icon: FaCar,
      title: 'On Time Service',
      description:
        'Our Online Legal Assistance Gateway is a bliss to work with because of the responsiveness and briskness with which we present solutions to our clients. We efficiently engage ourselves into fulfilling your needs so that we come out with swifter results.',
      color: '#4A6FA5' // Blue for service
    },
    {
      Icon: FaBriefcase,
      title: 'Quality Work',
      description:
        "We are a string of experts who have a never ending hunger for proficiency. On top of it our motto of 'Primacy to Client's Interests' is a beacon which keeps us on the path of achieving higher and higher standards of Legal Service.",
      color: '#5D8C5B' // Green for quality
    },
    {
      Icon: FaSeedling,
      title: 'Trust Factor',
      description:
        'We have been watering trust since years by constantly honing our skills to the point of becoming capable of providing best possible outcomes to our clients. Due to our responsiveness and novelistic ways we have been able to reinforce our trustworthiness.',
      color: '#A67C52' // Brown for trust
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 font-serif bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 animate-fadeInUp">
            Why are we different?
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-[#DCCBA4] to-[#A67C52] mb-3 animate-scaleIn"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg animate-fadeInUp animation-delay-200">
            Our commitment to excellence sets us apart in every aspect of our legal services
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:-translate-y-2 animate-staggeredFadeIn"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Top accent bar */}
              <div 
                className="h-2 w-full"
                style={{ backgroundColor: feature.color }}
              ></div>
              
              {/* Card Content */}
              <div className="p-4 md:p-5">
                {/* Icon Container */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300"
                  style={{ 
                    backgroundColor: hoveredIndex === index ? feature.color : feature.color + '20',
                    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                >
                  <feature.Icon 
                    className="text-2xl md:text-3xl transition-colors duration-300"
                    style={{ 
                      color: hoveredIndex === index ? 'white' : feature.color
                    }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 text-center mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative corner element */}
              <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden opacity-10">
                <div 
                  className="absolute bottom-0 right-0 w-12 h-12 transform rotate-45"
                  style={{ backgroundColor: feature.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom decorative element */}
        <div className="mt-8 md:mt-10 flex justify-center animate-fadeIn animation-delay-600">
          <div className="w-20 h-1 bg-gradient-to-r from-[#DCCBA4] to-[#A67C52] rounded-full"></div>
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
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .animate-staggeredFadeIn {
          animation: staggeredFadeIn 0.6s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
};

export default DifferentSection;