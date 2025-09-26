import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { FaCheckCircle, FaTrophy, FaChartLine, FaGavel } from 'react-icons/fa';

const CaseResultsSection = () => {
  const [startCounters, setStartCounters] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounters(true);
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('case-results');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const caseResults = [
    {
      id: 1,
      title: 'Corporate Merger Success',
      description: 'Facilitated a $50M merger between two tech companies with complex regulatory requirements.',
      result: 'Completed in record time',
      icon: <FaTrophy className="text-xl md:text-2xl" />
    },
    {
      id: 2,
      title: 'Property Dispute Victory',
      description: 'Won a high-stakes property dispute involving multiple ownership claims and historical documents.',
      result: 'Full ownership secured',
      icon: <FaCheckCircle className="text-xl md:text-2xl" />
    },
    {
      id: 3,
      title: 'Family Law Resolution',
      description: 'Successfully negotiated a complex international child custody case across two jurisdictions.',
      result: 'Favorable custody arrangement',
      icon: <FaGavel className="text-xl md:text-2xl" />
    },
    {
      id: 4,
      title: 'Contract Dispute Settlement',
      description: 'Resolved a multi-million dollar contract dispute through strategic negotiation and mediation.',
      result: 'Favorable settlement achieved',
      icon: <FaChartLine className="text-xl md:text-2xl" />
    },
    {
      id: 5,
      title: 'Intellectual Property Protection',
      description: 'Secured comprehensive IP protection for a startup\'s innovative technology platform.',
      result: 'Full IP rights protected',
      icon: <FaCheckCircle className="text-xl md:text-2xl" />
    },
    {
      id: 6,
      title: 'Employment Law Victory',
      description: 'Successfully defended a company against wrongful termination claims with potential class action status.',
      result: 'Case dismissed with prejudice',
      icon: <FaTrophy className="text-xl md:text-2xl" />
    }
  ];

  return (
    <section id="case-results" className="py-8 md:py-10 lg:py-12 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-10">
          <span className="text-[#B9A38F] font-semibold text-xs md:text-sm uppercase tracking-wider animate-fadeIn">OUR SUCCESS STORIES</span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-800 mt-2 animate-fadeInUp animation-delay-200">
            Notable Case Results
          </h2>
          <div className="w-10 h-1 md:w-12 md:h-1 bg-[#B9A38F] mx-auto mt-2 md:mt-3 animate-scaleIn animation-delay-300"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-sm md:text-base px-4 animate-fadeInUp animation-delay-400">
            Discover how we've helped our clients achieve favorable outcomes in complex legal matters
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
          <div className="text-center p-3 md:p-4 bg-white rounded-xl shadow-md animate-staggeredFadeIn" style={{ animationDelay: '0.2s' }}>
            <FaTrophy className="text-2xl md:text-3xl text-[#B9A38F] mx-auto mb-2 md:mb-3" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">
              {startCounters ? (
                <CountUp end={95} duration={2.5} suffix="%" />
              ) : (
                "0%"
              )}
            </h3>
            <p className="text-gray-600 text-xs md:text-sm mt-1">Success Rate</p>
          </div>
          
          <div className="text-center p-3 md:p-4 bg-white rounded-xl shadow-md animate-staggeredFadeIn" style={{ animationDelay: '0.4s' }}>
            <FaCheckCircle className="text-2xl md:text-3xl text-[#B9A38F] mx-auto mb-2 md:mb-3" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">
              {startCounters ? (
                <CountUp end={5000} duration={2.5} suffix="+" />
              ) : (
                "0+"
              )}
            </h3>
            <p className="text-gray-600 text-xs md:text-sm mt-1">Cases Resolved</p>
          </div>
          
          <div className="text-center p-3 md:p-4 bg-white rounded-xl shadow-md animate-staggeredFadeIn" style={{ animationDelay: '0.6s' }}>
            <FaChartLine className="text-2xl md:text-3xl text-[#B9A38F] mx-auto mb-2 md:mb-3" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">
              {startCounters ? (
                <CountUp end={100} duration={2.5} prefix="$" suffix="M+" />
              ) : (
                "$0M+"
              )}
            </h3>
            <p className="text-gray-600 text-xs md:text-sm mt-1">Client Savings</p>
          </div>
        </div>

        {/* Case Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {caseResults.map((caseResult, index) => (
            <div 
              key={caseResult.id}
              className="bg-white p-4 md:p-5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group animate-staggeredFadeIn"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F7F7F7] flex items-center justify-center mb-3 md:mb-4 transition-colors duration-300 group-hover:bg-[#B9A38F]">
                <div className="text-[#B9A38F] transition-colors duration-300 group-hover:text-white">
                  {caseResult.icon}
                </div>
              </div>
              
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2">{caseResult.title}</h3>
              <p className="text-gray-600 text-sm mb-3 md:mb-4 leading-relaxed">{caseResult.description}</p>
              
              <div className="flex items-center">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <FaCheckCircle className="text-green-600 text-xs" />
                </div>
                <span className="font-medium text-green-600 text-sm">{caseResult.result}</span>
              </div>
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
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default CaseResultsSection;