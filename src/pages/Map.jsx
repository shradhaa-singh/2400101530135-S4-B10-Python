import { useState } from "react";

const Map = () => {
  const [place, setPlace] = useState("");
  const [info, setInfo] = useState(null);

  const searchPlace = async () => {
    if (!place) return alert("Enter city or country");

    try {
      // Try fetching country info
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${place}`
      );
      const data = await res.json();

      if (data && data[0]) {
        setInfo({
          name: data[0].name.common,
          capital: data[0].capital?.[0],
          region: data[0].region,
          population: data[0].population,
        });
      } else {
        setInfo(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2>Explore Place</h2>

        <input
          style={input}
          placeholder="Enter city or country"
          onChange={(e) => setPlace(e.target.value)}
        />

        <button style={btn} onClick={searchPlace}>
          Search
        </button>

        {/* MAP */}
        {place && (
          <iframe
            title="map"
            width="100%"
            height="300"
            style={{ borderRadius: "15px", marginTop: "15px" }}
            src={`https://www.google.com/maps?q=${place}&output=embed`}
          ></iframe>
        )}

        {/* INFO */}
        {info && (
          <div style={{ marginTop: "15px", textAlign: "left" }}>
            <h3>{info.name}</h3>
            <p>Capital: {info.capital}</p>
            <p>Region: {info.region}</p>
            <p>Population: {info.population}</p>
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
  maxWidth: "500px",
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

export default Map;
