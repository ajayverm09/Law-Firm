import React, { useState, useEffect } from 'react';
import { FaSearch, FaFileContract, FaGavel, FaHandshake } from 'react-icons/fa';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);
  
  const processSteps = [
    {
      icon: FaSearch,
      title: "Case Evaluation",
      description: "We begin with a thorough analysis of your legal situation, identifying key issues and potential strategies.",
      details: "Our experts conduct comprehensive research to understand all aspects of your case, ensuring no detail is overlooked."
    },
    {
      icon: FaFileContract,
      title: "Strategy Development",
      description: "Based on our evaluation, we craft a tailored legal strategy designed to achieve your objectives.",
      details: "We develop a clear roadmap with timelines, potential outcomes, and contingency plans to address various scenarios."
    },
    {
      icon: FaGavel,
      title: "Implementation",
      description: "Our team executes the strategy with precision, handling all legal proceedings and documentation.",
      details: "We manage all aspects of your case, from filing paperwork to representing you in negotiations or court proceedings."
    },
    {
      icon: FaHandshake,
      title: "Resolution & Follow-up",
      description: "We work diligently to reach the best possible outcome and provide ongoing support as needed.",
      details: "After resolution, we ensure all terms are implemented and provide guidance on any future legal considerations."
    }
  ];

  // Get the active icon component properly
  const ActiveIcon = processSteps[activeStep].icon;

  return (
    <section className="py-12 md:py-16 px-4 bg-white font-serif relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-transparent opacity-50 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 animate-fadeInUp">Our Process</h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-[#DCCBA4] to-[#A67C52] mb-4 animate-scaleIn"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg animate-fadeInUp animation-delay-200">
            Our streamlined approach ensures efficient handling of your legal matters with transparency and expertise at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Process Visualization */}
          <div className="relative pl-12 md:pl-16">
            <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-1 bg-gray-200 z-0 animate-lineGrow"></div>
            
            <div className="space-y-5 md:space-y-6">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`relative flex items-start cursor-pointer transition-all duration-300 ${activeStep === index ? 'scale-105' : 'opacity-70 hover:opacity-100'} animate-staggeredFadeIn`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="hidden lg:flex w-14 h-14 md:w-16 md:h-16 rounded-full items-center justify-center z-10 shadow-lg border-4 border-white -ml-8 transition-all duration-300"
                    style={{ 
                      backgroundColor: activeStep === index ? '#363544' : '#DCCBA4',
                      boxShadow: activeStep === index ? '0 10px 25px rgba(0,0,0,0.2)' : '0 5px 15px rgba(0,0,0,0.1)'
                    }}>
                    <step.icon className="text-2xl md:text-3xl text-white flex-shrink-0" />
                  </div>
                  
                  <div className="lg:ml-8 bg-white p-4 md:p-5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg w-full"
                    style={{ 
                      borderLeft: activeStep === index ? '4px solid #363544' : '4px solid transparent'
                    }}>
                    <div className="flex items-center lg:hidden mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mr-3 shadow-md border-2 border-white flex-shrink-0 transition-all duration-300"
                        style={{ 
                          backgroundColor: activeStep === index ? '#363544' : '#DCCBA4',
                          boxShadow: activeStep === index ? '0 5px 15px rgba(0,0,0,0.2)' : '0 3px 10px rgba(0,0,0,0.1)'
                        }}>
                        <step.icon className="text-lg md:text-xl text-white flex-shrink-0" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800">{step.title}</h3>
                    </div>
                    
                    <h3 className="hidden lg:block text-lg md:text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Active Step Details */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 md:p-6 shadow-xl border border-gray-100 animate-fadeInUp animation-delay-500">
            <div className="flex items-center mb-4 md:mb-5">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mr-3 md:mr-4 shadow-lg border-4 border-white flex-shrink-0 transition-all duration-300"
                style={{ 
                  backgroundColor: '#363544',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                }}>
                <ActiveIcon className="text-3xl md:text-4xl text-white flex-shrink-0" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">{processSteps[activeStep].title}</h3>
            </div>
            
            <p className="text-gray-600 mb-5 md:mb-6 leading-relaxed text-sm md:text-base">
              {processSteps[activeStep].details}
            </p>
            
            <div className="flex items-center justify-between mb-5 md:mb-6">
              <div className="text-xs md:text-sm font-medium text-gray-500">
                Step {activeStep + 1} of {processSteps.length}
              </div>
              
              <div className="flex space-x-2">
                <button 
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${activeStep === 0 ? 'bg-gray-200 text-gray-400' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md hover:shadow-lg'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <button 
                  onClick={() => setActiveStep(prev => Math.min(processSteps.length - 1, prev + 1))}
                  disabled={activeStep === processSteps.length - 1}
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${activeStep === processSteps.length - 1 ? 'bg-gray-200 text-gray-400' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md hover:shadow-lg'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6 md:mb-8">
              <div 
                className="h-2 rounded-full transition-all duration-500 ease-in-out shadow-inner animate-progressBar" 
                style={{ 
                  width: `${((activeStep + 1) / processSteps.length) * 100}%`,
                  backgroundColor: '#363544',
                  backgroundImage: 'linear-gradient(to right, #4A6FA5, #363544)'
                }}
              ></div>
            </div>
            
            <div className="mt-6 md:mt-8 flex justify-center">
              <a 
                href="/book-consultation" 
                className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-[#363544] to-[#4A6FA5] text-white font-medium rounded-lg hover:from-[#2a2933] hover:to-[#3a5a85] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
              >
                Start Your Case
              </a>
            </div>
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
        
        @keyframes lineGrow {
          from {
            height: 0;
          }
          to {
            height: 100%;
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
        
        @keyframes progressBar {
          from {
            width: 0;
          }
          to {
            width: var(--progress-width);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .animate-lineGrow {
          animation: lineGrow 1s ease-out forwards;
        }
        
        .animate-staggeredFadeIn {
          animation: staggeredFadeIn 0.6s ease-out forwards;
        }
        
        .animate-progressBar {
          animation: progressBar 0.8s ease-out forwards;
          --progress-width: ${((activeStep + 1) / processSteps.length) * 100}%;
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

export default ProcessSection;