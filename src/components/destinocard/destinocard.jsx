function DestinoCard({ destino, isSelected, onSelect }) {
    return (
      <div onClick={onSelect}>
        <h3>{destino.nombre}</h3>
        <p>Precio: ${destino.precio}</p>
      </div>
    );
  }
  
  export default DestinoCard;
  