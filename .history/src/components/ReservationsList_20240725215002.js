import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReservationsList = ({ restaurantId }) => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/reservations/restaurant/${restaurantId}`);
        setReservations(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, [restaurantId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Reservations for Restaurant ID: {restaurantId}</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <p>Date: {reservation.date}</p>
            <p>Number of People: {reservation.numberOfPeople}</p>
            <p>Client: {reservation.client?.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationsList;
