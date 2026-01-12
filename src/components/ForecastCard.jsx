export default function ForecastCard({ day, temp, condition, icon: Icon }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
      <p className="text-white/80 font-medium mb-2">{day}</p>
      <Icon className="mx-auto text-white mb-2" size={32} />
      <p className="text-2xl font-bold text-white mb-1">{temp}°</p>
      <p className="text-white/70 text-sm">{condition}</p>
    </div>
  );
}
