import React from "react";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import '../App.css'

const Register = ({ spotIndex, setParkingSpots }) => {
    const navigate = useNavigate(); // Usamos useNavigate para la navegación

    const handleRegister = () => {
        const nombre = document.getElementById('nombre').value;
        const matricula = document.getElementById('matricula').value;

        // Actualizamos el estado de los lugares de estacionamiento para marcar el lugar seleccionado como ocupado
        setParkingSpots(prevParkingSpots => {
            const updatedParkingSpots = [...prevParkingSpots];
            updatedParkingSpots[spotIndex] = true; // Marcar el lugar como ocupado
            return updatedParkingSpots;
        });

        // Después de registrar la entrada, redireccionamos al usuario a la página principal
        navigate('/');
    };

    return(
        <div className="default">
            <h1 className="nom" >Nombre</h1>
            <input id="nombre" type="text" placeholder="Nombre" className="inp"/>
            <h1 className="nom">Matricula</h1>
            <input id="matricula" type="text" placeholder="Matricula" className="inp" />
            <br />  
            <br />
            <button className="button1" onClick={handleRegister}>Guardar</button>
            <br />
            <br />
        </div>
    );
}

export default Register;
