import React, { useState, useEffect, useRef } from 'react';
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: 'N.K. Verma',
      position: 'Senior Partner',
      bio: 'With over 25 years of experience in corporate law, Mr. Verma has established himself as a leading legal expert in the region.',
      expertise: 'Corporate Law, Mergers & Acquisitions',
      image: 'https://images.pexels.com/photos/5673479/pexels-photo-5673479.jpeg',
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Partner',
      bio: 'Specializing in family law and civil litigation, Priya has successfully represented numerous high-profile cases with exceptional results.',
      expertise: 'Family Law, Civil Litigation',
      image: 'https://img.freepik.com/free-photo/positive-teacher-posing-with-open-notebok_114579-77686.jpg?t=st=1758881693~exp=1758885293~hmac=1fe775feead662f31474af99bb14cdb90380eac36974bf8e06a9dc75c89062f9&w=2000',
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    {
      id: 3,
      name: 'Rajiv Mehta',
      position: 'Senior Associate',
      bio: 'Rajiv brings extensive experience in property law and real estate transactions, having handled complex commercial and residential cases.',
      expertise: 'Property Law, Real Estate',
      image: 'https://img.freepik.com/free-photo/front-view-young-confident-bearded-man-suit-straightening-his-tie-dark-wall_140725-97219.jpg?t=st=1758882128~exp=1758885728~hmac=da0bcd15315e1e84ffc4aa97f9347e4e4c43c61e1eed89ed8566e7bbd47eb836&w=1480',
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    {
      id: 4,
      name: 'Ananya Patel',
      position: 'Associate',
      bio: 'Ananya specializes in contract law and legal drafting, with a keen eye for detail and a track record of creating robust legal agreements.',
      expertise: 'Contract Law, Legal Drafting',
      image: 'https://img.freepik.com/free-photo/young-businesswoman-holding-opened-clipboard-with-pencil_114579-47011.jpg',
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const TeamMemberCard = ({ member, index, isMobile = false }) => (
    <div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group animate-staggeredFadeIn flex-shrink-0 ${isMobile ? 'w-full' : 'w-80'}`}
      style={{ animationDelay: `${0.5 + index * 0.1}s` }}
    >
      {/* Member Image with Overlay */}
      <div className="h-40 md:h-48 lg:h-56 relative overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay (appears on hover from top) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
          {/* Top Content (Expertise and Social Links) */}
          <div className="p-3 md:p-4">
            {/* Expertise */}
            <div className="mb-3 md:mb-4">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Expertise:</span>
              <p className="text-white font-medium mt-1 text-xs md:text-sm">{member.expertise}</p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-2">
              <a 
                href={member.linkedin}
                className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#B9A38F] transition-all duration-300 transform hover:scale-110"
                aria-label={`${member.name} LinkedIn`}
              >
                <FaLinkedinIn className="text-xs md:text-sm" />
              </a>
              <a 
                href={member.twitter}
                className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#B9A38F] transition-all duration-300 transform hover:scale-110"
                aria-label={`${member.name} Twitter`}
              >
                <FaTwitter className="text-xs md:text-sm" />
              </a>
              <a 
                href={member.instagram}
                className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#B9A38F] transition-all duration-300 transform hover:scale-110"
                aria-label={`${member.name} Instagram`}
              >
                <FaInstagram className="text-xs md:text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Member Info (Name and Position) */}
      <div className="p-3 md:p-4 pb-1">
        <h3 className="text-base md:text-lg font-bold text-gray-800">{member.name}</h3>
        <p className="text-[#B9A38F] font-medium text-xs md:text-sm">{member.position}</p>
      </div>
      
      {/* Member Bio (always visible) */}
      <div className="p-3 md:p-4 pt-1">
        <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );

  return (
    <section className="py-8 md:py-10 lg:py-12 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-10">
          <span className="text-[#B9A38F] font-semibold text-xs md:text-sm uppercase tracking-wider animate-fadeIn">MEET OUR TEAM</span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-800 mt-2 animate-fadeInUp animation-delay-200">
            Our Legal Experts
          </h2>
          <div className="w-10 h-1 md:w-12 md:h-1 bg-[#B9A38F] mx-auto mt-2 md:mt-3 animate-scaleIn animation-delay-300"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-sm md:text-base px-4 animate-fadeInUp animation-delay-400">
            Our team of experienced attorneys is committed to providing exceptional legal services with integrity and professionalism
          </p>
        </div>

        {/* Mobile Slider - Only visible on small screens */}
        <div className="sm:hidden relative mb-8">
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory py-2"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            style={{ 
              cursor: isDragging ? 'grabbing' : 'grab',
              scrollBehavior: 'smooth'
            }}
          >
            {teamMembers.map((member, index) => (
              <div key={member.id} className="flex-shrink-0 w-full snap-center px-1">
                <TeamMemberCard member={member} index={index} isMobile={true} />
              </div>
            ))}
          </div>
          
          {/* Swipe hint */}
          <div className="flex justify-center mt-4">
            <span className="text-gray-400 text-sm">← Swipe to view more →</span>
          </div>
        </div>

        {/* Desktop Grid - Hidden on small screens */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
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
        
        /* Hide scrollbar for mobile */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;