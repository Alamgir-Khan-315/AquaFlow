import React, { useState } from 'react';
import { Phone, CheckCircle } from 'lucide-react';

function ContactPage({ theme }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const isDarkMode = theme === 'dark';

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", { name, email, message });
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className={`w-full md:container md:h-screen mx-auto p-12 transition-all duration-500 -mb-[10%] md:-mb-[5%]`}>
      <div className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 max-w-4xl mx-auto
        ${isDarkMode ? 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-gray-200' : 'bg-gradient-to-br from-white via-blue-50 to-indigo-50 text-gray-800'}`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="relative p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h2 className={`text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          {submitted ? (
            <div className="text-center p-8 bg-green-50 text-green-700 rounded-lg shadow-md">
              <CheckCircle className="mx-auto mb-4" size={60} />
              <p className="text-2xl font-semibold">Thank you for your message! We'll get back to you soon.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-bold transition duration-300 hover:bg-blue-700"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="-mt-5 space-y-6">
              <div>
                <label htmlFor="contact-name" className={`block text-lg font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent text-lg
                    ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-400' : 'bg-white border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-blue-500'}`}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-email" className={`block text-lg font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Your Email</label>
                <input
                  type="email"
                  id="contact-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent text-lg
                    ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-400' : 'bg-white border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-blue-500'}`}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-message" className={`block text-lg font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Your Message</label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="6"
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent text-lg
                    ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-400' : 'bg-white border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-blue-500'}`}
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-2xl text-xl md:text-2xl font-bold flex items-center justify-center transition-all duration-300 ease-out hover:shadow-blue-500/25 hover:scale-105 transform shadow-xl"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactPage; 