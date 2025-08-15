import React from 'react';
import { Droplet, CheckCircle } from 'lucide-react';

function AboutUsSection({ theme }) {
  const isDarkMode = theme === 'dark';
  return (
    <div className={`container mx-auto p-4 sm:p-6 md:p-8 lg:p-12 my-12 transition-all duration-500`}>
      <div className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500
        ${isDarkMode ? 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-gray-200' : 'bg-gradient-to-br from-white via-blue-50 to-indigo-50 text-gray-700'}`}>
        
        {/* Removed the absolute, blurry div for a cleaner look */}

        <div className="relative p-6 sm:p-8 md:p-10 lg:p-16">
          <div className="text-center mb-8 md:mb-12">
            
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
              Our Mission
            </h2>
            
            <p className={`text-base md:text-lg max-w-2xl mx-auto
              ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              We are dedicated to providing the highest quality bottled water with a focus on purity, sustainability, and exceptional service.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="relative group">
                {/* Changed the image source to a placeholder for a complete example */}
                <img src="clean-water.jpeg" alt="Clean Water" className="rounded-2xl shadow-2xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-6">
              <p className="text-base md:text-lg leading-relaxed font-light">
                At <span className={`font-semibold text-blue-600`}>AquaFlow</span>, we believe in the power of pure, accessible water. Our mission is to provide high-quality bottled water to our community, ensuring every drop is clean, refreshing, and safely delivered right to your doorstep.
              </p>
              <p className="text-base md:text-lg leading-relaxed font-light">
                We are committed to sustainable practices and delivering exceptional customer service. Your health and hydration are our top priorities, and we strive to make getting your daily water as effortless as possible.
              </p>

              {/* Converted the features to a more organized grid list for better mobile view */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-4">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm font-medium">Premium Quality Standards</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm font-medium">Fast & Reliable Delivery</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm font-medium">Eco-Conscious Practices</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm font-medium">Dedicated Customer Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;