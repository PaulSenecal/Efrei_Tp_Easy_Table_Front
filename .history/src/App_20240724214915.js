import React, { useState } from 'react';
import ReservationsList from "./components/ReservationsList"
import ReservationForm from './components/ReservationForm';

function App() {
  const [restaurantId, setRestaurantId] = useState(1); // Example restaurant ID

  const handleChange = (event) => {
    setRestaurantId(event.target.value);
  };

  return (
    <div className="App">
      <h1>Restaurant Reservations</h1>
      <label>
        Restaurant ID:
        <input type="number" value={restaurantId} onChange={handleChange} />
      </label>
      <ReservationsList restaurantId={parseInt(restaurantId, 10)} />
      <ReservationForm />
    </div>
  );
}

export default App;
