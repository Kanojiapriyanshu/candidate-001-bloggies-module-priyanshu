import { motion } from 'framer-motion';
import { bloggieAPI } from '../api/bloggieAPI';

const SponsorTable = ({ requests, onRequestUpdate }) => {
  const handleApprove = async (requestId) => {
    try {
      await bloggieAPI.approveSponsorRequest(requestId);
      onRequestUpdate();
    } catch (error) {
      console.error('Error approving request:', error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-open-sans">
              ID
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-open-sans">
              Category
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-open-sans">
              Partner
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-open-sans">
              Amount
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-open-sans">
              Status
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-open-sans">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {requests.map((request, index) => (
            <motion.tr
              key={request.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-open-sans">
                #{request.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-open-sans">
                {request.catId}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-open-sans">
                {request.partner}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-open-sans">
                <span className="font-medium text-[#3F51B5]">
                  ${request.amount}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full font-open-sans ${
                    request.status === 'approved'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {request.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {request.status === 'pending' && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleApprove(request.id)}
                    className="px-4 py-2 bg-[#3F51B5] text-white rounded-md hover:bg-[#303F9F] transition-all duration-300 shadow-sm font-open-sans"
                  >
                    Approve
                  </motion.button>
                )}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SponsorTable; 