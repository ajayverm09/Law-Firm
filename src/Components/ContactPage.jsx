import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFax,
  FaGlobe,
  FaChevronDown,
  FaChevronUp,
  FaUser,
  FaBuilding,
  FaFileAlt,
  FaCommentAlt,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [activeFaq, setActiveFaq] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message. We will contact you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Trigger animation after component mounts
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const officeLocations = [
    {
      name: "Chandigarh Headquarters",
      address: "SCO 85-86, Sector 17-C, Chandigarh, 160017",
      phone: "+91 172 123 4567",
      email: "chandigarh@nkvermaassociates.com",
      timings: "Mon-Fri: 9:30 AM - 6:30 PM, Sat: 10:00 AM - 4:00 PM",
      image:
        "https://content.jdmagicbox.com/comp/chandigarh/z7/0172px172.x172.190815222202.q6z7/catalogue/aeren-lpo-reinventing-your-legal-business-chandigarh-chandigarh-legal-process-outsourcing-yik8ylnx1u.jpg",
    },
    {
      name: "Punjab Office",
      address: "Civil Lines, Ludhiana, Punjab, 141001",
      phone: "+91 161 123 4567",
      email: "punjab@nkvermaassociates.com",
      timings: "Mon-Fri: 10:00 AM - 6:00 PM",
      image:
        "https://www.vhdesignsstudio.com/wp-content/uploads/2022/09/6-1.jpg",
    },
    {
      name: "Haryana Office",
      address: "Sector 14, Panchkula, Haryana, 134113",
      phone: "+91 172 123 4568",
      email: "haryana@nkvermaassociates.com",
      timings: "Mon-Fri: 9:30 AM - 6:30 PM",
      image:
        "https://i.pinimg.com/originals/bb/e6/c6/bbe6c631ecc15d48071a91d8668cd494.jpg",
    },
    {
      name: "Delhi Office",
      address: "Connaught Place, New Delhi, 110001",
      phone: "+91 11 123 4567",
      email: "delhi@nkvermaassociates.com",
      timings: "Mon-Fri: 9:30 AM - 6:30 PM",
      image:
        "https://cdn.prod.website-files.com/66456ff69b6aadbdb065af90/673aecf285a5ce8f5a1c0acc_66e142eeef75b6abab7e80c6_669fa3af55d61dc1cbc95ac1_Managing%25252Bdirectors%25252Bcabin%25252B_%25252Bhomify.webp",
    },
  ];

  const faqs = [
    {
      question: "How quickly will I receive a response?",
      answer:
        "We typically respond to all inquiries within 24 business hours. For urgent matters, please call our office directly.",
    },
    {
      question: "Do you offer initial consultations?",
      answer:
        "Yes, we offer initial consultations to discuss your case and determine how we can assist you. Contact us to schedule an appointment.",
    },
    {
      question: "What areas of law do you practice?",
      answer:
        "We specialize in corporate law, contract law, real estate law, family law, dispute resolution, and employment law among others.",
    },
    {
      question: "Do you handle cases outside Chandigarh?",
      answer:
        "Yes, we have offices in Punjab, Haryana, and Delhi and can handle cases throughout the region. Contact us to discuss your specific location.",
    },
    {
      question: "What should I bring to my first consultation?",
      answer:
        "Please bring any relevant documents related to your case, a list of questions, and any correspondence you've had regarding the matter.",
    },
  ];

  return (
    <div className={`font-serif bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-5 transition-all duration-300 hover:shadow-2xl animate-fadeInUp">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#B9A38F]/20 flex items-center justify-center mr-3">
                  <FaCommentAlt className="text-base md:text-lg text-[#B9A38F]" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  Send Us a Message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 mb-1 font-medium text-sm"
                    >
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-gray-400 text-sm" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B9A38F] focus:border-transparent transition-all duration-300 text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 mb-1 font-medium text-sm"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-gray-400 text-sm" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B9A38F] focus:border-transparent transition-all duration-300 text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div className="relative">
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 mb-1 font-medium text-sm"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhoneAlt className="text-gray-400 text-sm" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B9A38F] focus:border-transparent transition-all duration-300 text-sm"
                        placeholder="+91 12345 67890"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 mb-1 font-medium text-sm"
                    >
                      Subject
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaFileAlt className="text-gray-400 text-sm" />
                      </div>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B9A38F] focus:border-transparent transition-all duration-300 text-sm"
                        placeholder="Legal Consultation"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-1 font-medium text-sm"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B9A38F] focus:border-transparent transition-all duration-300 text-sm"
                    placeholder="Please describe your legal issue in detail..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-[#363544] to-[#4A6FA5] hover:from-[#2a2933] hover:to-[#3a5a85] text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-5 transition-all duration-300 hover:shadow-2xl animate-fadeInUp animation-delay-200">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#B9A38F]/20 flex items-center justify-center mr-3">
                  <FaBuilding className="text-base md:text-lg text-[#B9A38F]" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  Contact Information
                </h2>
              </div>

              {/* 2-Column Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="bg-gradient-to-br from-[#B9A38F]/10 to-[#B9A38F]/5 p-3 md:p-4 rounded-xl border border-[#B9A38F]/20 transition-all duration-300 hover:shadow-md">
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3">
                    General Inquiries
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-start">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#B9A38F]/20 flex items-center justify-center mr-2 flex-shrink-0">
                        <FaPhoneAlt className="text-[#B9A38F] text-sm" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-sm">Phone</p>
                        <p className="text-gray-600 text-sm">+91 172 123 4567</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#B9A38F]/20 flex items-center justify-center mr-2 flex-shrink-0">
                        <FaEnvelope className="text-[#B9A38F] text-sm" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-sm">Email</p>
                        <p className="text-gray-600 text-sm">
                          info@nkvermaassociates.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#B9A38F]/20 flex items-center justify-center mr-2 flex-shrink-0">
                        <FaFax className="text-[#B9A38F] text-sm" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-sm">Fax</p>
                        <p className="text-gray-600 text-sm">+91 172 123 4568</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#363544]/10 to-[#363544]/5 p-3 md:p-4 rounded-xl border border-[#363544]/20 transition-all duration-300 hover:shadow-md">
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3">
                    Office Hours
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-start">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#363544]/20 flex items-center justify-center mr-2 flex-shrink-0">
                        <FaClock className="text-[#363544] text-sm" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-sm">Weekdays</p>
                        <p className="text-gray-600 text-sm">
                          Monday - Friday: 9:30 AM - 6:30 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#363544]/20 flex items-center justify-center mr-2 flex-shrink-0">
                        <FaClock className="text-[#363544] text-sm" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-sm">Saturday</p>
                        <p className="text-gray-600 text-sm">10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#363544]/20 flex items-center justify-center mr-2 flex-shrink-0">
                        <FaClock className="text-[#363544] text-sm" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-sm">Sunday</p>
                        <p className="text-gray-600 text-sm">Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-5 transition-all duration-300 hover:shadow-2xl animate-fadeInUp animation-delay-400">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#B9A38F]/20 flex items-center justify-center mr-3">
                  <FaCommentAlt className="text-base md:text-lg text-[#B9A38F]" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-2 md:space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md animate-staggeredFadeIn"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <button
                      className="w-full p-3 md:p-4 text-left flex justify-between items-center focus:outline-none"
                      onClick={() => toggleFaq(index)}
                    >
                      <h3 className="text-sm md:text-base font-semibold text-gray-800">
                        {faq.question}
                      </h3>
                      {activeFaq === index ? (
                        <FaChevronUp className="text-[#B9A38F] transition-transform duration-300" />
                      ) : (
                        <FaChevronDown className="text-[#B9A38F] transition-transform duration-300" />
                      )}
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        activeFaq === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-3 md:px-4 pb-3 md:pb-4">
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Office Images with Hover */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <div className="bg-white rounded-2xl shadow-xl p-4 md:p-5 mb-4 md:mb-6 transition-all duration-300 hover:shadow-2xl animate-fadeInUp animation-delay-300">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#B9A38F]/20 flex items-center justify-center mr-3">
                    <FaBuilding className="text-base md:text-lg text-[#B9A38F]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                    Our Offices
                  </h2>
                </div>

                <div className="space-y-3 md:space-y-4">
                  {officeLocations.map((office, index) => (
                    <div
                      key={index}
                      className="relative group overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl animate-staggeredFadeIn"
                      style={{ animationDelay: `${0.4 + index * 0.15}s` }}
                    >
                      <img
                        src={office.image}
                        alt={office.name}
                        className="w-full h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                        <div className="text-white">
                          <h3 className="text-base md:text-lg font-bold mb-1">
                            {office.name}
                          </h3>
                          <p className="text-xs">{office.address}</p>
                          <p className="text-xs mt-1">{office.phone}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-[#363544] to-[#4A6FA5] rounded-2xl shadow-xl p-4 md:p-5 text-white transition-all duration-300 hover:shadow-2xl animate-fadeInUp animation-delay-600">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-200 mb-3 md:mb-4 text-sm">
                  Our legal team is ready to help you with urgent matters.
                </p>
                <a
                  href="tel:+911721234567"
                  className="inline-flex items-center justify-center w-full py-2 md:py-2.5 bg-white text-[#363544] font-medium rounded-lg hover:bg-[#363544] hover:text-white transition-all duration-300 transform hover:scale-105 text-sm"
                >
                  <FaPhoneAlt className="mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-6 md:mt-8 bg-white rounded-2xl shadow-xl p-4 md:p-5 transition-all duration-300 hover:shadow-2xl animate-fadeInUp animation-delay-700">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 text-center">
            Find Us
          </h2>

          {/* Map Wrapper */}
          <div className="rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-2xl">
            {/* Google Maps Embed */}
            <iframe
              title="Stoney River Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509179!2d144.95373531531677!3d-37.81627977975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ceed30!2sMelbourne!5e0!3m2!1sen!2sau!4v1633072800000!5m2!1sen!2sau"
              className="w-full h-48 md:h-64 transition duration-500 lg:grayscale lg:hover:grayscale-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-[#363544] to-[#4A6FA5] py-6 md:py-10 mt-4 md:mt-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-gray-200 mb-4 md:mb-6 max-w-2xl mx-auto text-sm">
            Schedule a consultation with our experienced legal team today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2 md:gap-4">
            <a
              href="tel:+911721234567"
              className="inline-flex items-center justify-center px-5 md:px-6 py-2 md:py-2.5 bg-[#B9A38F] hover:text-[#B9A38F] hover:bg-[#363544] text-[#363544] hover:font-bold font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm"
            >
              <FaPhoneAlt className="mr-2" />
              Call Now
            </a>
            <a
              href="/book-consultation"
              className="inline-flex items-center justify-center px-5 md:px-6 py-2 md:py-2.5 bg-transparent text-white font-medium rounded-lg border-2 border-white hover:bg-white hover:text-[#363544] transition-all duration-300 text-sm"
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
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;