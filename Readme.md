# 🌤️ Weather Dashboard

A modern, responsive weather dashboard built with React and Tailwind CSS featuring real-time weather data, 5-day forecasts, city search, and stunning glassmorphism UI with smooth animations.

![Weather Dashboard](https://img.shields.io/badge/React-18.0+-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-38B2AC.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

- **🔍 City Search**: Search for weather information in any city worldwide
- **🌡️ Real-Time Weather**: Display current temperature, feels-like temperature, and weather conditions
- **📊 Weather Metrics**: View detailed information including:
  - Wind speed
  - Humidity levels
  - Visibility distance
  - Atmospheric pressure
- **📅 5-Day Forecast**: Extended weather forecast with daily predictions
- **⏰ Live Clock**: Real-time clock with date display
- **🎨 Glassmorphism UI**: Modern design with frosted glass effects and backdrop blur
- **📱 Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **✨ Smooth Animations**: Hover effects, transitions, and scale transforms
- **🎯 Interactive Elements**: Click and keyboard navigation support

## 🚀 Demo

The app includes demo data, so it works immediately without API configuration. Search for any city to see the weather dashboard in action!

## 🛠️ Tech Stack

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Weather API** - Real-time weather data (WeatherAPI.com)

## 📁 Project Structure

```
weather-dashboard/
├── src/
│   ├── components/
│   │   ├── WeatherCard.jsx      # Individual weather metric cards
│   │   └── ForecastCard.jsx     # Daily forecast cards
│   ├── utils/
│   │   └── weatherIcons.js      # Weather icon mapping utility
│   ├── App.jsx                  # Main dashboard component
│   └── index.js                 # Entry point
├── public/
│   └── index.html
├── package.json
└── README.md
```

## 🎯 Component Overview

### **App.jsx**
Main weather dashboard component that handles:
- State management for city search and weather data
- API calls to fetch weather information
- Real-time clock updates
- Rendering of all child components

### **WeatherCard.jsx**
Reusable card component for displaying individual weather metrics:
- Props: `title`, `value`, `icon`, `unit`
- Features glassmorphism design with hover effects
- Used for wind speed, humidity, visibility, and pressure

### **ForecastCard.jsx**
Daily forecast display component:
- Props: `day`, `temp`, `condition`, `icon`
- Shows day name, weather icon, temperature, and condition
- Responsive grid layout

### **weatherIcons.js**
Utility function that maps weather conditions to appropriate icons:
- Returns different icons based on weather conditions
- Supports rain, clouds, snow, drizzle, and sunny weather

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Install required packages**
```bash
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

4. **Configure Tailwind CSS**

Update `tailwind.config.js`:
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

5. **Add Tailwind directives to your CSS**

In `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. **Start the development server**
```bash
npm start
```

The app will open at `http://localhost:3000`

## 🔑 API Configuration (Optional)

The app works with demo data by default. To use real weather data:

1. Get a free API key from [WeatherAPI.com](https://www.weatherapi.com/)
2. Replace `demo` in the API URL with your actual API key:

```javascript
const response = await fetch(
  `https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=${cityName}&days=5&aqi=no`
);
```

## 🎨 Customization

### Color Scheme
The dashboard uses a gradient background. You can customize it in `App.jsx`:
```javascript
className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500"
```

### Card Styling
Modify the glassmorphism effect in component classes:
```javascript
className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
```

### Weather Icons
Add more weather conditions in `utils/weatherIcons.js`:
```javascript
if (cond.includes('your-condition')) return YourIcon;
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌟 Key Features Explained

### Glassmorphism Design
- Uses `backdrop-blur` for frosted glass effect
- Semi-transparent backgrounds with `bg-white/15`
- Subtle borders with `border-white/20`

### Smooth Animations
- Hover scale effects: `hover:scale-105`
- Transition duration: `duration-300`
- Transform animations on interactive elements

### Real-Time Updates
- Clock updates every second using `setInterval`
- Weather data fetched on city change
- Automatic re-rendering with React state

## 🐛 Troubleshooting

### API Issues
- Check if you're using a valid API key
- Verify the city name spelling
- Check network connectivity

### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check if all required packages are installed
- Clear browser cache

### Performance
- The app includes demo data to prevent excessive API calls
- Rate limiting is handled by the API provider

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Created with ❤️ by [Your Name]

## 🙏 Acknowledgments

- [WeatherAPI.com](https://www.weatherapi.com/) for weather data
- [Lucide Icons](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for styling utilities
- [React](https://reactjs.org/) for the frontend framework

## 📧 Contact

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🔮 Future Enhancements

- [ ] Add temperature unit toggle (Celsius/Fahrenheit)
- [ ] Implement geolocation for automatic city detection
- [ ] Add hourly forecast
- [ ] Include weather alerts and warnings
- [ ] Add dark/light mode toggle
- [ ] Implement weather maps integration
- [ ] Add historical weather data
- [ ] Include air quality index
- [ ] Add multiple city comparison
- [ ] Implement favorite cities feature

---

⭐ If you found this project helpful, please give it a star!

Made with 💙 and ☕