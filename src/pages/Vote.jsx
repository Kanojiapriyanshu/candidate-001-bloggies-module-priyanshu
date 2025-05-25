import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { bloggieAPI } from '../api/bloggieAPI';
import { nominations, blogCategories } from '../mock/mockData';
import Toast from '../components/Toast';

const Vote = () => {
  const { categoryId } = useParams();
  const [categoryNominations, setCategoryNominations] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');

  useEffect(() => {
    const filteredNominations = nominations.filter(
      nom => nom.categoryId === parseInt(categoryId)
    );
    setCategoryNominations(filteredNominations);
  }, [categoryId]);

  const handleVote = async (nominationId) => {
    const voterEmail = localStorage.getItem('voterEmail');
    if (!voterEmail) {
      const email = prompt('Please enter your email to vote:');
      if (!email) return;
      localStorage.setItem('voterEmail', email);
    }

    try {
      await bloggieAPI.submitVote(nominationId, voterEmail);
      setToastMessage('Vote submitted successfully!');
      setToastType('success');
      setShowToast(true);
      
      // Update local state
      setCategoryNominations(prev =>
        prev.map(nom =>
          nom.id === nominationId
            ? { ...nom, votes: nom.votes + 1 }
            : nom
        )
      );
    } catch (error) {
      setToastMessage('Error submitting vote. Please try again.');
      setToastType('error');
      setShowToast(true);
    }
  };

  const category = blogCategories.find(cat => cat.id === parseInt(categoryId));

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-lora">
            Vote for {category?.name || 'Category'} Blogs
          </h1>
          <p className="text-gray-600 font-open-sans">Help us recognize the best blogs in this category!</p>
        </motion.div>

        <div className="grid gap-6">
          {categoryNominations.map((nomination, index) => (
            <motion.div
              key={nomination.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#3F51B5] flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 font-lora">
                    {nomination.name}
                  </h3>
                  <p className="text-gray-600 mt-1 font-open-sans">{nomination.blogUrl}</p>
                  <div className="flex items-center mt-2">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" 
                      alt="Votes" 
                      className="w-5 h-5 mr-1"
                    />
                    <p className="text-[#3F51B5] font-medium font-open-sans">
                      {nomination.votes} votes
                    </p>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleVote(nomination.id)}
                className="px-6 py-3 bg-[#3F51B5] text-white rounded-md hover:bg-[#303F9F] transition-all duration-300 shadow-sm"
              >
                Vote Now
              </motion.button>
            </motion.div>
          ))}
        </div>

        {showToast && (
          <Toast
            message={toastMessage}
            type={toastType}
            onClose={() => setShowToast(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Vote; 