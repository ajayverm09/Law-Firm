import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGavel } from 'react-icons/fa';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <footer className="bg-gray-900 text-white pt-10 md:pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-8">
          {/* Firm Info */}
          <div className="lg:col-span-2 animate-fadeInUp">
            <div className="flex items-center mb-3">
              <FaGavel className="text-[#B9A38F] text-xl md:text-2xl mr-2" />
              <a href='/'>
              <h2 className="text-xl md:text-2xl font-serif font-bold">NK Verma Associates</h2>
              </a>
            </div>
            <p className="text-gray-300 mb-4 text-sm md:text-base max-w-lg">
              Providing expert legal services with integrity and professionalism. Our team of experienced lawyers is committed to delivering the best possible outcomes for our clients.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#B9A38F] hover:text-white transition-all duration-300 transform hover:scale-110">
                <FaFacebookF className="text-sm md:text-base" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#B9A38F] hover:text-white transition-all duration-300 transform hover:scale-110">
                <FaTwitter className="text-sm md:text-base" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#B9A38F] hover:text-white transition-all duration-300 transform hover:scale-110">
                <FaLinkedinIn className="text-sm md:text-base" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#B9A38F] hover:text-white transition-all duration-300 transform hover:scale-110">
                <FaInstagram className="text-sm md:text-base" />
              </a>
            </div>
          </div>
          
          {/* About Us */}
          <div className="animate-fadeInUp animation-delay-200">
            <h3 className="text-lg md:text-xl font-semibold mb-3 pb-2 border-b border-gray-700">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#B9A38F] transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-[#B9A38F] rounded-full mr-2 transition-transform duration-300 group-hover:translate-x-1"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#B9A38F] transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-[#B9A38F] rounded-full mr-2 transition-transform duration-300 group-hover:translate-x-1"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-300 hover:text-[#B9A38F] transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-[#B9A38F] rounded-full mr-2 transition-transform duration-300 group-hover:translate-x-1"></span>
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-[#B9A38F] transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-[#B9A38F] rounded-full mr-2 transition-transform duration-300 group-hover:translate-x-1"></span>
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Blogs */}
          <div className="animate-fadeInUp animation-delay-300">
            <h3 className="text-lg md:text-xl font-semibold mb-3 pb-2 border-b border-gray-700">Blogs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blogs" className="text-gray-300 hover:text-[#B9A38F] transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-[#B9A38F] rounded-full mr-2 transition-transform duration-300 group-hover:translate-x-1"></span>
                  Latest Articles
                </Link>
              </li>
              <li>
                <Link to="/legal-insights" className="text-gray-300 hover:text-[#B9A38F] transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-[#B9A38F] rounded-full mr-2 transition-transform duration-300 group-hover:translate-x-1"></span>
                  Legal Insights
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-[#B9A38F] transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-[#B9A38F] rounded-full mr-2 transition-transform duration-300 group-hover:translate-x-1"></span>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-[#B9A38F] transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-[#B9A38F] rounded-full mr-2 transition-transform duration-300 group-hover:translate-x-1"></span>
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Us */}
          <div className="animate-fadeInUp animation-delay-400">
            <h3 className="text-lg md:text-xl font-semibold mb-3 pb-2 border-b border-gray-700">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-[#B9A38F] mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">123 Legal Avenue, Court District, New Delhi, 110001</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-[#B9A38F] mr-3 flex-shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-[#B9A38F] mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@nkvermaassociates.com</span>
              </li>
              <li>
                <Link to="/contact" className="inline-block px-4 py-2 bg-[#B9A38F] text-white rounded-md hover:bg-[#A0907C] transition-colors mt-1 text-sm">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 border-t border-gray-800 text-center text-gray-400 animate-fadeIn animation-delay-500">
          <p className="text-sm">&copy; {new Date().getFullYear()} NK Verma Associates. All Rights Reserved.</p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <Link to="/privacy-policy" className="hover:text-[#B9A38F] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#B9A38F] transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-[#B9A38F] transition-colors">Disclaimer</Link>
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
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;