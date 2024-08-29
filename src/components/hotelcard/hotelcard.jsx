function HotelCard({ hotel, isSelected, onSelect }) {
    return (
      <div onClick={onSelect}>
        <h3>{hotel.nombre}</h3>
        <p>Precio: ${hotel.costo}</p>
        <p>Estrellas: {hotel.estrellas}</p>
        <p>Ubicación: {hotel.ubicacion}</p>
        <ul>
          {hotel.servicios.map((servicio, index) => (
            <li key={index}>{servicio}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default HotelCard;
  