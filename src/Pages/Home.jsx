import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import OrderPage from './components/OrderPage';
import ContactPage from './components/ContactPage';


const products = [
  { id: 'water-300ml', name: 'Water Bottle', size: '300ml', price: 10, image: 'Product/300ml.webp' },
  { id: 'water-500ml', name: 'Water Bottle', size: '500ml', price: 15, image: 'Product/500ml.webp' },
  { id: 'water-1litr', name: 'Water Bottle', size: '1 Litre', price: 25, image: 'Product/1litr.webp' },
];


const customStyles = `
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;


if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = customStyles;
  document.head.appendChild(styleSheet);
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [theme, setTheme] = useState('light');

  
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  
  const addToCart = (productToAdd) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productToAdd.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  
  const updateCartQuantity = (id, change) => {
    setCartItems(prevItems => {
      return prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      );
    });
  };

  
  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  
  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  
  const placeOrder = (orderDetails) => {
    console.log("Order placed:", orderDetails, "Cart items:", cartItems);
    setOrderPlaced(true);
    setShowOrderModal(true);
    setCartItems([]);
  };

  
  const closeOrderModal = () => {
    setShowOrderModal(false);
    setOrderPlaced(false);
    setCurrentPage('home');
  };

  return (
    <div className={`min-h-screen font-sans transition-all duration-500
      ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-black text-gray-100' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-white text-gray-800'}`}>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} cartItemCount={cartItems.length} theme={theme} toggleTheme={toggleTheme} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {currentPage === 'home' && <HomePage products={products} addToCart={addToCart} setCurrentPage={setCurrentPage} theme={theme} />}
        {currentPage === 'cart' && (
          <CartPage
            cartItems={cartItems}
            updateCartQuantity={updateCartQuantity}
            removeFromCart={removeFromCart}
            getTotalAmount={getTotalAmount}
            setCurrentPage={setCurrentPage}
            theme={theme}
          />
        )}
        {currentPage === 'order' && (
          <OrderPage
            cartItems={cartItems}
            getTotalAmount={getTotalAmount}
            placeOrder={placeOrder}
            orderPlaced={orderPlaced}
            theme={theme}
          />
        )}
        {currentPage === 'contact' && <ContactPage theme={theme} />}
      </div>

      {/* Order Confirmation Modal */}
      {showOrderModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className={`relative overflow-hidden p-12 rounded-3xl shadow-2xl text-center max-w-2xl w-full transform transition-all duration-500 scale-105
            ${theme === 'dark' ? 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-gray-100' : 'bg-gradient-to-br from-white via-blue-50 to-indigo-50 text-gray-800'}`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-8">
                <CheckCircle className="w-12 h-12 text-white" strokeWidth={2} />
              </div>
              <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Order Confirmed!</h2>
              <p className="text-2xl mb-8 text-gray-600">Your order has been placed successfully. We'll process it shortly.</p>
              <div className={`text-lg mb-10 p-6 rounded-2xl border-2
                ${theme === 'dark' ? 'bg-yellow-900/20 text-yellow-100 border-yellow-600' : 'bg-yellow-50 text-yellow-800 border-yellow-200'}`}>
                <strong>Note on WhatsApp Notification:</strong> Direct WhatsApp integration requires a backend server and WhatsApp Business API setup. In a real-world scenario, your server would handle sending a notification to <strong className="text-blue-600">+923154572266</strong> upon receiving this order.
              </div>
              <button
                onClick={closeOrderModal}
                className="group relative px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold rounded-2xl shadow-xl transition-all duration-300 ease-out hover:shadow-blue-500/25 hover:scale-105 transform"
              >
                <span className="relative z-10">Continue Shopping</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App; 