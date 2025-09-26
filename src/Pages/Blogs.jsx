import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaCalendar, FaUser, FaClock, FaTag, FaFolder } from 'react-icons/fa';
import { blogsData, getCategories, getLatestBlogs } from '../Components/BlogsData';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const blogsPerPage = 6;
  const navigate = useNavigate();
  
  const categories = ['All', ...getCategories()];
  const latestBlogs = getLatestBlogs(3);
  
  // Filter blogs based on search and category
  const filteredBlogs = blogsData.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  
  // Navigate to blog and scroll to top
  const navigateToBlog = (blogId) => {
    setIsVisible(false);
    setTimeout(() => {
      navigate(`/blog/${blogId}`);
      window.scrollTo(0, 0);
    }, 300);
  };
  
  // Scroll to top when page changes
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  
  // Scroll to top when category or search changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      // Trigger animation after content loads
      setTimeout(() => setIsVisible(true), 100);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery]);
  
  return (
    <div className={`font-serif bg-gray-50 min-h-screen transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#363544] to-[#4A6FA5] text-white py-8 md:py-12 lg:py-16 px-4 animate-slideDown">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 animate-fadeInUp">Legal Insights & Resources</h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-200 animate-fadeInUp animation-delay-200">
            Expert analysis, updates, and perspectives on the latest developments in Indian law
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Search and Filter */}
            <div className="bg-white rounded-xl shadow-md p-3 md:p-4 mb-4 md:mb-6 transition-all duration-300 hover:shadow-lg animate-fadeInUp animation-delay-300">
              <div className="flex flex-col md:flex-row gap-2 md:gap-3">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-9 pr-3 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B9A38F] focus:border-transparent transition-all duration-300 text-sm md:text-base"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm md:text-base" />
                </div>
                <select
                  className="px-3 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B9A38F] focus:border-transparent transition-all duration-300 text-sm md:text-base"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Blog Posts */}
            <div className="space-y-4 md:space-y-6">
              {isLoading ? (
                // Loading skeleton
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
                    <div className="md:flex">
                      <div className="md:w-1/3 h-40 md:h-auto bg-gray-300"></div>
                      <div className="p-4 md:p-5 md:w-2/3">
                        <div className="h-4 bg-gray-300 rounded w-1/4 mb-3"></div>
                        <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
                        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
                        <div className="flex justify-between">
                          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : currentBlogs.length > 0 ? (
                currentBlogs.map((blog, index) => (
                  <div 
                    key={blog.id} 
                    className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer transform hover:-translate-y-1 animate-staggeredFadeIn"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                    onClick={() => navigateToBlog(blog.id)}
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={blog.image} 
                          alt={blog.title}
                          className="w-full h-40 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-3 md:p-4 md:w-2/3">
                        <div className="flex items-center text-xs md:text-sm text-gray-500 mb-2">
                          <span className="flex items-center mr-3">
                            <FaFolder className="mr-1 text-[#B9A38F]" />
                            {blog.category}
                          </span>
                          <span className="flex items-center">
                            <FaCalendar className="mr-1 text-[#B9A38F]" />
                            {blog.date}
                          </span>
                        </div>
                        
                        <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 group-hover:text-[#B9A38F] transition-colors duration-300 line-clamp-2">
                          {blog.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{blog.excerpt}</p>
                        
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                          <div className="flex flex-wrap items-center text-xs text-gray-500 gap-3">
                            <span className="flex items-center">
                              <FaUser className="mr-1 text-[#B9A38F]" />
                              {blog.author}
                            </span>
                            <span className="flex items-center">
                              <FaClock className="mr-1 text-[#B9A38F]" />
                              {blog.readTime}
                            </span>
                          </div>
                          
                          <span className="text-[#B9A38F] group-hover:text-[#363544] font-medium text-sm transition-colors duration-300 inline-flex items-center">
                            Read More 
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-xl shadow-md p-6 md:p-8 text-center transition-all duration-300 animate-fadeIn">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2">No articles found</h3>
                  <p className="text-gray-600 text-sm">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-4 md:mt-6 animate-fadeIn">
                <nav className="inline-flex space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`px-3 py-1.5 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm ${
                        currentPage === number
                          ? 'bg-[#363544] text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {number}
                    </button>
                  ))}
                </nav>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="space-y-4 md:space-y-6">
            {/* Latest Posts */}
            <div className="bg-white rounded-xl shadow-md p-3 md:p-4 transition-all duration-300 hover:shadow-lg animate-fadeInUp animation-delay-500">
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">Latest Posts</h3>
              <div className="space-y-3">
                {latestBlogs.map((blog, index) => (
                  <div 
                    key={blog.id} 
                    className="flex items-start cursor-pointer group transition-all duration-300 hover:bg-gray-50 p-2 rounded-lg animate-staggeredFadeIn"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    onClick={() => navigateToBlog(blog.id)}
                  >
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-12 h-12 rounded-lg object-cover mr-3 flex-shrink-0 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-[#B9A38F] transition-colors duration-300 text-sm line-clamp-2">
                        {blog.title}
                      </h4>
                      <p className="text-xs text-gray-500 flex items-center">
                        <FaCalendar className="mr-1" />
                        {blog.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Categories */}
            <div className="bg-white rounded-xl shadow-md p-3 md:p-4 transition-all duration-300 hover:shadow-lg animate-fadeInUp animation-delay-600">
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">Categories</h3>
              <ul className="space-y-1">
                {getCategories().map((category, index) => (
                  <li key={category}>
                    <button
                      onClick={() => {
                        setSelectedCategory(category);
                        setCurrentPage(1);
                      }}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-left transition-all duration-300 transform hover:scale-[1.02] animate-staggeredFadeIn`}
                      style={{ animationDelay: `${0.7 + index * 0.05}s` }}
                    >
                      <span className="text-sm">{category}</span>
                      <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {blogsData.filter(blog => blog.category === category).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Tags */}
            <div className="bg-white rounded-xl shadow-md p-3 md:p-4 transition-all duration-300 hover:shadow-lg animate-fadeInUp animation-delay-700">
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['corporate law', 'contracts', 'real estate', 'family law', 'employment law', 'intellectual property', 'compliance', 'M&A'].map((tag, index) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-[#B9A38F]/20 hover:text-[#363544] transition-all duration-300 transform hover:scale-105 animate-tagPop"
                    style={{ animationDelay: `${0.8 + index * 0.05}s` }}
                  >
                    <FaTag className="inline mr-1 text-xs" />
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="bg-gradient-to-br from-[#363544] to-[#4A6FA5] rounded-xl shadow-md p-3 md:p-4 text-white transition-all duration-300 hover:shadow-lg animate-fadeInUp animation-delay-800">
              <h3 className="text-base md:text-lg font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-200 mb-3 text-sm">Get the latest legal insights delivered to your inbox</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg text-white bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 text-sm"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-white text-[#363544] font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02] text-sm"
                >
                  Subscribe
                </button>
              </form>
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
        
        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }
        
        .animate-tagPop {
          animation: tagPop 0.5s ease-out forwards;
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
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;