import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Nominate from './pages/Nominate';
import Vote from './pages/Vote';
import Dashboard from './pages/Dashboard';
import './styles/fonts.css';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Tech Blogger",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote: "Winning the Blogger Honors award was a turning point for my blog. The recognition helped me reach new audiences and connect with amazing creators."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Food Blogger",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote: "The community here is incredible. Being nominated alongside such talented bloggers was an honor in itself."
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Travel Blogger",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    quote: "The exposure from Blogger Honors helped me grow my audience by 200% in just three months!"
  }
];

const categories = [
  { id: 1, name: "Technology", icon: "💻", count: 156 },
  { id: 2, name: "Food & Cooking", icon: "🍳", count: 243 },
  { id: 3, name: "Travel", icon: "✈️", count: 189 },
  { id: 4, name: "Lifestyle", icon: "✨", count: 167 },
  { id: 5, name: "Business", icon: "💼", count: 134 },
  { id: 6, name: "Health & Fitness", icon: "🏃‍♀️", count: 145 }
];

const stats = [
  { label: "Total Nominations", value: "1,234" },
  { label: "Active Voters", value: "8,567" },
  { label: "Categories", value: "12" },
  { label: "Awards Given", value: "48" }
];

const gallery = [
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  "https://images.unsplash.com/photo-1432821596592-e2c18b78144f",
  "https://images.unsplash.com/photo-1455390582262-044cdead277a",
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66"
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/nominate" element={<Nominate />} />
            <Route path="/vote/:categoryId" element={<Vote />} />
            <Route path="/dashboard/bloggies-sponsors" element={<Dashboard />} />
            <Route
              path="/"
              element={
                <div className="space-y-20">
                  {/* Hero Section */}
                  <section className="relative bg-[#3F51B5] text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                      >
                        <h1 className="text-5xl font-bold mb-6 font-lora">
                          Blogger Honors 2024
                        </h1>
                        <p className="text-xl mb-8 font-open-sans max-w-2xl mx-auto">
                          Celebrating excellence in blogging across all categories. Join us in recognizing the best content creators of the year.
                        </p>
                        <div className="flex justify-center space-x-4">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-3 bg-white text-[#3F51B5] rounded-md font-medium hover:bg-gray-100 transition-colors"
                          >
                            Start Nominating
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-3 border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors"
                          >
                            View Categories
                          </motion.button>
                        </div>
                      </motion.div>
                    </div>
                  </section>

                  {/* Stats Section */}
                  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-white rounded-lg shadow-sm p-6 text-center"
                        >
                          <div className="text-3xl font-bold text-[#3F51B5] mb-2 font-lora">
                            {stat.value}
                          </div>
                          <div className="text-gray-600 font-open-sans">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  {/* Categories Section */}
                  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-lora">
                      Popular Categories
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                      {categories.map((category, index) => (
                        <motion.div
                          key={category.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow cursor-pointer"
                        >
                          <div className="text-4xl mb-3">{category.icon}</div>
                          <h3 className="font-semibold text-gray-900 mb-1 font-lora">
                            {category.name}
                          </h3>
                          <p className="text-sm text-gray-600 font-open-sans">
                            {category.count} blogs
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  {/* Gallery Section */}
                  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-lora">
                      Featured Blogs
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {gallery.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="relative aspect-[4/3] rounded-lg overflow-hidden group"
                        >
                          <img
                            src={image}
                            alt={`Featured blog ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <p className="text-white font-medium font-open-sans">
                              Featured Blog {index + 1}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  {/* Testimonials Section */}
                  <section className="bg-gray-100 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-lora">
                        What Our Winners Say
                      </h2>
                      <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                          <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-lg shadow-sm p-6"
                          >
                            <div className="flex items-center mb-4">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full mr-4"
                              />
                              <div>
                                <h3 className="font-semibold text-gray-900 font-lora">
                                  {testimonial.name}
                                </h3>
                                <p className="text-sm text-gray-600 font-open-sans">
                                  {testimonial.role}
                                </p>
                              </div>
                            </div>
                            <p className="text-gray-600 font-open-sans italic">
                              "{testimonial.quote}"
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* CTA Section */}
                  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="bg-[#3F51B5] rounded-lg shadow-lg p-12 text-center text-white">
                      <h2 className="text-3xl font-bold mb-4 font-lora">
                        Ready to Join the Celebration?
                      </h2>
                      <p className="text-xl mb-8 font-open-sans max-w-2xl mx-auto">
                        Nominate your favorite blogs or vote for the best content creators in your favorite categories.
                      </p>
                      <div className="flex justify-center space-x-4">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-8 py-3 bg-white text-[#3F51B5] rounded-md font-medium hover:bg-gray-100 transition-colors"
                        >
                          Start Nominating
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-8 py-3 border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors"
                        >
                          View Categories
                        </motion.button>
                      </div>
                    </div>
                  </section>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
