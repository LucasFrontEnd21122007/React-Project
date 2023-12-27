import React, { useState, useEffect } from 'react';
import './App.css';
import geolib from 'geolib';

function App() {
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    // Coordenadas aproximadas da América do Sul e Ásia
    const southAmerica = { latitude: -14.235004, longitude: -51.92528 };
    const asia = { latitude: 34.0479, longitude: 100.6197 };

    // Calcula a distância em quilômetros
    const calculatedDistance = geolib.getDistance(southAmerica, asia) / 1000;

    setDistance(calculatedDistance);
  }, []);

  return (
    <div className="App">
      <h1>Calculadora de Frete</h1>
      {distance !== null && (
        <p>
          A distância entre a América do Sul e a Ásia é de aproximadamente {distance.toFixed(2)} km.
        </p>
      )}
    </div>
  );
}

export default App;