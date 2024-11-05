import { create } from 'zustand';
import { mockBookings } from './mockData';
import type { Booking } from '../types';

interface BookingState {
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
  updateBookingStatus: (id: string, status: string) => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  bookings: mockBookings,
  addBooking: (booking) =>
    set((state) => ({
      bookings: [...state.bookings, booking],
    })),
  updateBookingStatus: (id, status) =>
    set((state) => ({
      bookings: state.bookings.map((booking) =>
        booking.id === id ? { ...booking, status } : booking
      ),
    })),
}));