import React, { useState, useEffect } from 'react';
import { FaBalanceScale, FaFileContract, FaLandmark, FaHome, FaHandshake, FaBriefcase } from 'react-icons/fa';

const PracticeSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);
  
  const practiceAreas = [
    {
      icon: FaBalanceScale,
      title: "Corporate Law",
      description: "Comprehensive legal services for businesses including formation, compliance, mergers, acquisitions, and corporate governance.",
      color: "#4A6FA5" // Blue
    },
    {
      icon: FaFileContract,
      title: "Contract Law",
      description: "Drafting, reviewing, and negotiating contracts to protect your interests and ensure enforceable agreements.",
      color: "#5D8C5B" // Green
    },
    {
      icon: FaLandmark,
      title: "Real Estate Law",
      description: "Legal assistance for property transactions, disputes, zoning issues, and real estate development projects.",
      color: "#A67C52" // Brown
    },
    {
      icon: FaHome,
      title: "Family Law",
      description: "Compassionate legal guidance for divorce, child custody, adoption, and other family-related legal matters.",
      color: "#9C528B" // Purple
    },
    {
      icon: FaHandshake,
      title: "Dispute Resolution",
      description: "Effective mediation and arbitration services to resolve conflicts efficiently and amicably.",
      color: "#C25D45" // Orange
    },
    {
      icon: FaBriefcase,
      title: "Employment Law",
      description: "Legal representation for both employers and employees in workplace disputes, contracts, and compliance matters.",
      color: "#363544" // Dark Navy
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-white font-serif">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 animate-fadeInUp">Our Practice Areas</h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-[#DCCBA4] to-[#A67C52] mb-4 animate-scaleIn"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg animate-fadeInUp animation-delay-200">
            We offer comprehensive legal services across multiple practice areas, providing expert guidance tailored to your specific needs.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {practiceAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-4 md:p-5 transition-all duration-300 hover:shadow-lg border border-gray-100 animate-staggeredFadeIn"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Icon Container */}
              <div 
                className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 mx-auto transition-all duration-300"
                style={{ 
                  backgroundColor: hoveredIndex === index ? area.color : area.color + '20',
                  transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'
                }}
              >
                <area.icon 
                  className="text-2xl md:text-3xl transition-colors duration-300"
                  style={{ color: hoveredIndex === index ? 'white' : area.color }}
                />
              </div>
              
              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-800 text-center mb-2">{area.title}</h3>
              
              {/* Description */}
              <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed mb-4">
                {area.description}
              </p>
              
              {/* Learn More Link */}
              <div className="text-center">
                <a 
                  href={`/practice-areas/${area.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-sm font-medium transition-all duration-300"
                  style={{ color: area.color }}
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4 transition-transform duration-300" 
                    style={{ transform: hoveredIndex === index ? 'translateX(5px)' : 'translateX(0)' }}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-10 md:mt-12 text-center bg-gradient-to-r from-[#363544] to-[#4A6FA5] rounded-2xl p-6 md:p-8 text-white animate-fadeInUp animation-delay-800">
          <h3 className="text-xl md:text-2xl font-bold mb-3">Need Legal Assistance?</h3>
          <p className="max-w-2xl mx-auto mb-6 text-gray-200 text-sm md:text-base">
            Our experienced attorneys are ready to provide expert legal guidance for your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <a 
              href="/contact" 
              className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-white text-[#363544] font-medium rounded-lg border-2 border-white hover:bg-transparent hover:text-white transition-colors duration-300 text-sm md:text-base"
            >
              Contact Us
            </a>
            <a 
              href="/book-consultation" 
              className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-transparent text-white font-medium rounded-lg border-2 border-white hover:bg-white hover:text-[#363544] transition-colors duration-300 text-sm md:text-base"
            >
              Book Consultation
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
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </section>
  );
};

export default PracticeSection;