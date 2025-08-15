import React from 'react';
import { Droplet } from 'lucide-react';

function HeroSection({ setCurrentPage, theme }) {
  const isDarkMode = theme === 'dark';
  return (
    <div className={`relative text-center py-24 md:py-40 transition-all duration-700 overflow-hidden
      ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-white text-gray-900'}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <Droplet className="w-5 h-5 mr-2 text-blue-300" />
          <span className="text-sm font-medium">Premium Quality Water</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Pure Hydration, Delivered.
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 font-light">
          Experience the finest quality bottled water. Fresh, clean, and conveniently delivered to your door.
        </p>
        <button
          onClick={() => setCurrentPage('home')}
          className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-500 ease-out hover:shadow-blue-500/25 hover:scale-105 transform">
          <span className="relative z-10">Shop Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </button>
      </div>
    </div>
  );
}

export default HeroSection; 