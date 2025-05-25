import { useState } from 'react';
import { motion } from 'framer-motion';
import { bloggieAPI } from '../api/bloggieAPI';
import { blogCategories } from '../mock/mockData';
import Toast from '../components/Toast';

const nominationSteps = [
  {
    id: 1,
    title: "Choose Category",
    description: "Select the most appropriate category for the blog you're nominating",
    icon: "🎯"
  },
  {
    id: 2,
    title: "Enter Details",
    description: "Provide the blog's URL and your contact information",
    icon: "📝"
  },
  {
    id: 3,
    title: "Submit",
    description: "Review and submit your nomination",
    icon: "✨"
  }
];

const nominationBenefits = [
  {
    id: 1,
    title: "Recognition",
    description: "Help outstanding blogs get the recognition they deserve",
    icon: "🏆"
  },
  {
    id: 2,
    title: "Community",
    description: "Join a community of passionate bloggers and readers",
    icon: "👥"
  },
  {
    id: 3,
    title: "Impact",
    description: "Make a real impact in the blogging community",
    icon: "💫"
  }
];

const Nominate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    categoryId: '',
    blogUrl: ''
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await bloggieAPI.submitNomination(formData);
      setToastMessage('Nomination submitted successfully!');
      setToastType('success');
      setShowToast(true);
      setFormData({ name: '', email: '', categoryId: '', blogUrl: '' });
    } catch (error) {
      setToastMessage('Error submitting nomination. Please try again.');
      setToastType('error');
      setShowToast(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#3F51B5] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4 font-lora">
              Nominate a Blog
            </h1>
            <p className="text-xl max-w-2xl mx-auto font-open-sans">
              Help us discover and celebrate the best blogs in your favorite categories. Your nomination could make a difference!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-lora">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {nominationSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-6 text-center"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-lora">
                  {step.title}
                </h3>
                <p className="text-gray-600 font-open-sans">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-lora">
            Why Nominate?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {nominationBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-6 text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-lora">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-open-sans">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nomination Form Section */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-sm p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center font-lora">
              Submit Your Nomination
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-open-sans">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#3F51B5] focus:border-transparent transition-all duration-300 font-open-sans"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-open-sans">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#3F51B5] focus:border-transparent transition-all duration-300 font-open-sans"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700 mb-1 font-open-sans">
                    Blog Category
                  </label>
                  <select
                    id="categoryId"
                    name="categoryId"
                    value={formData.categoryId}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#3F51B5] focus:border-transparent transition-all duration-300 font-open-sans"
                  >
                    <option value="">Select a category</option>
                    {blogCategories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="blogUrl" className="block text-sm font-medium text-gray-700 mb-1 font-open-sans">
                    Blog URL
                  </label>
                  <input
                    type="url"
                    id="blogUrl"
                    name="blogUrl"
                    value={formData.blogUrl}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#3F51B5] focus:border-transparent transition-all duration-300 font-open-sans"
                    placeholder="Enter blog URL"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 px-6 bg-[#3F51B5] text-white rounded-md hover:bg-[#303F9F] transition-all duration-300 shadow-sm font-medium text-lg font-open-sans"
              >
                Submit Nomination
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-lora">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-lora">
                Can I nominate my own blog?
              </h3>
              <p className="text-gray-600 font-open-sans">
                Yes, you can nominate your own blog! We encourage bloggers to submit their work for consideration.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-lora">
                How many blogs can I nominate?
              </h3>
              <p className="text-gray-600 font-open-sans">
                You can nominate as many blogs as you'd like, but please ensure each nomination is meaningful and well-considered.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-lora">
                What happens after I submit a nomination?
              </h3>
              <p className="text-gray-600 font-open-sans">
                After submission, our team reviews the nomination. If approved, the blog will be added to the voting phase where the community can vote for their favorites.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default Nominate; 