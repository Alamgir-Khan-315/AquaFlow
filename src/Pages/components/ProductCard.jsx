import React from 'react';
import { ShoppingCart } from 'lucide-react';

function ProductCard({ product, addToCart, theme }) {
  const isDarkMode = theme === 'dark';

  return (
    <div className={`group relative p-8 rounded-3xl flex flex-col items-center text-center transition-all duration-500 hover:scale-105 shadow-xl
      ${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600' : 'bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-indigo-50'}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative mb-6">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-48 h-56 object-contain transition-transform duration-500 group-hover:scale-110" 
          onError={(e) => { 
            e.target.onerror = null; 
            e.target.src = "https://placehold.co/192x224/AACCFF/000000?text=Water+Bottle" 
          }} 
        />
      </div>
      <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        {product.name}
      </h3>
      <p className={`text-lg mb-6 opacity-80 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {product.size}
      </p>
      <p className={`text-3xl font-black mb-8 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent`}>
        Rs. {product.price}
      </p>
      <button
        onClick={() => addToCart(product)}
        className="group/btn relative w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold rounded-2xl shadow-lg transition-all duration-300 hover:shadow-blue-500/25 hover:scale-105 transform"
      >
        <span className="relative z-10 flex items-center justify-center">
          <ShoppingCart className="w-5 h-5 mr-2" />
          Add to Cart
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
      </button>
    </div>
  );
}

export default ProductCard; 