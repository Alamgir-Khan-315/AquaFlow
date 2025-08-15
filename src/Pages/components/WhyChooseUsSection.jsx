import React from 'react';
import { Droplet, Zap, Heart, Leaf } from 'lucide-react';

function WhyChooseUsSection({ theme }) {
  const isDarkMode = theme === 'dark';
  const features = [
    { icon: <Droplet size={32} className="text-white" />, title: "Purest Quality", description: "Our water undergoes rigorous purification processes to ensure pristine quality." },
    { icon: <Zap size={32} className="text-white" />, title: "Fast Delivery", description: "Get your water delivered swiftly and reliably, right when you need it." },
    { icon: <Heart size={32} className="text-white" />, title: "Customer Care", description: "Dedicated support team ready to assist you with any queries or needs." },
    { icon: <Leaf size={32} className="text-white" />, title: "Eco-Friendly", description: "Committed to sustainable sourcing and responsible packaging practices." },
  ];

  return (
    <div className={`container mx-auto p-12 md:my-20 rounded-3xl shadow-2xl transition-all duration-500 ${isDarkMode ? 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-gray-200' : 'bg-gradient-to-br from-white via-blue-50 to-indigo-50 text-gray-700'}`}>
      <div className={`text-center mb-16 `}>
        <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
          Why Choose Us
        </h2>
        <p className={`text-xl max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Experience the difference that quality, reliability, and care make in every drop
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className={`group relative p-8 rounded-3xl flex flex-col items-center text-center transition-all duration-500 hover:scale-105
            ${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600' : 'bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-indigo-50'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className={`relative p-4 rounded-2xl mb-6 transition-all duration-500 group-hover:scale-110
              ${isDarkMode ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gradient-to-r from-blue-500 to-purple-500'}`}>
              <div className="text-white">{feature.icon}</div>
            </div>
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{feature.title}</h3>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUsSection; 