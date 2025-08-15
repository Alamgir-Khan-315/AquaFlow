import React, { useState } from 'react';
import { Package } from 'lucide-react';

function OrderPage({ cartItems, getTotalAmount, placeOrder, orderPlaced, theme }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const isDarkMode = theme === 'dark';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !phone) {
      alert("Please fill in all order details.");
      return;
    }
    placeOrder({ name, address, phone });
  };

  return (
    <div className={`container mx-auto p-12 my-20 transition-all duration-500`}>
      <div className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 max-w-4xl mx-auto
        ${isDarkMode ? 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-gray-200' : 'bg-gradient-to-br from-white via-blue-50 to-indigo-50 text-gray-800'}`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="relative p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h2 className={`text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
              Place Your Order
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          {cartItems.length === 0 && !orderPlaced ? (
            <p className={`text-center text-xl p-8 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>Your cart is empty. Please add items before placing an order.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-lg font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent text-lg
                    ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-400' : 'bg-white border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-blue-500'}`}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="address" className={`block text-lg font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Delivery Address</label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows="4"
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent text-lg
                    ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-400' : 'bg-white border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-blue-500'}`}
                  placeholder="123 Main St, City, State, Zip"
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="phone" className={`block text-lg font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent text-lg
                    ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-400' : 'bg-white border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-blue-500'}`}
                  placeholder="+923XXYYYYYYY"
                  required
                />
              </div>
              <div className={`mt-8 pt-4 border-t-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>Order Summary:</h3>
                <ul className={`list-disc list-inside text-lg space-y-2 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {cartItems.map(item => (
                    <li key={item.id}>
                      {item.name} ({item.size}) x {item.quantity} = Rs. {item.price * item.quantity}
                    </li>
                  ))}
                </ul>
                <p className={`text-2xl font-bold mt-4 ${isDarkMode ? 'text-blue-300' : 'text-blue-800'}`}>Total: Rs. {getTotalAmount()}</p>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 px-8 rounded-2xl text-2xl font-bold flex items-center justify-center transition-all duration-300 ease-out hover:shadow-blue-500/25 hover:scale-105 transform shadow-xl"
              >
                <Package className="mr-3" size={28} /> Confirm Order
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderPage; 