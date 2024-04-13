import React, { useEffect } from "react";
import '../App.css';
import './Cuadros.css'; // Importa el archivo de estilos CSS para Cuadros

const Cuadros = () => {
    useEffect(() => {
        const totalBotones = 28;
        const contenedor = document.getElementById('botones-container');
        for (let i = 1; i <= totalBotones; i++) {
            const boton = document.createElement('button');
            boton.className = `cuadro cuadro${i}`; // Agrega la clase .cuadro y la clase específica
            boton.textContent = `Espacio ${i}`;
            boton.onclick = function() {
                localStorage.setItem("numeroDelEspacio", i); // Guarda el número del espacio en local storage
                window.location.href = '/register'; // Redirecciona al registro
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
