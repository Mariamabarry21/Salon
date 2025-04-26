import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DashboardPage = () => {
  const { id_client } = useParams();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(`http://192.168.1.85:5000/api/reservations/${id_client}`);
        setReservations(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des réservations :", error);
      }
    };

    fetchReservations();
  }, [id_client]);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Mes Réservations</h1>
        {reservations.length > 0 ? (
          <ul className="space-y-4">
            {reservations.map((reservation) => (
              <li key={reservation.id_rdv} className="bg-white p-4 rounded shadow">
                <p><strong>Service :</strong> {reservation.service_name}</p>
                <p><strong>Coiffeur :</strong> {reservation.coiffeur_name}</p>
                <p><strong>Date :</strong> {reservation.date_rdv}</p>
                <p><strong>Heure :</strong> {reservation.heure_rdv}</p>
                <p><strong>Prix :</strong> {reservation.service_price} FCFA</p>
                <p>
                  <strong>Statut :</strong>{" "}
                  {reservation.status === "confirme" ? (
                    <span className="text-green-500">Confirmée</span>
                  ) : (
                    <span className="text-yellow-500">En attente</span>
                  )}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucune réservation trouvée.</p>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;