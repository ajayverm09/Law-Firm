import React, { useState, useEffect } from 'react';

const IntegratedExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-white py-6 md:py-8 px-4 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
        {/* Left Column: Text Content */}
        <div className={`lg:pr-6 animate-fadeInUp ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-800 leading-tight mb-4 md:mb-5">
            Integrated experience in <br className="hidden md:block" /> a number of cases
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 md:mb-5 text-sm md:text-base">
            We started off as a team of Legal proficiency seekers and
            bloomed into a confident legal service provider. Firm's humble
            beginnings and adaptability to change underpin the brilliance we
            are known for today. We are dedicated to providing easy and swift
            access to a reliable and expert legal assistance through our
            diversified team of legal professionals. N.K. Verma & Associates
            experts have specialisation in their respective domains including
            online legal consultation, legal documentation and legal drafting.
            Company's flexible approach ensured that we enduringly sail
            through this dynamic world. Our Online Legal Services are an
            answer to utmost client satisfaction in this increasingly changing
            world scenario. Through our online efficiency we strive to ensure
            expedient, hassle free and transparent legal services to our
            clients. We surely stand apart because of the trust we hold
            amongst our clients.
          </p>
          <button className="px-5 md:px-6 py-2.5 bg-[#D4C0A2] text-gray-800 font-semibold uppercase tracking-wide hover:bg-[#C0AD92] transition duration-300 w-full md:w-auto animate-fadeIn animation-delay-300">
            More About Us
          </button>
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center lg:justify-end animate-fadeIn animation-delay-200">
          <img
            src="https://nkvermaassociates.com/wp-content/uploads/2020/12/neve-lawyers-demo-18.jpg"
            alt="Person walking up a grand staircase"
            className="w-full h-56 md:h-72 lg:h-96 object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
          />
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
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default IntegratedExperienceSection;