import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';

const ContadorExtra = () => {
  const [segundos, setSegundos] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [targetValue, setTargetValue] = useState(null);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSegundos((prev) => {
          const newSeconds = prev + 1;

          // Verificar si se ha alcanzado el valor objetivo
          if (targetValue !== null && newSeconds === targetValue) {
            Swal.fire({
              title: `El contador ha llegado a ${targetValue}`,
              position: "top-end",
              icon: "success",
              showConfirmButton: false,
              timer: 2500
            });
            setTargetValue(null); // Reiniciar el valor objetivo
          }
          return newSeconds; // Aumentar el contador
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, targetValue]);

  // Funciones de control del contador
  const handlePlay = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleStop = () => {
    setIsRunning(false);
    setSegundos(0);
    setTargetValue(null);
  };

  // Manejo de entrada
  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue)) {
      setTargetValue(newValue);
    }
  };

  return (
    <div className="cuenta">
      <div className="my-2">
        <button className="btn btn-success me-2" onClick={handlePlay}>Play</button>
        <button className="btn btn-light me-2" onClick={handlePause}>Pause</button>
        <button className="btn btn-danger" onClick={handleStop}>Stop</button>
      </div>
      <div>
        <input
          type="number"
          onChange={handleInputChange}
          placeholder="Set countdown"
          min="0"
        />
      </div>
      <div className="regresiva d-flex text-center justify-content-center">
        {String(segundos).padStart(2, '0').split("").map((digit, index) => (
          <div className="digit" key={index}>{digit}</div>
        ))}
      </div>
    </div>
  );
};

export default ContadorExtra;
