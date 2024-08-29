function Summary({ alimentacion, hotel, destino, total }) {
    return (
      <div>
        <h2>Resumen de tu Viaje</h2>
        <p>Alimentación: {alimentacion ? alimentacion.titulo : 'No seleccionado'}</p>
        <p>Hotel: {hotel ? hotel.nombre : 'No seleccionado'}</p>
        <p>Destino: {destino ? destino.nombre : 'No seleccionado'}</p>
        <h3>Total: ${total}</h3>
        <img></img>
      </div>
    );
  }
  
  export default Summary;
  