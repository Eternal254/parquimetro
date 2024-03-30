import React from "react";
import '../App.css'
import Cuadros  from "./Cuadros";

const Register = () => {
    return(
        <div className="default">
            <h1 className="nom" >Nombre</h1>
            <input type="text" placeholder="Nombre" className="inp"/>
            <h1 className="nom">Matricula</h1>
            <input type="text" placeholder="Matricula" className="inp" />
            <br />  
            <br />
            <button className="button1">Guardar</button>
            <br />
            <br />
        </div>
    );
}

export default Register;