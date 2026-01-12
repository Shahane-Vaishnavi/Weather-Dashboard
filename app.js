import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
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

// WeatherCard Component
const WeatherCard = ({ title, value, icon: Icon, unit }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
    <div className="flex items-center justify-between mb-3">
      <span className="text-white/70 text-sm font-medium">{title}</span>
      <Icon className="text-white/90" size={24} />
    </div>
    <div className="text-3xl font-bold text-white">
      {value}
      <span className="text-lg ml-1 text-white/80">{unit}</span>
    </div>
  </div>
);

// ForecastCard Component
const ForecastCard = ({ day, temp, condition, icon: Icon }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
    <p className="text-white/80 font-medium mb-2">{day}</p>
    <Icon className="mx-auto text-white mb-2" size={32} />
    <p className="text-2xl font-bold text-white mb-1">{temp}°</p>
    <p className="text-white/70 text-sm">{condition}</p>
  </div>
);

// Weather Dashboard Component
function WeatherDashboard() {
  /* --- your complete React code stays here --- */
}

ReactDOM.createRoot(document.getElementById("root")).render(<WeatherDashboard />);
