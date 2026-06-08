import React from 'react';
import CardVehiculo from './CardVehiculo';

function ListaVehiculos({ vehiculos }) {
    return (
        <div className="contenedor-lista">
            {vehiculos.map((v) => (
                <CardVehiculo vehiculo={v} key={v.patente} />
            ))}
        </div>
    )
}

export default ListaVehiculos;