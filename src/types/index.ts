export type UserRole = 'SuperAdmin' | 'RestaurantAdmin' | 'User';

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: UserRole;
}

export interface Restaurant {
  id: string;
  name: string;
  location: string;
  image: string;
  cuisine: string;
  rating: number;
  bookingLink: string;
}

export interface Booking {
  id: string;
  restaurantId: string;
  customerName: string;
  date: string;
  time: string;
  status: 'Pending' | 'Accepted' | 'Cancelled';
  guests: number;
}