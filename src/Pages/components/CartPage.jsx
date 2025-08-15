import React from 'react';
import { ShoppingCart, MinusCircle, PlusCircle, Trash2, CheckCircle } from 'lucide-react';

function CartPage({ cartItems, updateCartQuantity, removeFromCart, getTotalAmount, setCurrentPage, theme }) {
  const isDarkMode = theme === 'dark';
  
  return (
    <div className={`container mx-auto p-12 my-20 transition-all duration-500`}>
      <div className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500
        ${isDarkMode ? 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-gray-200' : 'bg-gradient-to-br from-white via-blue-50 to-indigo-50 text-gray-800'}`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="relative p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h2 className={`text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
              Your Shopping Cart
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mb-6">
                <ShoppingCart className="w-10 h-10 text-blue-500" />
              </div>
              <p className={`text-2xl font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Your cart is empty</p>
              <p className={`text-lg mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Start adding some refreshing water!</p>
            </div>
          ) : (
            <>
              <div className="space-y-6">
                {cartItems.map(item => (
                  <div key={item.id} className={`group relative flex items-center justify-between p-6 rounded-2xl shadow-lg border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                    ${isDarkMode ? 'bg-gradient-to-r from-gray-700 to-gray-600 border-gray-600' : 'bg-gradient-to-r from-white to-gray-50 border-gray-200'}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center space-x-6">
                      <div className="relative">
                        <img src={item.image} alt={item.name} className="w-20 h-28 object-contain rounded-xl shadow-md" onError={(e)=>{e.target.onerror = null; e.target.src="https://placehold.co/80x112/AACCFF/000000?text=Bottle"}}/>
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{item.name}</h3>
                        <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.size}</p>
                        <p className={`text-xl font-semibold mt-2 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>Rs. {item.price}</p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-center space-x-6">
                      <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl p-2">
                        <button
                          onClick={() => updateCartQuantity(item.id, -1)}
                          disabled={item.quantity === 1}
                          className={`p-2 rounded-xl hover:scale-110 disabled:opacity-50 transition-all duration-200
                            ${isDarkMode ? 'bg-gray-600 text-blue-300 hover:bg-gray-500' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
                        >
                          <MinusCircle size={20} />
                        </button>
                        <span className={`text-xl font-bold w-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.id, 1)}
                          className={`p-2 rounded-xl hover:scale-110 transition-all duration-200
                            ${isDarkMode ? 'bg-gray-600 text-blue-300 hover:bg-gray-500' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
                        >
                          <PlusCircle size={20} />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className={`p-3 rounded-xl hover:scale-110 transition-all duration-200
                          ${isDarkMode ? 'bg-red-600 text-white hover:bg-red-500' : 'bg-red-100 text-red-600 hover:bg-red-200'}`}
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    
                    <div className="text-right">
                      <p className={`text-2xl font-black ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>Rs. {item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className={`mt-12 pt-8 border-t-2 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0
                ${isDarkMode ? 'border-gray-600' : 'border-blue-300'}`}>
                <h3 className={`text-4xl font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent`}>
                  Total: Rs. {getTotalAmount()}
                </h3>
                <button
                  onClick={() => setCurrentPage('order')}
                  className="group relative px-12 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-2xl font-bold rounded-2xl shadow-xl transition-all duration-300 ease-out hover:shadow-green-500/25 hover:scale-105 transform"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <CheckCircle className="mr-3" size={28} /> Proceed to Order
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartPage; 