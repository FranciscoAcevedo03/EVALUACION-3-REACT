import React from 'react';

function CardVehiculo({ vehiculo }) {
  const claseDinamica = `tarjeta ${vehiculo.permanente ? 'vehiculo-permanente' : 'vehiculo-temporal'}`;

  return (
    <div className={claseDinamica}>
      <h3>Patente: {vehiculo.patente}</h3>
      <p>Tipo: {vehiculo.tipo}</p>
      <p>Modalidad: {vehiculo.permanente ? 'Cliente Permanente' : 'Paga por hora'}</p>
    </div>
  );
}

export default CardVehiculo;