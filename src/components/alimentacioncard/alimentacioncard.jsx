import './alimentacioncard.css';

function AlimentacionCard({ alimentacion, isSelected, onSelect }) {
  return (
    <div className={`alimentacion-card ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
      <input 
      id={alimentacion.titulo}
        type="radio"
        checked={isSelected}
        onChange={onSelect}
        aria-label={alimentacion.titulo}
      />
      <label htmlFor={alimentacion.titulo}>
      <img src={alimentacion.imagen} alt={alimentacion.titulo} />
      <h3>{alimentacion.titulo}</h3>
      <p>Precio: ${alimentacion.precio}</p>
      </label>
    </div>
  );
}

export default AlimentacionCard;
