import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaLinkedinIn, FaFacebookF, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('Homepage');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
    
    // Handle scroll effect for navbar
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  const navItems = [
    { name: 'Homepage', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Blogs', href: '/blogs' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`flex items-center justify-between p-3 md:p-4 bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 shadow-lg' : 'py-3 md:py-4'
      } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Logo Section */}
      <div className="flex items-center animate-fadeIn">
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#78615E] tracking-tight">
          N.K. Verma & Ass.
        </h1>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 animate-fadeIn animation-delay-200">
        {navItems.map((item, index) => (
          <Link
            key={item.name}
            to={item.href}
            className={`relative px-1 py-2 font-medium transition-colors duration-300 group animate-staggeredFadeIn`}
            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            onClick={() => handleLinkClick(item.name)}
          >
            <span className={`${
              isActive(item.href)
                ? 'text-[#363544]' // Active link color
                : 'text-gray-600 hover:text-[#363544]' // Inactive link color with hover
            }`}>
              {item.name}
            </span>

            {/* Underline Effect */}
            <span
              className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-[#DCCBA4] transform transition-transform duration-300 origin-left ${
                isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}
            ></span>
          </Link>
        ))}
      </nav>

      {/* Social Icons - Desktop */}
      <div className="hidden md:flex space-x-2 lg:space-x-3 animate-fadeIn animation-delay-400">
        <a
          href="#"
          className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-[#0077B5] text-white rounded-full shadow-md hover:bg-[#005885] hover:shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn className="w-3 h-3 lg:w-4 lg:h-4" />
        </a>
        <a
          href="#"
          className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-[#3B5998] text-white rounded-full shadow-md hover:bg-[#2d4373] hover:shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Facebook"
        >
          <FaFacebookF className="w-3 h-3 lg:w-4 lg:h-4" />
        </a>
        <a
          href="#"
          className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-md hover:bg-[#128C7E] hover:shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="w-3 h-3 lg:w-4 lg:h-4" />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-600 hover:text-[#363544] focus:outline-none transition-colors duration-300 animate-fadeIn animation-delay-300"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? (
          <FaTimes className="w-5 h-5" />
        ) : (
          <FaBars className="w-5 h-5" />
        )}
      </button>

      {/* Mobile Menu */}
      <div 
        className={`absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50 transition-all duration-300 transform origin-top ${
          mobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
      >
        <div className="px-3 pt-3 pb-4 space-y-2">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-3 py-2 rounded-md font-medium transition-all duration-300 animate-staggeredFadeIn`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              onClick={() => handleLinkClick(item.name)}
            >
              <span className={`block px-2 py-1 rounded-md ${
                isActive(item.href)
                  ? 'bg-[#DCCBA4] text-[#363544]' // Active link style
                  : 'text-gray-600 hover:bg-gray-100 hover:text-[#363544]' // Inactive link style
              }`}>
                {item.name}
              </span>
            </Link>
          ))}
          
          {/* Mobile Social Icons */}
          <div className="flex space-x-2 pt-3 pb-2 animate-fadeIn animation-delay-500">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-[#0077B5] text-white rounded-full shadow-md hover:bg-[#005885] hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-3 h-3" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-[#3B5998] text-white rounded-full shadow-md hover:bg-[#2d4373] hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-3 h-3" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-md hover:bg-[#128C7E] hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes staggeredFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-staggeredFadeIn {
          animation: staggeredFadeIn 0.4s ease-out forwards;
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
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </header>
  );
};

export default Navbar;