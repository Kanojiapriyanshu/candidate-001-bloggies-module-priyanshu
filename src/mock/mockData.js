export const blogCategories = [
  { id: 1, name: 'Technology' },
  { id: 2, name: 'Lifestyle' },
  { id: 3, name: 'Food' },
  { id: 4, name: 'Travel' },
  { id: 5, name: 'Fashion' }
];

export const nominations = [
  {
    id: 1,
    name: 'Tech Insights',
    email: 'tech@example.com',
    categoryId: 1,
    blogUrl: 'https://techinsights.com',
    votes: 42
  },
  {
    id: 2,
    name: 'Food Adventures',
    email: 'food@example.com',
    categoryId: 3,
    blogUrl: 'https://foodadventures.com',
    votes: 28
  }
];

export const sponsorRequests = [
  {
    id: 1,
    catId: 1,
    partner: 'TechCorp',
    amount: 5000,
    status: 'pending'
  },
  {
    id: 2,
    catId: 3,
    partner: 'FoodNetwork',
    amount: 3000,
    status: 'approved'
  }
]; 