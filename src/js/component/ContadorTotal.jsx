
import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'; // Importar SweetAlert

const ContadorTotal = () => {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);
    
    return () => clearInterval(interval); // Limpieza del intervalo al desmontar
  }, []);

  useEffect(() => {
    if (segundos === 60) {
      setMinutos((prev) => prev + 1);
      setSegundos(0);
    }
    if (minutos === 60) {
      setHoras((prev) => prev + 1);
      setMinutos(0);
    }

    // Alerta si llegan a 15 segundos, configurable en caso de necesitar mas tiempo o un aviso cuando pase x tiempo
    if (segundos === 15 ) {
      Swal.fire({
        title: '¿Te dormiste?',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }
  }, [segundos, minutos]);

  return (
    <div className="d-flex text-center justify-content-center ">
      <div className="timer d-flex text-center justify-content-center">
      <div>
  <i className="num far fa-clock"></i>
</div>
      <div className="num">{horas}</div><div className="text">H:</div><div className="num">{minutos}</div><div className="text">M:</div>
      <div className="num">{segundos}</div><div className="text">S</div>
    </div>
    </div>
  );
};
export default ContadorTotal;