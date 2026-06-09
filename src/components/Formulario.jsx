import React, { useState } from 'react';

function Formulario({ onAgregarVehiculo, cuposDisponibles }) {
  const [patente, setPatente] = useState('');
  const [tipo, setTipo] = useState('Automóvil');
  const [permanente, setPermanente] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cuposDisponibles <= 0) {
      alert('Error: Estacionamiento completo. No quedan cupos.');
      return;
    }

    if (!patente.trim()) {
      alert('Error: El campo patente obligatorio.');
      return;
    }

    const formatoPatente = /^[A-Z]{4}\d{2}$|^[a-z]{4}\d{2}$/;
    if (!formatoPatente.test(patente)) {
      alert('Formato inválido. Use 4 letras y 2 números (Ej: ABCD12).');
      return;
    }

    onAgregarVehiculo({
      patente: patente.toUpperCase(),
      tipo: tipo,
      permanente: permanente
    });

    setPatente('');
    setTipo('Automóvil');
    setPermanente(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px', maxWidth: '400px', margin: '0 auto', border: '1px solid #ccc' }}>
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Patente Vehículo:</label>
        <input 
          type="text" 
          value={patente} 
          onChange={(e) => setPatente(e.target.value)} 
          placeholder="ABCD12"
          style={{ width: '100%', padding: '6px' }}
        />
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Tipo:</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)} style={{ width: '100%', padding: '6px' }}>
          <option value="Automóvil">Automóvil</option>
          <option value="Camioneta">Camioneta</option>
          <option value="Furgón">Furgón</option>
        </select>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>
          <input 
            type="checkbox" 
            checked={permanente} 
            onChange={(e) => setPermanente(e.target.checked)} 
            style={{ marginRight: '5px' }}
          />
          ¿Es vehículo residente / permanente?
        </label>
      </div>

      <button type="submit" style={{ backgroundColor: 'mediumvioletred', color: 'white', padding: '10px', border: 'none', width: '100%', cursor: 'pointer', borderRadius: '4px' }}>
        Registrar Entrada
      </button>
    </form>
  );
}

export default Formulario;