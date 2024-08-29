function AlimentacionCard({ alimentacion, isSelected, onSelect }) {
    return (
      <div onClick={onSelect}>
        <h3>{alimentacion.titulo}</h3>
        <p>Precio: ${alimentacion.precio}</p>
      </div>
    );
  }
  
  export default AlimentacionCard;
  
  