import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../App.css';

const Cuadros = ({ parkingSpots }) => {
    const handleSpotClick = (index) => {
        if (!parkingSpots[index]) {
            // Si el lugar está vacío, redirigir al usuario al registro de entrada
            window.location.href = `/register/${index}`;
        } else {
            // Si el lugar está ocupado, redirigir al usuario a una página donde puedan ver los detalles del registro existente
            window.location.href = `/details/${index}`;
        }
    };

    return (
        <div className="Cuadros">
            {parkingSpots.map((isOccupied, index) => (
                <button
                    key={index}
                    className={`cuadro ${isOccupied ? 'occupied' : 'empty'}`}
                    onClick={() => handleSpotClick(index)}
                >
                    Espacio {index + 1}
                </button>
            ))}
        </div>
    );
}

export default Cuadros;
