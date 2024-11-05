import React from 'react';
import { useAuthStore } from '../store/authStore';
import { useRestaurantStore } from '../store/restaurantStore';
import { useBookingStore } from '../store/bookingStore';
import { Calendar, Users, MapPin } from 'lucide-react';

function Dashboard() {
  const user = useAuthStore((state) => state.user);
  const restaurants = useRestaurantStore((state) => state.restaurants);
  const bookings = useBookingStore((state) => state.bookings);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome, {user?.name}
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your restaurant bookings and settings
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="h-48 w-full relative">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">
                {restaurant.name}
              </h3>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <MapPin className="flex-shrink-0 mr-1.5 h-5 w-5" />
                {restaurant.location}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    {
                      bookings.filter((b) => b.restaurantId === restaurant.id)
                        .length
                    }{' '}
                    bookings
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500">Today</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6">
              <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;