import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Wind, Droplets } from 'lucide-react';
import { WeatherData } from '../types';

interface WeatherWidgetProps {
  eventDate: string;
  location: string;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ eventDate, location }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate weather API call with mock data
    const fetchWeather = async () => {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock weather data based on event date
      const mockWeather: WeatherData = {
        temperature: Math.floor(Math.random() * 20) + 15, // 15-35°C
        condition: ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain'][Math.floor(Math.random() * 4)],
        humidity: Math.floor(Math.random() * 40) + 40, // 40-80%
        windSpeed: Math.floor(Math.random() * 15) + 5 // 5-20 km/h
      };
      
      setWeather(mockWeather);
      setLoading(false);
    };

    fetchWeather();
  }, [eventDate, location]);

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'Sunny':
        return <Sun className="h-8 w-8 text-yellow-500" />;
      case 'Partly Cloudy':
        return <Cloud className="h-8 w-8 text-gray-500" />;
      case 'Cloudy':
        return <Cloud className="h-8 w-8 text-gray-600" />;
      case 'Light Rain':
        return <CloudRain className="h-8 w-8 text-blue-500" />;
      default:
        return <Sun className="h-8 w-8 text-yellow-500" />;
    }
  };

  if (loading) {
    return (
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
        <div className="animate-pulse">
          <div className="h-4 bg-blue-200 dark:bg-blue-700 rounded w-3/4 mb-2"></div>
          <div className="h-8 bg-blue-200 dark:bg-blue-700 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center">
        <span className="animate-pulse mr-2">🌤️</span>
        Weather Forecast
      </h3>
      
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="transform hover:scale-125 transition-transform duration-300">
            {getWeatherIcon(weather.condition)}
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-400 animate-pulse">{weather.temperature}°C</div>
            <div className="text-sm text-blue-600 dark:text-blue-500">{weather.condition}</div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center space-x-2 transform hover:translate-x-2 transition-transform duration-300">
          <Droplets className="h-4 w-4 text-blue-500" />
          <span className="text-blue-700 dark:text-blue-400">Humidity: {weather.humidity}%</span>
        </div>
        <div className="flex items-center space-x-2 transform hover:translate-x-2 transition-transform duration-300">
          <Wind className="h-4 w-4 text-blue-500" />
          <span className="text-blue-700 dark:text-blue-400">Wind: {weather.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;