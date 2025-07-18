import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Star, Users, Globe } from 'lucide-react';
import { pakistaniEvents } from '../data/events';
import EventCard from '../components/EventCard';

const Home: React.FC = () => {
  // Get next 3 upcoming events
  const upcomingEvents = pakistaniEvents
    .filter(event => new Date(event.startDate) > new Date())
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white rounded-full animate-float-delayed"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">
            Welcome to Pakistan Events
          </h1>
          <p className="text-xl mb-2 text-green-100 animate-fade-in-up" dir="rtl" style={{animationDelay: '0.2s'}}>
            پاکستان ایونٹس میں خوش آمدید
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-green-100 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Discover and celebrate Pakistan's rich cultural heritage through our comprehensive event calendar. 
            Stay updated with national holidays, religious festivals, and cultural celebrations.
          </p>
          <Link
            to="/events"
            className="inline-flex items-center space-x-2 bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in-up"
            style={{animationDelay: '0.6s'}}
          >
            <Calendar className="h-5 w-5" />
            <span>Explore All Events</span>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white animate-fade-in-up">
            Why Choose Pakistan Events?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up group">
              <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Comprehensive Calendar</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Complete listing of all Pakistani national holidays, religious festivals, and cultural events with accurate dates.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up group" style={{animationDelay: '0.2s'}}>
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Real-time Updates</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Live countdown timers, weather forecasts, and instant notifications to keep you informed about upcoming events.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up group" style={{animationDelay: '0.4s'}}>
              <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Community Focused</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Share events with friends and family through social media integration and calendar synchronization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white animate-fade-in-up">Upcoming Events</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Don't miss out on Pakistan's most important celebrations. Here are the next events coming up.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger-in">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/events"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in-up"
            >
              <Globe className="h-5 w-5" />
              <span>View All Events</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold text-green-700 dark:text-green-400 mb-2 animate-count-up">{pakistaniEvents.length}</div>
              <div className="text-gray-600 dark:text-gray-300">Total Events</div>
            </div>
            <div className="animate-fade-in-up transform hover:scale-110 transition-transform duration-300" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl font-bold text-green-700 dark:text-green-400 mb-2 animate-count-up">12</div>
              <div className="text-gray-600 dark:text-gray-300">Months Coverage</div>
            </div>
            <div className="animate-fade-in-up transform hover:scale-110 transition-transform duration-300" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold text-green-700 dark:text-green-400 mb-2 animate-count-up">100%</div>
              <div className="text-gray-600 dark:text-gray-300">Accurate Dates</div>
            </div>
            <div className="animate-fade-in-up transform hover:scale-110 transition-transform duration-300" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl font-bold text-green-700 dark:text-green-400 mb-2 animate-count-up">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">Live Updates</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;