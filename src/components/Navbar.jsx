import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="bg-white text-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2589/2589175.png" 
              alt="Trophy" 
              className="w-8 h-8 mr-2"
            />
            <Link to="/" className="text-xl font-bold font-lora hover:text-[#3F51B5] transition-colors">
              Blogger Honors
            </Link>
          </motion.div>
          <div className="flex space-x-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/nominate"
                className="px-4 py-2 rounded-md text-sm font-medium border border-[#3F51B5] text-[#3F51B5] hover:bg-[#3F51B5] hover:text-white transition-all duration-300"
              >
                Nominate
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/vote/1"
                className="px-4 py-2 rounded-md text-sm font-medium border border-[#3F51B5] text-[#3F51B5] hover:bg-[#3F51B5] hover:text-white transition-all duration-300"
              >
                Vote
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/dashboard/bloggies-sponsors"
                className="px-4 py-2 rounded-md text-sm font-medium bg-[#3F51B5] text-white hover:bg-[#303F9F] transition-all duration-300"
              >
                Dashboard
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 