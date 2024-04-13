import React, { useState, useEffect } from "react";
import '../App.css';

const Register = () => {
    const [nombre, setNombre] = useState("");
    const [matricula, setMatricula] = useState("");
    const [cronometro, setCronometro] = useState(null);
    const [tiempoTranscurrido, setTiempoTranscurrido] = useState(0);
    const [datosGuardados, setDatosGuardados] = useState(null);
    const numeroDelEspacio = parseInt(localStorage.getItem("numeroDelEspacio"));
    const [espacioOcupado, setEspacioOcupado] = useState(false);
    const [error, setError] = useState("");

    const handleGuardar = () => {
        if (nombre.trim() === "" || matricula.trim() === "") {
            setError("Por favor, completa todos los campos.");
            return;
        }

        const datos = { nombre, matricula };
        localStorage.setItem(`savedData_${numeroDelEspacio}`, JSON.stringify(datos));
        setDatosGuardados(datos);

        const startTime = Date.now();
        const timer = setInterval(() => {
            const tiempoActual = Date.now();
            const tiempoTranscurrido = Math.floor((tiempoActual - startTime) / 1000);
            setTiempoTranscurrido(tiempoTranscurrido);
            localStorage.setItem(`cronometro_${numeroDelEspacio}`, JSON.stringify({ startTime, tiempoTranscurrido }));
        }, 1000);
        setCronometro(timer);

        setEspacioOcupado(true);
        localStorage.setItem(`espacioOcupado_${numeroDelEspacio}`, "true");
        setError("");
    };

    const handleCancelar = () => {
        clearInterval(cronometro);
        setCronometro(null);
        setTiempoTranscurrido(0);
        setDatosGuardados(null);
        localStorage.removeItem(`savedData_${numeroDelEspacio}`);
        localStorage.removeItem(`cronometro_${numeroDelEspacio}`);

        setEspacioOcupado(false);
        localStorage.removeItem(`espacioOcupado_${numeroDelEspacio}`);
        setError("");
    };

    useEffect(() => {
        const savedData = localStorage.getItem(`savedData_${numeroDelEspacio}`);
        const cronometroData = localStorage.getItem(`cronometro_${numeroDelEspacio}`);
        const espacioOcupado = localStorage.getItem(`espacioOcupado_${numeroDelEspacio}`);

        if (savedData && cronometroData) {
            setDatosGuardados(JSON.parse(savedData));
            const { startTime, tiempoTranscurrido } = JSON.parse(cronometroData);
            const timer = setInterval(() => {
                const tiempoActual = Date.now();
                const tiempoTranscurrido = Math.floor((tiempoActual - startTime) / 1000);
                setTiempoTranscurrido(tiempoTranscurrido);
            }, 1000);
            setCronometro(timer);
        }

        if (espacioOcupado === "true") {
            setEspacioOcupado(true);
        } else {
            setEspacioOcupado(false);
        }
    }, [numeroDelEspacio]);

    return (
        <div className="default">
            {error && <p className="error">{error}</p>}
            {datosGuardados ? (
                <div>
                    <h2>Datos guardados:</h2>
                    <p>Nombre: {datosGuardados.nombre}</p>
                    <p>Matrícula: {datosGuardados.matricula}</p>
                    <h2>Tiempo transcurrido: {tiempoTranscurrido} segundos</h2>
                    <button className="button1" onClick={handleCancelar}>Cancelar</button>
                    {espacioOcupado ? <p className="error">Estado: Ocupado</p> : <p className="error">Estado: Disponible</p>}
                </div>
            ) : (
                <div>
                    <h1 className="nom" >Nombre</h1>
                    <input type="text" placeholder="Nombre" className="inp" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <h1 className="nom">Matricula</h1>
                    <input type="text" placeholder="Matricula" className="inp" value={matricula} onChange={(e) => setMatricula(e.target.value)} />
                    <br />  
                    <br />
                    <button className="button1" onClick={handleGuardar}>Guardar</button>
                    {espacioOcupado ? <p className="error">Estado: Ocupado</p> : <p className="error">Estado: Disponible</p>}
                </div>
            )}
        </div>
    );
}

export default Register;
