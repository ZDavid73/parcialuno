import './hotelcard.css';

function HotelCard({ hotel, isSelected, onSelect }) {
  return (
    <div className={`hotel-card ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
      <input 
        id={hotel.nombre}
        type="radio"
        checked={isSelected}
        onChange={onSelect}
        aria-label={hotel.nombre}
      />
      <label htmlFor={hotel.nombre}>
        <img src={hotel.imagen} alt={hotel.nombre} />
        <h3>{hotel.nombre}</h3>
        <p>Precio: ${hotel.costo}</p>
        <p>Estrellas: {hotel.estrellas}</p>
        <p>Ubicación: {hotel.ubicacion}</p>
        <ul>
          {hotel.servicios.map((servicio, index) => (
            <li key={index}>{servicio}</li>
          ))}
        </ul>
      </label>
    </div>
  );
}

export default HotelCard;
