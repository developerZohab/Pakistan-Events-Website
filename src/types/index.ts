export interface Event {
  id: string;
  subject: string;
  subjectUrdu: string;
  startDate: string;
  endDate: string;
  allDayEvent: boolean;
  description: string;
  location: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

export interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
}