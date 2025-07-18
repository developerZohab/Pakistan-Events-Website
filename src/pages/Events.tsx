import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar } from 'lucide-react';
import { pakistaniEvents } from '../data/events';
import EventCard from '../components/EventCard';

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const filteredAndSortedEvents = useMemo(() => {
    let filtered = pakistaniEvents.filter(event => {
      const matchesSearch = event.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.subjectUrdu.includes(searchTerm) ||
                           event.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (filterType === 'all') return matchesSearch;
      if (filterType === 'upcoming') return matchesSearch && new Date(event.startDate) > new Date();
      if (filterType === 'past') return matchesSearch && new Date(event.startDate) <= new Date();
      if (filterType === 'national') return matchesSearch && event.description.includes('National');
      if (filterType === 'religious') return matchesSearch && event.description.includes('Religious');
      
      return matchesSearch;
    });

    // Sort events
    filtered.sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
      } else if (sortBy === 'name') {
        return a.subject.localeCompare(b.subject);
      }
      return 0;
    });

    return filtered;
  }, [searchTerm, filterType, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2 animate-fade-in-up">Pakistan Events Calendar</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg animate-fade-in-up" dir="rtl" style={{animationDelay: '0.2s'}}>پاکستان ایونٹس کیلنڈر</p>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Explore all Pakistani national holidays, religious festivals, and cultural celebrations throughout the year.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 animate-pulse" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 animate-pulse" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none transition-all duration-300"
              >
                <option value="all">All Events</option>
                <option value="upcoming">Upcoming</option>
                <option value="past">Past</option>
                <option value="national">National Holidays</option>
                <option value="religious">Religious Events</option>
              </select>
            </div>

            {/* Sort */}
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 animate-pulse" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none transition-all duration-300"
              >
                <option value="date">Sort by Date</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300 animate-fade-in-up">
            Showing {filteredAndSortedEvents.length} of {pakistaniEvents.length} events
          </p>
        </div>

        {/* Events Grid */}
        {filteredAndSortedEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger-in">
            {filteredAndSortedEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 animate-fade-in-up">
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">No events found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;