import React, { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  Wind,
  Droplets,
  Eye,
  Gauge,
  Cloud,
  CloudRain,
  Sun,
  CloudSnow,
  CloudDrizzle,
} from "lucide-react";
import WeatherCard from "./components/WeatherCard.jsx";
import ForecastCard from "./components/ForecastCard.jsx";

export default function App() {
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("London");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const getWeatherIcon = (condition) => {
    const cond = condition.toLowerCase();
    if (cond.includes("rain")) return CloudRain;
    if (cond.includes("cloud")) return Cloud;
    if (cond.includes("snow")) return CloudSnow;
    if (cond.includes("drizzle")) return CloudDrizzle;
    return Sun;
  };

  const fetchWeather = async (cityName) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=demo&q=${cityName}&days=5&aqi=no`
      );
      const data = await response.json();

      if (data.error) {
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeather(searchCity);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, [searchCity]);

  const handleSearch = () => {
    if (city.trim()) {
      setSearchCity(city);
      setCity("");
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
            Weather Dashboard
          </h1>
          <p className="text-white/80 text-lg">
            {currentTime.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-white/90 text-2xl font-semibold mt-1">
            {currentTime.toLocaleTimeString("en-US")}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8 relative">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search for a city..."
            className="w-full px-6 py-4 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/30 placeholder-white/60 focus:outline-none text-lg"
          />
          <button
            onClick={handleSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-purple-600 p-3 rounded-full"
          >
            <Search size={24} />
          </button>
        </div>

        {/* Weather Data */}
        {loading ? (
          <div className="text-center text-white text-2xl">Loading...</div>
        ) : weather ? (
          <div className="space-y-8">
            {/* Current Weather */}
            <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="text-white" size={28} />
                <div>
                  <h2 className="text-4xl font-bold text-white">
                    {weather.location.name}
                  </h2>
                  <p className="text-white/70 text-lg">
                    {weather.location.country}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                    <img
                      src={weather.current.condition.icon}
                      alt="weather"
                      className="w-24 h-24"
                    />
                    <div className="text-8xl font-bold text-white">
                      {Math.round(weather.current.temp_c)}°
                    </div>
                  </div>
                  <p className="text-2xl text-white/90 mb-2">
                    {weather.current.condition.text}
                  </p>
                  <p className="text-white/70 text-lg">
                    Feels like {Math.round(weather.current.feelslike_c)}°C
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <WeatherCard
                    title="Wind Speed"
                    value={weather.current.wind_kph}
                    icon={Wind}
                    unit="km/h"
                  />
                  <WeatherCard
                    title="Humidity"
                    value={weather.current.humidity}
                    icon={Droplets}
                    unit="%"
                  />
                  <WeatherCard
                    title="Visibility"
                    value={weather.current.vis_km}
                    icon={Eye}
                    unit="km"
                  />
                  <WeatherCard
                    title="Pressure"
                    value={weather.current.pressure_mb}
                    icon={Gauge}
                    unit="mb"
                  />
                </div>
              </div>
            </div>

            {/* 5-Day Forecast */}
            <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-6">
                5-Day Forecast
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {weather.forecast.forecastday.map((day, index) => {
                  const WeatherIcon = getWeatherIcon(day.day.condition.text);
                  return (
                    <ForecastCard
                      key={index}
                      day={new Date(day.date).toLocaleDateString("en-US", {
                        weekday: "short",
                      })}
                      temp={Math.round(day.day.maxtemp_c)}
                      condition={day.day.condition.text}
                      icon={WeatherIcon}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
