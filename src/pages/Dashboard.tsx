import React from 'react';
import { useAuthStore } from '../store/authStore';
import {
  Calendar,
  Clock,
  Users,
  CheckCircle,
  XCircle,
  AlertCircle,
} from 'lucide-react';

export function Dashboard() {
  const { user } = useAuthStore();

  if (!user) {
    return <div>Please login to access the dashboard</div>;
  }

  const bookings = [
    {
      id: '1',
      customerName: 'John Doe',
      date: '2024-03-10',
      time: '19:00',
      status: 'Pending',
      guests: 4,
    },
    {
      id: '2',
      customerName: 'Jane Smith',
      date: '2024-03-10',
      time: '20:00',
      status: 'Accepted',
      guests: 2,
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Pending':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'Accepted':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'Cancelled':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <header className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user.name}
        </h1>
        <p className="text-gray-600">Here's your booking overview for today</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Today's Bookings</h3>
            <Calendar className="h-8 w-8 text-indigo-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Pending Review</h3>
            <Clock className="h-8 w-8 text-yellow-500" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-2">3</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Total Guests</h3>
            <Users className="h-8 w-8 text-green-500" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-2">45</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Recent Bookings</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Guests
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {booking.customerName}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{booking.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{booking.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{booking.guests}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(booking.status)}
                      <span className="ml-2 text-sm text-gray-900">
                        {booking.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                      View Details
                    </button>
                    {booking.status === 'Pending' && (
                      <>
                        <button className="text-green-600 hover:text-green-900 mr-4">
                          Accept
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          Decline
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}