import React, { useState, useEffect } from 'react';

const AboutTrustSection = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  const InfoSection = ({ title, content, image, imageAlt, reverse }) => (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className={`order-2 ${reverse ? 'md:order-2' : 'md:order-1'} animate-fadeInUp animation-delay-300`}>
        <article className="transition-all duration-300 hover:shadow-lg p-4 md:p-5 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 md:mb-5 text-center md:text-left tracking-wider border-b-2 border-gray-100 pb-2 md:pb-3">
            {title}
          </h2>
          <div className="space-y-3 md:space-y-4">
            {content.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-gray-600 text-sm md:text-base leading-relaxed transition-colors duration-200 hover:text-gray-800 animate-fadeIn"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
        </article>
      </div>
      <div className={`order-1 ${reverse ? 'md:order-1' : 'md:order-2'} animate-fadeInUp animation-delay-200`}>
        <img 
          src={image} 
          alt={imageAlt}
          className="rounded-lg shadow-xl w-full h-auto transform transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );

  const sectionData = {
    about: {
      title: "About Us",
      content: [
        "N.K. Verma & Associates is an <strong>Online Legal Service Provider</strong> constituted by a team of diversified legal experts well versed with the nuances of law, drafting and documentation skills and online mechanisms. We have been successfully enduring in the field since <strong>18 years</strong>. We provide <strong>Online Legal Services</strong> including Legal Consultation, Documentation, Legal drafting and Online Legal Notices and Agreements and we deal in all major legal areas.",
        "We have <strong>4 offices around Chandigarh, Punjab and Haryana</strong>. We provide expedient legal solutions to clients while opting for an <strong>Individual Client centered approach</strong>. Due to our pragmatic approach and zest to pace up with a dynamic world we stand out as an <strong>unparalleled Law Firm</strong>."
      ],
      image: "https://images.pexels.com/photos/7979438/pexels-photo-7979438.jpeg",
      imageAlt: "Legal professionals working in a modern office"
    },
    trust: {
      title: "Trust",
      content: [
        "<strong>Trust is 'sine qua non'</strong> of every professional relationship. \"How can people trust the harvest unless they see it sown?\". We have been watering trust since years by constantly <strong>honing our skills</strong> to the point of becoming capable of providing best possible outcomes to our clients. We have a clear cut and credible course of action to provide you with all kind of legal services.",
        "Each step is pursued with <strong>precision, transparency and due communication with the clients</strong>. Expediency and precision are our aims. We attend to the needs of our clients by understanding his sensibilities as a human being, thus taking an <strong>individualistic approach</strong>. Due to our responsiveness and novelistic ways we have been able to reinforce our <strong>trustworthiness</strong>."
      ],
      image: "https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg",
      imageAlt: "Handshake symbolizing trust and agreement"
    }
  };

  return (
    <section 
      className="py-10 md:py-14 px-4 bg-white font-serif" 
      aria-labelledby="about-trust-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h1 
          id="about-trust-heading" 
          className="sr-only"
        >
          About Us and Trust Information
        </h1>
        
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 animate-fadeInUp">About Our Firm</h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-[#DCCBA4] to-[#A67C52] mb-3 animate-scaleIn"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg animate-fadeInUp animation-delay-200">
            Learn more about our legal services and why clients trust us with their most important legal matters.
          </p>
        </div>

        <div className="flex justify-center mb-6 md:mb-8 animate-fadeIn animation-delay-300">
          <div className="inline-flex rounded-md border border-[#101828] shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setActiveTab('about')}
              className={`px-5 md:px-6 py-2.5 text-sm font-bold rounded-l-lg transition-all duration-300 ${
                activeTab === 'about'
                  ? 'bg-[#101828] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              About Us
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('trust')}
              className={`px-5 md:px-6 py-2.5 text-sm font-bold rounded-r-lg transition-all duration-300 ${
                activeTab === 'trust'
                  ? 'bg-[#101828] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Trust
            </button>
          </div>
        </div>

        {activeTab === 'about' && (
          <InfoSection 
            title={sectionData.about.title} 
            content={sectionData.about.content}
            image={sectionData.about.image}
            imageAlt={sectionData.about.imageAlt}
            reverse={false}
          />
        )}

        {activeTab === 'trust' && (
          <InfoSection 
            title={sectionData.trust.title} 
            content={sectionData.trust.content}
            image={sectionData.trust.image}
            imageAlt={sectionData.trust.imageAlt}
            reverse={true}
          />
        )}
        
        {/* Decorative element */}
        <div className="mt-8 md:mt-10 flex justify-center animate-fadeIn animation-delay-700">
          <div className="w-20 h-1 bg-gradient-to-r from-gray-300 to-gray-100 rounded-full"></div>
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
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </section>
  );
};

export default AboutTrustSection;