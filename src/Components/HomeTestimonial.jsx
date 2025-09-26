import React, { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      review: '“I needed some legal advice regarding my Banking Matter. N.K. Verma & Associates provided me with a fruitful assistance online. The companys responsiveness is appreciable.”',
      author: 'DEEPAK SHARMA',
      rating: 5,
    },
    {
      id: 2,
      review: '“It is a delight to get your work done from N.K. Verma & Associates. They do it so smoothly and transparently till you get uttermost satisfaction.”',
      author: 'SATISH JAIN',
      rating: 5,
    },
    {
      id: 3,
      review: '“The Online Legal Service provided by the firm is credible and fully protected. It has a reliable payment gateway and the platform is fully secured.”',
      author: 'NIKHIL BANSAL',
      rating: 5,
    },
  ];

  const TestimonialCard = ({ review, author, rating, index }) => (
    <div className={`bg-white p-4 md:p-5 rounded-xl shadow-lg h-full flex flex-col justify-between transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-staggeredFadeIn ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex">
          {Array(rating).fill(0).map((_, i) => (
            <span key={i} className="text-[#D4C0A2] text-base md:text-lg">
              &#9733;
            </span>
          ))}
        </div>
        <FaQuoteLeft className="text-[#D4C0A2] text-lg md:text-xl opacity-50" />
      </div>
      
      <p className="text-gray-700 text-sm md:text-base italic leading-relaxed mb-4 md:mb-6 flex-grow">
        {review}
      </p>
      
      <p className="font-semibold text-gray-800 uppercase tracking-wider text-center mt-auto py-2 border-t border-gray-100 text-xs md:text-sm">
        {author}
      </p>
    </div>
  );

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-6 md:py-8 px-4 relative overflow-hidden">
      {/* Decorative background elements - adjusted for mobile */}
      <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 bg-[#D4C0A2] rounded-full mix-blend-multiply filter blur-xl opacity-20 -translate-x-1/2 -translate-y-1/2 animate-pulseOnce"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 bg-[#B9A38F] rounded-full mix-blend-multiply filter blur-xl opacity-20 translate-x-1/2 translate-y-1/2 animate-pulseOnce animation-delay-500"></div>
      
      {/* Section Header */}
      <div className="text-center mb-6 md:mb-8 relative z-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-800 mb-2 md:mb-3 animate-fadeInUp">
          What Our Clients Say
        </h2>
        <div className="w-10 h-1 md:w-12 md:h-1 bg-[#D4C0A2] mx-auto mb-2 md:mb-3 animate-scaleIn"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-4 animate-fadeInUp animation-delay-200">
          Discover the experiences of our clients who have benefited from our legal expertise
        </p>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="h-full">
              <TestimonialCard 
                review={testimonial.review}
                author={testimonial.author}
                rating={testimonial.rating}
                index={index}
              />
            </div>
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
        
        @keyframes pulseOnce {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
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
        
        .animate-pulseOnce {
          animation: pulseOnce 1.5s ease-out;
        }
        
        .animate-staggeredFadeIn {
          animation: staggeredFadeIn 0.6s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;