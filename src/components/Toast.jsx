import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' 
    ? 'bg-gradient-to-r from-green-500 to-green-600' 
    : 'bg-gradient-to-r from-red-500 to-red-600';

  const icon = type === 'success' 
    ? 'https://cdn-icons-png.flaticon.com/512/190/190411.png'
    : 'https://cdn-icons-png.flaticon.com/512/1828/1828843.png';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
        className="fixed bottom-4 right-4 z-50"
      >
        <div className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-xl flex items-center backdrop-blur-sm`}>
          <img src={icon} alt={type} className="w-6 h-6 mr-3" />
          <span className="font-medium">{message}</span>
          <button
            onClick={onClose}
            className="ml-4 text-white hover:text-gray-200 focus:outline-none transition-colors"
          >
            ×
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast; 