import { Wind, Droplets, Eye, Gauge } from "lucide-react";

export default function WeatherCard({ title, value, icon: Icon, unit }) {
  return (
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
}
