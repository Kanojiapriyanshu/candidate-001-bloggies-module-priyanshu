import { nominations, sponsorRequests } from '../mock/mockData';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const bloggieAPI = {
  // Get sponsor requests
  getSponsorRequests: async () => {
    await delay(500);
    return { data: sponsorRequests };
  },

  // Submit nomination
  submitNomination: async (nomination) => {
    await delay(500);
    const newNomination = {
      id: nominations.length + 1,
      ...nomination,
      votes: 0
    };
    nominations.push(newNomination);
    return { data: newNomination };
  },

  // Submit vote
  submitVote: async (nominationId, email) => {
    await delay(500);
    const nomination = nominations.find(n => n.id === nominationId);
    if (nomination) {
      nomination.votes += 1;
      return { data: nomination };
    }
    throw new Error('Nomination not found');
  },

  // Approve sponsor request
  approveSponsorRequest: async (requestId) => {
    await delay(500);
    const request = sponsorRequests.find(r => r.id === requestId);
    if (request) {
      request.status = 'approved';
      return { data: request };
    }
    throw new Error('Request not found');
  }
}; 