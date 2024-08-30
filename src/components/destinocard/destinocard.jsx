import './destinocard.css';

function DestinoCard({ destino, isSelected, onSelect }) {
  return (
    <div className={`destino-card ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
      <input 
        id={destino.nombre}
        type="radio"
        checked={isSelected}
        onChange={onSelect}
        aria-label={destino.nombre}
      />
      <label htmlFor={destino.nombre}>
        <img src={destino.imagen} alt={destino.nombre} />
        <h3>{destino.nombre}</h3>
        <p>Precio: ${destino.precio}</p>
      </label>
    </div>
  );
}

export default DestinoCard;
