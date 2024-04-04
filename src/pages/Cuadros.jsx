import React, { useEffect } from "react";
import Register from "./Register";
import '../App.css';

const Cuadros = () => {
    useEffect(() => {
        const totalBotones = 28;
        const contenedor = document.getElementById('botones-container');
        for (let i = 1; i <= totalBotones; i++) {
            const boton = document.createElement('button');
            boton.className = `cuadro${i}`;
            boton.textContent = `Espacio ${i}`;
            boton.onclick = function() {
                window.location.href = 'Register';
            };
            contenedor.appendChild(boton);
        }
    }, []);

    return (
        <div className="Cuadros">
            <div id="botones-container" className="botones-grid"></div>
        </div>
    );
}

export default Cuadros;
