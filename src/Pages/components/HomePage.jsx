import React from 'react';
import HeroSection from './HeroSection';
import AboutUsSection from './AboutUsSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import ProductCard from './ProductCard';

function HomePage({ products, addToCart, setCurrentPage, theme }) {
  const isDarkMode = theme === 'dark';
  
  return (
    <>
      <HeroSection setCurrentPage={setCurrentPage} theme={theme} />
      <AboutUsSection theme={theme} />
      <div className={`container mx-auto p-12 md:my-20 rounded-3xl shadow-2xl transition-all duration-500 ${isDarkMode ? 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-gray-200' : 'bg-gradient-to-br from-white via-blue-50 to-indigo-50 text-gray-700'}`}>
        <div className="text-center md:mb-16">
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
            Our Refreshing Products
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Choose from our premium selection of pure, refreshing water bottles
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
              theme={theme} 
            />
          ))}
        </div>
      </div>
      <WhyChooseUsSection theme={theme} />
    </>
  );
}

export default HomePage; 