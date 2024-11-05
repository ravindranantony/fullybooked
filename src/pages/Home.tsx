import React from 'react';
import { ChefHat, Clock, CalendarCheck, Star } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Welcome to FullyBooked
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The smart way to manage restaurant bookings. Streamlined reservations for
          both restaurants and diners.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: ChefHat,
            title: 'Restaurant Management',
            description: 'Effortlessly manage your restaurant bookings',
          },
          {
            icon: Clock,
            title: 'Real-time Updates',
            description: 'Instant notifications for new bookings',
          },
          {
            icon: CalendarCheck,
            title: 'Easy Booking',
            description: 'Simple and quick reservation process',
          },
          {
            icon: Star,
            title: 'Customer First',
            description: 'Enhanced dining experience for customers',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <feature.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Restaurants
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "L'Artisan",
              image:
                'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              cuisine: 'French',
              rating: 4.8,
            },
            {
              name: 'Sakura',
              image:
                'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              cuisine: 'Japanese',
              rating: 4.9,
            },
            {
              name: 'Il Posto',
              image:
                'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              cuisine: 'Italian',
              rating: 4.7,
            },
          ].map((restaurant, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-transform hover:scale-105"
            >
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {restaurant.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{restaurant.cuisine}</span>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="text-gray-700">{restaurant.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}