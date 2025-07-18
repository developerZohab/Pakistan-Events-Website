import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Home, Settings, LogOut, User, Moon, Sun } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-green-600 to-green-700 dark:from-gray-800 dark:to-gray-900 shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-green-100 transition-all duration-300 transform hover:scale-105">
            <Calendar className="h-8 w-8 animate-pulse" />
            <div>
              <h1 className="text-xl font-bold">Pakistan Events</h1>
              <p className="text-xs text-green-100">پاکستان ایونٹس</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                isActive('/') 
                  ? 'bg-white text-green-700 dark:bg-gray-700 dark:text-white' 
                  : 'text-white hover:bg-green-500 dark:hover:bg-gray-700'
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            
            <Link
              to="/events"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                isActive('/events') 
                  ? 'bg-white text-green-700 dark:bg-gray-700 dark:text-white' 
                  : 'text-white hover:bg-green-500 dark:hover:bg-gray-700'
              }`}
            >
              <Calendar className="h-4 w-4" />
              <span>Events</span>
            </Link>

            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                      isActive('/admin') 
                        ? 'bg-white text-green-700 dark:bg-gray-700 dark:text-white' 
                        : 'text-white hover:bg-green-500 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Settings className="h-4 w-4" />
                    <span>Admin Panel</span>
                  </Link>
                )}
                
                <div className="flex items-center space-x-4">
                  {/* Dark Mode Toggle */}
                  <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-md text-white hover:bg-green-500 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                    title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                  >
                    {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </button>
                  
                  <div className="flex items-center space-x-2 text-white">
                    <User className="h-4 w-4" />
                    <span className="text-sm">{user.name}</span>
                  </div>
                  <button
                    onClick={logout}
                    className="flex items-center space-x-1 px-3 py-2 rounded-md text-white hover:bg-green-500 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <Link
                to="/auth"
                className="flex items-center space-x-1 px-3 py-2 rounded-md bg-white text-green-700 hover:bg-green-50 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-white hover:bg-green-500 dark:hover:bg-gray-700 transition-all duration-300 mr-2"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link
              to="/auth"
              className="text-white hover:text-green-100 transition-all duration-300"
            >
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;