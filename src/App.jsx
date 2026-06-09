import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaVehiculos from './components/ListaVehiculos';
import './App.css';

function App() {
  const [vehiculos, setVehiculos] = useState(() => {
    const datosLocales = localStorage.getItem('lista_vehiculos');
    return datosLocales ? JSON.parse(datosLocales) : [];
  });

  useEffect(() => {
    localStorage.setItem('lista_vehiculos', JSON.stringify(vehiculos));
  }, [vehiculos]);

  const handleAgregarVehiculo = (nuevoVehiculo) => {
    const duplicado = vehiculos.some(v => v.patente === nuevoVehiculo.patente);
    if (duplicado) {
      alert('Este vehículo ya se encuentra dentro del estacionamiento.');
      return;
    }
    setVehiculos([...vehiculos, nuevoVehiculo]);
  };

  const capacidadMax = 10;
  const cuposDisponibles = capacidadMax - vehiculos.length;

  return (
    <div>
      <header style={{ backgroundColor: 'royalblue', color: 'white', padding: '25px', textAlign: 'center' }}>
        <h1>Control de Estacionamientos - INACAP</h1>
      </header>

      <main style={{ padding: '20px', minHeight: '70vh' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>
          Espacios Disponibles: {cuposDisponibles} de {capacidadMax}
        </h2>

        <Formulario 
          onAgregarVehiculo={handleAgregarVehiculo} 
          cuposDisponibles={cuposDisponibles} 
        />

        <ListaVehiculos vehiculos={vehiculos} />
      </main>

      <footer style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid #ccc', backgroundColor: '#e9ecef' }}>
        <p>Sistema de Gestión Digital SPA - Sede Osorno 2026</p>
      </footer>
    </div>
  );
}

export default App;