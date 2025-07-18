import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, ExternalLink, Plus, Facebook, Twitter, Instagram, ArrowLeft } from 'lucide-react';
import { pakistaniEvents } from '../data/events';
import { getEventImage } from '../data/eventImages';
import CountdownTimer from '../components/CountdownTimer';
import WeatherWidget from '../components/WeatherWidget';
import { format } from 'date-fns';

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = pakistaniEvents.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Event Not Found</h1>
          <Link to="/events" className="text-green-600 hover:text-green-700 dark:text-green-400">
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCalendar = () => {
    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.subject)}&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  const handleViewOnMap = () => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`;
    window.open(mapUrl, '_blank');
  };

  const shareOnSocial = (platform: string) => {
    const text = `Check out ${event.subject} - ${event.description}`;
    const url = window.location.href;
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'instagram':
        navigator.clipboard.writeText(`${text} ${url}`);
        alert('Link copied to clipboard! You can now paste it on Instagram.');
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link 
          to="/events" 
          className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors duration-300 mb-6 transform hover:translate-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Events</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={getEventImage(event.subject)} 
          alt={event.subject}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 animate-fade-in-up">
              {event.subject}
            </h1>
            <p className="text-2xl text-green-100 mb-4 animate-fade-in-up" dir="rtl" style={{animationDelay: '0.2s'}}>
              {event.subjectUrdu}
            </p>
            <div className="flex items-center space-x-4 text-white animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{format(new Date(event.startDate), 'EEEE, MMMM dd, yyyy')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-fade-in-up">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">About This Event</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {event.description}
              </p>
            </div>

            {/* Event Details */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Event Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Start Date</h3>
                    <p className="text-gray-600 dark:text-gray-300">{format(new Date(event.startDate), 'PPP')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">End Date</h3>
                    <p className="text-gray-600 dark:text-gray-300">{format(new Date(event.endDate), 'PPP')}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">{event.location}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Type</h3>
                    <p className="text-gray-600 dark:text-gray-300">{event.allDayEvent ? 'All Day Event' : 'Timed Event'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Quick Actions</h2>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleAddToCalendar}
                  className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <Plus className="h-5 w-5" />
                  <span>Add to Calendar</span>
                </button>
                
                <button
                  onClick={handleViewOnMap}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>View on Map</span>
                </button>
              </div>
            </div>

            {/* Social Media Sharing */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Share This Event</h2>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => shareOnSocial('facebook')}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                  title="Share on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                  <span>Facebook</span>
                </button>
                <button
                  onClick={() => shareOnSocial('twitter')}
                  className="flex items-center space-x-2 bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                  title="Share on Twitter"
                >
                  <Twitter className="h-5 w-5" />
                  <span>Twitter</span>
                </button>
                <button
                  onClick={() => shareOnSocial('instagram')}
                  className="flex items-center space-x-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                  title="Share on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Countdown Timer */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <CountdownTimer targetDate={event.startDate} eventName={event.subject} />
            </div>

            {/* Weather Widget */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <WeatherWidget eventDate={event.startDate} location={event.location} />
            </div>

            {/* Related Events */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Related Events</h3>
              <div className="space-y-3">
                {pakistaniEvents
                  .filter(e => e.id !== event.id && e.description === event.description)
                  .slice(0, 3)
                  .map(relatedEvent => (
                    <Link
                      key={relatedEvent.id}
                      to={`/event/${relatedEvent.id}`}
                      className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      <h4 className="font-medium text-gray-800 dark:text-white">{relatedEvent.subject}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{format(new Date(relatedEvent.startDate), 'MMM dd, yyyy')}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;