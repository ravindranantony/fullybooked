// Mock data for development
export const mockRestaurants = [
  {
    id: '1',
    name: "L'Artisan",
    location: '123 French Quarter, Paris',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    cuisine: 'French',
    rating: 4.8,
    bookingLink: 'lartisan',
  },
  {
    id: '2',
    name: 'Sakura',
    location: '456 Cherry Blossom St, Tokyo',
    image: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    cuisine: 'Japanese',
    rating: 4.9,
    bookingLink: 'sakura',
  },
  {
    id: '3',
    name: 'Il Posto',
    location: '789 Via Roma, Rome',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    cuisine: 'Italian',
    rating: 4.7,
    bookingLink: 'il-posto',
  },
];

export const mockBookings = [
  {
    id: '1',
    restaurantId: '1',
    customerName: 'John Doe',
    date: '2024-03-10',
    time: '19:00',
    status: 'Pending',
    guests: 4,
  },
  {
    id: '2',
    restaurantId: '2',
    customerName: 'Jane Smith',
    date: '2024-03-10',
    time: '20:00',
    status: 'Accepted',
    guests: 2,
  },
];

// Mock user data
export const mockUsers = {
  superadmin: {
    id: '1',
    email: 'admin@fullybooked.com',
    password: 'admin123',
    name: 'Super Admin',
    role: 'SuperAdmin',
  },
  restaurantadmin: {
    id: '2',
    email: 'restaurant@fullybooked.com',
    password: 'restaurant123',
    name: 'Restaurant Manager',
    role: 'RestaurantAdmin',
  },
  user: {
    id: '3',
    email: 'user@example.com',
    password: 'user123',
    name: 'Regular User',
    role: 'User',
  },
};