import React, { useState, useEffect } from 'react';
import './ExitStyle.css'
import Cuadros  from "./Cuadros";

const Exit = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="exit-box">
                <h2 className="exit-title">Parquimetro</h2>
                <div className="exit-clock">
                    {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </div>
                <button className="exit-button">Salida</button>
            </div>
        </div>
    );
}

export default Exit;
