import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Calendar, Home, LogOut, User } from 'lucide-react';

export function Navigation() {
  const { user, isAuthenticated } = useAuthStore();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Calendar className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">FullyBooked</span>
          </Link>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-600 hover:text-gray-900 flex items-center space-x-1"
                >
                  <Home className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
                <div className="flex items-center space-x-2 text-gray-600">
                  <User className="h-5 w-5" />
                  <span>{user?.name}</span>
                </div>
                <button className="text-red-600 hover:text-red-700 flex items-center space-x-1">
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}