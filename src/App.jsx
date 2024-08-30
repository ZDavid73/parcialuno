import { useState } from 'react';
import { planDeViajes } from './data/data';
import { AlimentacionCard, HotelCard, DestinoCard, Summary } from './components';
import './App.css'; 

function App() {
  const [selectedAlimentacion, setSelectedAlimentacion] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedDestino, setSelectedDestino] = useState(null);

  const destinosArray = Object.values(planDeViajes.destinosdla);

  const total = (selectedAlimentacion?.precio || 0) +
                (selectedHotel?.costo || 0) +
                (selectedDestino?.precio || 0);

  return (
    <div className="container">
      <div className="left-section">
        <Summary
          alimentacion={selectedAlimentacion}
          hotel={selectedHotel}
          destino={selectedDestino}
          Estrellas={selectedHotel}
          total={total}
        />
      </div>
      <div className="right-section">
        
        <div className='righ1'><h2>Elige tu Alimentación</h2>
        {planDeViajes.alimentacion.map((item) => (
          <AlimentacionCard
            key={item.titulo}
            alimentacion={item}
            isSelected={selectedAlimentacion === item}
            onSelect={() => setSelectedAlimentacion(item)}
          />
        ))}</div>
        <div className='righ2'>
          <h2>Elige tu Hotel</h2>
        {planDeViajes.hoteles.map((hotel) => (
          <HotelCard
            key={hotel.nombre}
            hotel={hotel}
            isSelected={selectedHotel === hotel}
            onSelect={() => setSelectedHotel(hotel)}
          />
        ))}
        </div>
       
        <div className='righ3'><h2>Elige tu Destino</h2>
        {destinosArray.map((destino) => (
          <DestinoCard
            key={destino.nombre}
            destino={destino}
            isSelected={selectedDestino === destino}
            onSelect={() => setSelectedDestino(destino)}
          />
        ))}</div>
        
      </div>
    </div>
  );
}

export default App;
