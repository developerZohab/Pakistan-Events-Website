import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Event } from '../types';
import { getEventImage } from '../data/eventImages';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Link to={`/event/${event.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer">
        {/* Event Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={getEventImage(event.subject)} 
            alt={event.subject}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-800 dark:text-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
            {format(new Date(event.startDate), 'MMM dd')}
          </div>
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 dark:from-gray-700 dark:to-gray-800 p-6 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold mb-1 transform group-hover:translate-x-2 transition-transform duration-300">{event.subject}</h3>
              <p className="text-green-100 text-lg" dir="rtl">{event.subjectUrdu}</p>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90">
                {format(new Date(event.startDate), 'MMM dd, yyyy')}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 dark:text-white">
          {/* Event Details */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 transform hover:translate-x-2 transition-transform duration-300">
              <Calendar className="h-4 w-4" />
              <span>{format(new Date(event.startDate), 'EEEE, MMMM dd, yyyy')}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 transform hover:translate-x-2 transition-transform duration-300">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3">{event.description}</p>

          {/* Click to view more indicator */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
            <div className="text-center">
              <span className="text-green-600 dark:text-green-400 font-medium text-sm animate-pulse">
                Click to view details →
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;