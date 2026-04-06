import { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeather = async () => {
    const trimmedCity = city.trim();

    if (!trimmedCity) {
      setError("Enter city name");
      setWeather(null);
      return;
    }

    if (!API_KEY) {
      setError("Weather API key is missing in .env");
      setWeather(null);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          trimmedCity
        )}&appid=${API_KEY}&units=metric`
      );

      const data = await res.json();

      if (!res.ok) {
        const message =
          data?.message === "city not found"
            ? "City not found"
            : data?.message || "Unable to fetch weather";

        setError(message);
        setWeather(null);
        return;
      }

      setWeather(data);
    } catch (err) {
      setError("Something went wrong while fetching weather");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2>Weather</h2>

        <input
          style={input}
          placeholder="Enter city or country"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") getWeather();
          }}
        />

        <button style={btn} onClick={getWeather} disabled={loading}>
          {loading ? "Loading..." : "Get Weather"}
        </button>

        {error && <p style={{ color: "#ffd6d6" }}>{error}</p>}

        {weather && (
          <div style={{ marginTop: "20px" }}>
            <h3>{weather.name}</h3>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} m/s</p>
            <p>{weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

/* SAME UI STYLES */
const container = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const card = {
  width: "100%",
  maxWidth: "400px",
  padding: "30px",
  borderRadius: "20px",
  backdropFilter: "blur(15px)",
  background: "linear-gradient(180deg, var(--surfaceStrong), var(--surfaceSoft))",
  border: "1px solid var(--line)",
  textAlign: "center",
};

const input = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "10px",
  border: "1px solid var(--inputBorder)",
  background: "var(--inputBg)",
  color: "var(--ink)",
};

const btn = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "none",
  background: "linear-gradient(135deg, var(--accent), var(--accentStrong))",
  color: "white",
  cursor: "pointer",
};

export default Weather;
