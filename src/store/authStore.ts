import { create } from 'zustand';
import { mockUsers } from './mockData';
import type { User } from '../types';

interface AuthState {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (email, password) => {
    const user = Object.values(mockUsers).find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      set({ user });
      return true;
    }
    return false;
  },
  logout: () => set({ user: null }),
}));