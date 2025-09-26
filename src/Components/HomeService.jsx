import React, { useState, useEffect } from 'react';

const serviceCards = [
  {
    id: 1,
    title: 'Book your online consultation now to get instantaneous advice and assistance regarding your case.',
    imageSrc: 'https://nkvermaassociates.com/wp-content/uploads/2022/04/online-con.jpg',
    buttonText: 'Online Legal Consultation',
    buttonHref: '/consultation'
  },
  {
    id: 2,
    title: 'We prepare Legal Notices swiftly, in accordance with applicable Laws, Legal Procedures and legal formats.',
    imageSrc: 'https://nkvermaassociates.com/wp-content/uploads/2022/04/legal-notice.jpg',
    buttonText: 'Legal Notice',
    buttonHref: '/legal-notice'
  },
  {
    id: 3,
    title: 'We construct agreements in a way turning the terms into your advantage thereby Minimizing your loss and Maximizing your gains.',
    imageSrc: 'https://nkvermaassociates.com/wp-content/uploads/2022/04/agreements.jpg',
    buttonText: 'Agreements',
    buttonHref: '/agreements'
  },
  {
    id: 4,
    title: 'Drafting of all necessary legal documents, petitions, plaints, and written statements for any court matter.',
    imageSrc: 'https://nkvermaassociates.com/wp-content/uploads/2022/04/property.jpg',
    buttonText: 'Document Drafting',
    buttonHref: '/drafting'
  },
  {
    id: 5,
    title: 'Expert assistance and filing of petitions for Divorce, Child Custody, and other family law matters.',
    imageSrc: 'https://nkvermaassociates.com/wp-content/uploads/2022/04/review-doc.jpg',
    buttonText: 'Family Law Services',
    buttonHref: '/family-law'
  },
  {
    id: 6,
    title: 'Advising businesses on compliance, contracts, taxation, and corporate restructuring for growth.',
    imageSrc: 'https://nkvermaassociates.com/wp-content/uploads/2022/04/areas-1024x449.jpg',
    buttonText: 'Corporate Services',
    buttonHref: '/corporate'
  },
];

const OnlineServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('online-services');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Component to render a single card
  const ServiceCard = ({ title, imageSrc, buttonText, buttonHref, index }) => (
    <div 
      className={`flex flex-col items-center bg-white p-4 md:p-5 text-center h-full rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-gray-100 group animate-staggeredFadeIn ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ animationDelay: isVisible ? `${0.3 + index * 0.1}s` : '0ms' }}
    >
      {/* Image container with smooth zoom effect and overlay */}
      <div className="h-32 w-full mb-4 flex items-center justify-center overflow-hidden rounded-lg bg-gray-50 relative">
        <img 
          src={imageSrc} 
          alt={`${buttonText} illustration`} 
          className="h-full w-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-125"
          loading="lazy"
        />
        {/* Overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Content section with background color */}
      <div className='bg-[#F7F7F7] w-full p-4 md:p-5 rounded-lg flex-grow flex flex-col'>
        {/* Description with improved typography */}
        <p className="text-gray-700 flex-grow text-sm md:text-base leading-relaxed">{title}</p>
        {/* Button with enhanced styling */}
        <a 
          href={buttonHref}
          className="mt-auto px-4 md:px-5 py-2 md:py-2.5 bg-white border border-[#B9A38F] text-[#B9A38F] font-medium rounded-md hover:bg-[#A0907C] hover:text-white transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#B9A38F] focus:ring-opacity-50 text-sm md:text-base"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );

  return (
    <section id="online-services" className="py-8 md:py-10 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Section Header with enhanced styling */}
      <div className="text-center mb-6 md:mb-8 px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-3 animate-fadeInUp">
          Online Legal Services
        </h2>
        <div className="w-12 h-1 bg-[#B9A38F] mx-auto mb-3 animate-scaleIn"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base animate-fadeInUp animation-delay-200">
          Access our comprehensive legal services from anywhere. Our team is ready to assist you with professional legal advice and documentation.
        </p>
      </div>

      {/* Cards Grid with improved spacing */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {serviceCards.map((card, index) => (
            <ServiceCard 
              key={card.id}
              title={card.title}
              imageSrc={card.imageSrc}
              buttonText={card.buttonText}
              buttonHref={card.buttonHref}
              index={index}
            />
          ))}
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
      `}</style>
    </section>
  );
};

export default OnlineServicesSection;