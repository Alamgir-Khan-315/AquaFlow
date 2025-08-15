import React from 'react';
import { ShoppingCart, Sun, Moon } from 'lucide-react';

function Navbar({ currentPage, setCurrentPage, cartItemCount, theme, toggleTheme }) {
  const isDarkMode = theme === 'dark';

  return (
    <nav className={`p-4 sticky top-0 z-50 transition-colors duration-300 ease-in-out
      ${isDarkMode ? 'bg-black text-gray-100 border-b border-gray-800' : 'bg-white text-gray-900 border-b border-gray-200'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">AquaFlow</h1>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-2">
            <button
              onClick={() => setCurrentPage('home')}
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300
                ${currentPage === 'home'
                  ? (isDarkMode ? 'text-white' : 'text-blue-600')
                  : (isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-900')
                } focus:outline-none`}>
              Home
              {currentPage === 'home' && (
                <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-100 transition-transform duration-300
                  ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></span>
              )}
            </button>
            <button
              onClick={() => setCurrentPage('cart')}
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300
                ${currentPage === 'cart'
                  ? (isDarkMode ? 'text-white' : 'text-blue-600')
                  : (isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-900')
                } focus:outline-none`}>
              Cart
              {cartItemCount > 0 && (
                <span className="absolute -top-1 right-2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
              {currentPage === 'cart' && (
                <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-100 transition-transform duration-300
                  ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></span>
              )}
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300
                ${currentPage === 'contact'
                  ? (isDarkMode ? 'text-white' : 'text-blue-600')
                  : (isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-900')
                } focus:outline-none`}>
              Contact
              {currentPage === 'contact' && (
                <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-100 transition-transform duration-300
                  ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></span>
              )}
            </button>
          </div>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500
              ${isDarkMode ? 'text-yellow-300 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-100'}`}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 