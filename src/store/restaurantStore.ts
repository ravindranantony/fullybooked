import { create } from 'zustand';
import { mockRestaurants } from './mockData';
import type { Restaurant } from '../types';

interface RestaurantState {
  restaurants: Restaurant[];
  getRestaurantByLink: (link: string) => Restaurant | undefined;
}

export const useRestaurantStore = create<RestaurantState>((set, get) => ({
  restaurants: mockRestaurants,
  getRestaurantByLink: (link) => get().restaurants.find((r) => r.bookingLink === link),
}));