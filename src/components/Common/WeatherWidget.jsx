import React, { useState, useEffect } from 'react';
import { Sun, CloudRain, Cloud, Thermometer, Wind, Droplets } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function WeatherWidget() {
  const { t } = useLanguage();
  const [weather, setWeather] = useState({
    temp: 31,
    humidity: 78,
    wind: 12,
    condition: 'Sunny Intervals',
    icon: 'sunny'
  });

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=14.31&longitude=74.30&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&wind_speed_unit=kmh'
      );
      const data = await response.json();
      if (data && data.current) {
        const code = data.current.weather_code;
        
        let label = 'Sunny Intervals';
        let icon = 'sunny';

        if (code === 0) {
          label = 'Clear Sky';
          icon = 'sunny';
        } else if (code >= 1 && code <= 3) {
          label = 'Partly Cloudy';
          icon = 'cloudy';
        } else if (code === 45 || code === 48) {
          label = 'Foggy';
          icon = 'cloudy';
        } else if (code >= 51 && code <= 55) {
          label = 'Light Drizzle';
          icon = 'rain';
        } else if (code >= 61 && code <= 65) {
          label = 'Raining';
          icon = 'rain';
        } else if (code >= 80 && code <= 82) {
          label = 'Rain Showers';
          icon = 'rain';
        } else if (code >= 95 && code <= 99) {
          label = 'Thunderstorms';
          icon = 'rain';
        }

        setWeather({
          temp: Math.round(data.current.temperature_2m),
          humidity: Math.round(data.current.relative_humidity_2m),
          wind: Math.round(data.current.wind_speed_10m),
          condition: label,
          icon: icon
        });
      }
    } catch (error) {
      console.error("Failed fetching live weather for Ankola:", error);
    }
  };

  useEffect(() => {
    fetchWeather(); // Fetch live data on mount

    // Refresh every 5 minutes to keep it live
    const interval = setInterval(fetchWeather, 300000);
    return () => clearInterval(interval);
  }, []);

  const renderIcon = () => {
    switch (weather.icon) {
      case 'rain':
        return <CloudRain className="w-10 h-10 text-sky-400 animate-bounce" />;
      case 'cloudy':
        return <Cloud className="w-10 h-10 text-slate-400 animate-pulse" />;
      default:
        return <Sun className="w-10 h-10 text-gold animate-spin-slow" />;
    }
  };

  return (
    <div className="glass-card border border-gold/25 p-5 rounded-2xl shadow-xl flex items-center justify-between gap-6 max-w-sm w-full font-sans">
      <div className="space-y-1">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          {t('weatherTitle')}
        </h4>
        <div className="flex items-baseline space-x-1">
          <span className="text-3xl font-bold font-serif text-slate-800">{weather.temp}</span>
          <span className="text-lg font-semibold text-gold">°C</span>
        </div>
        <p className="text-xs font-medium text-slate-600">{weather.condition}</p>
      </div>

      <div className="flex flex-col items-center">
        {renderIcon()}
      </div>

      <div className="border-l border-slate-200 pl-4 space-y-1.5 text-xs text-slate-500">
        <div className="flex items-center space-x-1">
          <Droplets className="w-3.5 h-3.5 text-sky-500" />
          <span>Hum: {weather.humidity}%</span>
        </div>
        <div className="flex items-center space-x-1">
          <Wind className="w-3.5 h-3.5 text-teal-500" />
          <span>Wind: {weather.wind} km/h</span>
        </div>
      </div>
    </div>
  );
}
