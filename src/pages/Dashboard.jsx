import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { bloggieAPI } from '../api/bloggieAPI';
import SponsorTable from '../components/SponsorTable';
import Toast from '../components/Toast';

const stats = [
  {
    id: 1,
    title: "Total Nominations",
    value: "1,234",
    change: "+12.5%",
    trend: "up",
    icon: "📊"
  },
  {
    id: 2,
    title: "Active Voters",
    value: "8,567",
    change: "+8.2%",
    trend: "up",
    icon: "👥"
  },
  {
    id: 3,
    title: "Pending Requests",
    value: "23",
    change: "-5.1%",
    trend: "down",
    icon: "⏳"
  },
  {
    id: 4,
    title: "Approved Sponsors",
    value: "156",
    change: "+15.3%",
    trend: "up",
    icon: "✅"
  }
];

const recentActivity = [
  {
    id: 1,
    type: "nomination",
    user: "Sarah Johnson",
    action: "nominated",
    target: "TechCrunch",
    time: "2 hours ago"
  },
  {
    id: 2,
    type: "sponsor",
    user: "Microsoft",
    action: "sponsored",
    target: "Technology",
    time: "4 hours ago"
  },
  {
    id: 3,
    type: "vote",
    user: "John Doe",
    action: "voted for",
    target: "Food Blog",
    time: "5 hours ago"
  }
];

const categoryStats = [
  { name: "Technology", value: 35 },
  { name: "Food & Cooking", value: 25 },
  { name: "Travel", value: 20 },
  { name: "Lifestyle", value: 15 },
  { name: "Business", value: 5 }
];

const Dashboard = () => {
  const [requests, setRequests] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await bloggieAPI.getSponsorRequests();
        console.log('Sponsor requests:', data);
        setRequests(Array.isArray(data) ? data : []);
        setError(null);
      } catch (error) {
        console.error('Error fetching requests:', error);
        setError('Failed to load sponsor requests.');
        setRequests([]);
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const handleRequestUpdate = async (requestId, status) => {
    try {
      await bloggieAPI.updateSponsorRequest(requestId, status);
      setRequests(prev => Array.isArray(prev) ? prev.filter(req => req.id !== requestId) : []);
      setToastMessage(`Request ${status} successfully!`);
      setToastType('success');
      setShowToast(true);
    } catch (error) {
      setToastMessage('Error updating request. Please try again.');
      setToastType('error');
      setShowToast(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 font-lora">
            Dashboard
          </h1>
          <p className="mt-2 text-gray-600 font-open-sans">
            Welcome back! Here's what's happening with Blogger Honors.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-open-sans">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1 font-lora">{stat.value}</p>
                </div>
                <div className="text-3xl">{stat.icon}</div>
              </div>
              <div className="mt-4 flex items-center">
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-2">vs last month</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Category Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-sm p-6 mb-8"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6 font-lora">
                Category Distribution
              </h2>
              <div className="space-y-4">
                {categoryStats.map((category, index) => (
                  <div key={category.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700 font-open-sans">{category.name}</span>
                      <span className="text-gray-500 font-open-sans">{category.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${category.value}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-[#3F51B5] h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Sponsor Requests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6 font-lora">
                Sponsor Requests
              </h2>
              {loading ? (
                <div className="text-center text-gray-500 font-open-sans py-8">Loading sponsor requests...</div>
              ) : error ? (
                <div className="text-center text-red-500 font-open-sans py-8">{error}</div>
              ) : (
                <SponsorTable
                  requests={Array.isArray(requests) ? requests : []}
                  onRequestUpdate={handleRequestUpdate}
                />
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6 font-lora">
                Recent Activity
              </h2>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-[#3F51B5] flex items-center justify-center text-white">
                        {activity.type === 'nomination' ? '📝' : activity.type === 'sponsor' ? '💰' : '👍'}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-900 font-open-sans">
                        <span className="font-medium">{activity.user}</span>{' '}
                        {activity.action}{' '}
                        <span className="font-medium">{activity.target}</span>
                      </p>
                      <p className="text-xs text-gray-500 font-open-sans">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6 font-lora">
                Quick Actions
              </h2>
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-4 bg-[#3F51B5] text-white rounded-md hover:bg-[#303F9F] transition-colors font-open-sans"
                >
                  Review Pending Requests
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-4 border border-[#3F51B5] text-[#3F51B5] rounded-md hover:bg-[#3F51B5]/5 transition-colors font-open-sans"
                >
                  View Analytics
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-4 border border-[#3F51B5] text-[#3F51B5] rounded-md hover:bg-[#3F51B5]/5 transition-colors font-open-sans"
                >
                  Export Data
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

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

export default Dashboard; 