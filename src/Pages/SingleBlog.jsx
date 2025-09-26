import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaCalendar, FaUser, FaClock, FaTag, FaFolder, FaArrowLeft, FaShareAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { blogsData, getRelatedBlogs } from '../Components/BlogsData';

const BlogSingle = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    const blogId = parseInt(id);
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      const foundBlog = blogsData.find(b => b.id === blogId);
      setBlog(foundBlog);
      
      if (foundBlog) {
        setRelatedBlogs(getRelatedBlogs(blogId));
        // Trigger animation after content loads
        setTimeout(() => setIsVisible(true), 100);
      }
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  const handleReadMore = (blogId) => {
    setIsVisible(false);
    setTimeout(() => {
      navigate(`/blog/${blogId}`);
      window.scrollTo(0, 0);
    }, 300);
  };
  
  if (isLoading) {
    return (
      <div className="font-serif bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="animate-pulse max-w-4xl w-full px-4">
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="flex space-x-4 mb-6">
            <div className="h-4 bg-gray-300 rounded w-24"></div>
            <div className="h-4 bg-gray-300 rounded w-24"></div>
            <div className="h-4 bg-gray-300 rounded w-24"></div>
          </div>
          <div className="h-64 bg-gray-300 rounded-lg mb-6"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!blog) {
    return (
      <div className="font-serif bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center p-4 animate-fadeIn">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link 
            to="/blogs" 
            className="inline-block px-6 py-3 bg-[#363544] text-white font-medium rounded-lg hover:bg-[#2a2933] transition-all duration-300 transform hover:scale-105"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }
  
  const shareUrl = window.location.href;
  const shareTitle = blog.title;
  
  return (
    <div className={`font-serif bg-gray-50 min-h-screen transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#363544] to-[#4A6FA5] text-white py-12 md:py-16 animate-slideDown">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Link 
            to="/blogs" 
            className="inline-flex items-center text-white hover:text-gray-200 transition-all duration-300 mb-4 md:mb-6 group"
          >
            <FaArrowLeft className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to All Articles
          </Link>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 animate-fadeInUp">{blog.title}</h1>
          <div className="flex flex-wrap items-center text-gray-200 gap-3 md:gap-4 text-sm md:text-base animate-fadeInUp animation-delay-200">
            <span className="flex items-center">
              <FaUser className="mr-2" />
              {blog.author}
            </span>
            <span className="flex items-center">
              <FaCalendar className="mr-2" />
              {blog.date}
            </span>
            <span className="flex items-center">
              <FaClock className="mr-2" />
              {blog.readTime}
            </span>
            <span className="flex items-center">
              <FaFolder className="mr-2" />
              {blog.category}
            </span>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl animate-fadeInUp animation-delay-300">
          {/* Featured Image */}
          <div className="h-64 md:h-80 lg:h-96 relative overflow-hidden">
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 animate-imageZoom"
            />
          </div>
          
          {/* Article Content */}
          <div className="p-4 md:p-6 lg:p-8">
            <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none animate-fadeIn animation-delay-500" dangerouslySetInnerHTML={{ __html: blog.content }} />
            
            {/* Tags */}
            <div className="mt-6 pt-4 border-t border-gray-200 animate-fadeInUp animation-delay-700">
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <Link 
                    key={tag}
                    to={`/blogs?tag=${tag}`}
                    className="inline-flex items-center px-2 md:px-3 py-1 bg-gray-100 text-gray-700 text-xs md:text-sm rounded-full hover:bg-[#B9A38F]/20 hover:text-[#363544] transition-all duration-300 transform hover:scale-105 animate-tagPop"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <FaTag className="mr-1" />
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Share */}
            <div className="mt-6 pt-4 border-t border-gray-200 animate-fadeInUp animation-delay-800">
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3">Share this article</h3>
              <div className="flex space-x-2 md:space-x-3">
                {[
                  { icon: <FaFacebookF className="text-sm md:text-base" />, color: "bg-blue-600 hover:bg-blue-700", label: "Facebook" },
                  { icon: <FaTwitter className="text-sm md:text-base" />, color: "bg-blue-400 hover:bg-blue-500", label: "Twitter" },
                  { icon: <FaLinkedinIn className="text-sm md:text-base" />, color: "bg-blue-700 hover:bg-blue-800", label: "LinkedIn" },
                  { icon: <FaWhatsapp className="text-sm md:text-base" />, color: "bg-green-500 hover:bg-green-600", label: "WhatsApp" }
                ].map((social, index) => (
                  <a
                    key={social.label}
                    href={
                      social.label === "Facebook" ? `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}` :
                      social.label === "Twitter" ? `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}` :
                      social.label === "LinkedIn" ? `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}` :
                      `https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center ${social.color} text-white rounded-full transition-all duration-300 transform hover:scale-110 animate-bounceIn`}
                    style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                    aria-label={`Share on ${social.label}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Author Bio */}
            <div className="mt-6 pt-4 border-t border-gray-200 animate-fadeInUp animation-delay-1000">
              <div className="flex items-start">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-300 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 animate-pulseOnce">
                  <span className="text-lg md:text-xl font-bold text-gray-600">
                    {blog.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="animate-fadeInRight">
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1">{blog.author}</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {blog.author === "N.K. Verma" && "Founder & Senior Partner at N.K. Verma & Associates with over 25 years of experience in corporate law."}
                    {blog.author === "Priya Sharma" && "Senior Partner specializing in corporate law and M&A transactions with 15 years of experience."}
                    {blog.author === "Rajiv Mehta" && "Partner with expertise in intellectual property and technology law."}
                    {blog.author === "Ananya Singh" && "Associate Partner focusing on family law and dispute resolution."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back to All Articles Button above Related Articles */}
        <div className="mt-8 text-center animate-fadeInUp animation-delay-1100">
          <Link 
            to="/blogs" 
            className="inline-flex items-center px-6 py-3 bg-[#363544] text-white font-medium rounded-lg hover:bg-[#2a2933] transition-all duration-300 transform hover:scale-105"
          >
            <FaArrowLeft className="mr-2" />
            Back to All Articles
          </Link>
        </div>
        
        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <div className="mt-10 md:mt-12 animate-fadeInUp animation-delay-1200">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {relatedBlogs.map((relatedBlog, index) => (
                <div 
                  key={relatedBlog.id} 
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-lg cursor-pointer transform hover:-translate-y-1 animate-staggeredFadeIn"
                  style={{ animationDelay: `${1.3 + index * 0.15}s` }}
                  onClick={() => handleReadMore(relatedBlog.id)}
                >
                  <div className="h-40 md:h-48 relative overflow-hidden">
                    <img 
                      src={relatedBlog.image} 
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center text-xs md:text-sm text-gray-500 mb-2">
                      <span className="flex items-center mr-2 md:mr-3">
                        <FaFolder className="mr-1 text-[#B9A38F]" />
                        {relatedBlog.category}
                      </span>
                      <span className="flex items-center">
                        <FaCalendar className="mr-1 text-[#B9A38F]" />
                        {relatedBlog.date}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-gray-800 mb-2 text-sm md:text-base">
                      {relatedBlog.title}
                    </h3>
                    
                    <p className="text-gray-600 text-xs md:text-sm mb-3 line-clamp-2">{relatedBlog.excerpt}</p>
                    
                    <span className="text-[#B9A38F] hover:text-[#363544] font-medium text-xs md:text-sm transition-colors duration-300 inline-flex items-center group">
                      Read More
                      <svg className="w-3 h-3 md:w-4 md:h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* CTA */}
        <div className="mt-10 md:mt-12 bg-gradient-to-r from-[#363544] to-[#4A6FA5] rounded-xl shadow-lg p-6 md:p-8 text-center text-white transition-all duration-500 hover:shadow-xl animate-fadeInUp animation-delay-1500">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Need Legal Assistance?</h2>
          <p className="text-gray-200 mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base">
            Our experienced legal team is ready to help you with your legal matters.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <a
              href="/contact"
              className="inline-block px-5 md:px-6 py-2.5 md:py-3 bg-white text-[#363544] font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-sm md:text-base animate-pulseOnce"
            >
              Contact Us
            </a>
            <a
              href="/book-consultation"
              className="inline-block px-5 md:px-6 py-2.5 md:py-3 bg-transparent text-white font-medium rounded-lg border-2 border-white hover:bg-white hover:text-[#363544] transition-all duration-300 transform hover:scale-105 text-sm md:text-base animate-pulseOnce animation-delay-200"
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
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes imageZoom {
          from {
            opacity: 0;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes tagPop {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
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
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.6s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }
        
        .animate-imageZoom {
          animation: imageZoom 1s ease-out forwards;
        }
        
        .animate-tagPop {
          animation: tagPop 0.5s ease-out forwards;
        }
        
        .animate-bounceIn {
          animation: bounceIn 0.6s ease-out forwards;
        }
        
        .animate-pulseOnce {
          animation: pulseOnce 0.5s ease-out;
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
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-1100 {
          animation-delay: 1.1s;
        }
        
        .animation-delay-1200 {
          animation-delay: 1.2s;
        }
        
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  );
};

export default BlogSingle;