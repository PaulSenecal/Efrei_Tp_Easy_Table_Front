import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = () => {
  const [clientName, setClientName] = useState('');
  const [restaurantId, setRestaurantId] = useState('');
  const [reservationDate, setReservationDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/reservations', {
        clientName,
        restaurantId,
        reservationDate,
      });
      alert('Reservation successful!');
    } catch (error) {
      console.error('There was an error making the reservation!', error);
      alert('Reservation failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Client Name:</label>
        <input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Restaurant ID:</label>
        <input
          type="text"
          value={restaurantId}
          onChange={(e) => setRestaurantId(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Reservation Date:</label>
        <input
          type="datetime-local"
          value={reservationDate}
          onChange={(e) => setReservationDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Make Reservation</button>
    </form>
  );
};

export default ReservationForm;
