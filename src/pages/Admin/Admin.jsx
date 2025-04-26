import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import ErrorBoundary from "./ErrorBoundary";
import { useNavigate } from "react-router-dom"; // Importez useNavigate

// Enregistrement des composants nécessaires pour Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const AdminPage = () => {
  const navigate = useNavigate(); // Initialisez useNavigate
  const [reservations, setReservations] = useState([]);
  const [weeklyReservations, setWeeklyReservations] = useState([]);
  const [weeklyClients, setWeeklyClients] = useState([]);
  const [topCoiffeurs, setTopCoiffeurs] = useState([]);
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ nom_service: "", description: "", prix: "" });
  const [clientAccounts, setClientAccounts] = useState([]);

  // Récupération des données
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get("http://192.168.1.85:5000/api/reservations");
        setReservations(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des réservations :", error);
      }
    };

    const fetchWeeklyReservations = async () => {
      try {
        const response = await axios.get("http://192.168.1.85:5000/api/stats/weekly-reservations");
        setWeeklyReservations(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des réservations hebdomadaires :", error);
      }
    };

    const fetchWeeklyClients = async () => {
      try {
        const response = await axios.get("http://192.168.1.85:5000/api/stats/weekly-clients");
        setWeeklyClients(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des clients hebdomadaires :", error);
      }
    };

    const fetchTopCoiffeurs = async () => {
      try {
        const response = await axios.get("http://192.168.1.85:5000/api/stats/top-coiffeurs");
        setTopCoiffeurs(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des coiffeurs :", error);
      }
    };

    // Récupérer les services
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://192.168.1.85:5000/api/services");
        setServices(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des services :", error);
      }
    };

    const fetchClientAccounts = async () => {
      try {
        const response = await axios.get("http://192.168.1.85:5000/api/clients");
        setClientAccounts(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des comptes des clients :", error);
      }
    };

    fetchReservations();
    fetchWeeklyReservations();
    fetchWeeklyClients();
    fetchTopCoiffeurs();
    fetchServices(); // Charger les services
    fetchClientAccounts(); // Charger les comptes des clients
  }, []);

  // Mise à jour du statut des réservations
  const updateStatus = async (id_rdv, status) => {
    try {
      await axios.put(`http://192.168.1.85:5000/api/reservations/${id_rdv}/status`, { status });
      setReservations((prev) =>
        prev.map((reservation) =>
          reservation.id_rdv === id_rdv ? { ...reservation, status } : reservation
        )
      );
      alert(`Statut mis à jour en "${status}" pour la réservation ${id_rdv}`);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut :", error);
      alert("Une erreur est survenue lors de la mise à jour du statut.");
    }
  };

  // Données pour les graphiques
  const weeklyReservationsData = {
    labels: weeklyReservations.map((week) => `Semaine ${week.week}`),
    datasets: [
      {
        label: "Réservations par semaine",
        data: weeklyReservations.map((week) => week.count),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const weeklyClientsData = {
    labels: weeklyClients.map((week) => `Semaine ${week.week}`),
    datasets: [
      {
        label: "Clients créés par semaine",
        data: weeklyClients.map((week) => week.count),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const topCoiffeursData = {
    labels: topCoiffeurs.map((coiffeur) => coiffeur.name),
    datasets: [
      {
        label: "Réservations par coiffeur",
        data: topCoiffeurs.map((coiffeur) => coiffeur.count),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Ajouter un service
  const addService = async () => {
    try {
      await axios.post("http://192.168.1.85:5000/api/services", newService);
      alert("Service ajouté avec succès !");
      fetchServices();
      setNewService({ nom_service: "", description: "", prix: "" });
      navigate("/services"); // Redirigez vers la page des services
    } catch (error) {
      console.error("Erreur lors de l'ajout du service :", error);
    }
  };

  // Supprimer un service
  const deleteService = async (id_service) => {
    try {
      await axios.delete(`http://192.168.1.85:5000/api/services/${id_service}`);
      alert("Service supprimé avec succès !");
      fetchServices();
    } catch (error) {
      console.error("Erreur lors de la suppression du service :", error);
    }
  };

  // Mettre à jour un service
  const updateService = async (id_service, updatedService) => {
    try {
      await axios.put(`http://192.168.1.85:5000/api/services/${id_service}`, updatedService);
      alert("Service mis à jour avec succès !");
      fetchServices();
    } catch (error) {
      console.error("Erreur lors de la mise à jour du service :", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Gestion des Réservations et Services</h1>

        {/* Graphiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <ErrorBoundary>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-4">Réservations par semaine</h2>
              <Bar data={weeklyReservationsData} />
            </div>
          </ErrorBoundary>
          <ErrorBoundary>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-4">Clients créés par semaine</h2>
              <Line data={weeklyClientsData} />
            </div>
          </ErrorBoundary>
          <ErrorBoundary>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-4">Top Coiffeurs</h2>
              <Pie data={topCoiffeursData} />
            </div>
          </ErrorBoundary>
        </div>

        {/* Tableau des réservations */}
        <h2 className="text-2xl font-bold mb-4">Tableau des Réservations</h2>
        <table className="w-full bg-white rounded shadow mb-10">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Client</th>
              <th className="py-2 px-4">Service</th>
              <th className="py-2 px-4">Coiffeur</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Heure</th>
              <th className="py-2 px-4">Statut</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id_rdv} className="border-t">
                <td className="py-2 px-4">{reservation.id_rdv}</td>
                <td className="py-2 px-4">{reservation.client_name}</td>
                <td className="py-2 px-4">{reservation.service_name}</td>
                <td className="py-2 px-4">{reservation.coiffeur_name}</td>
                <td className="py-2 px-4">{reservation.date_rdv}</td>
                <td className="py-2 px-4">{reservation.heure_rdv}</td>
                <td className="py-2 px-4">{reservation.status}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => updateStatus(reservation.id_rdv, "confirme")}
                    className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600"
                  >
                    Confirmer
                  </button>
                  <button
                    onClick={() => updateStatus(reservation.id_rdv, "en attente")}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  >
                    En attente
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Gestion des services */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Gestion des Services</h2>

          {/* Formulaire d'ajout */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Nom du service"
              value={newService.nom_service}
              onChange={(e) => setNewService({ ...newService, nom_service: e.target.value })}
              className="border p-2 mr-2"
            />
            <input
              type="text"
              placeholder="Description"
              value={newService.description}
              onChange={(e) => setNewService({ ...newService, description: e.target.value })}
              className="border p-2 mr-2"
            />
            <input
              type="number"
              placeholder="Prix"
              value={newService.prix}
              onChange={(e) => setNewService({ ...newService, prix: e.target.value })}
              className="border p-2 mr-2"
            />
            <button onClick={addService} className="bg-blue-500 text-white px-4 py-2 rounded">
              Ajouter
            </button>
          </div>

          {/* Tableau des services */}
          <table className="w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4">Nom</th>
                <th className="py-2 px-4">Description</th>
                <th className="py-2 px-4">Prix</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id_service} className="border-t">
                  <td className="py-2 px-4">{service.nom_service}</td>
                  <td className="py-2 px-4">{service.description}</td>
                  <td className="py-2 px-4">{service.prix} FCFA</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => deleteService(service.id_service)}
                      className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                    >
                      Supprimer
                    </button>
                    <button
                      onClick={() =>
                        updateService(service.id_service, {
                          nom_service: "Service Modifié",
                          description: "Nouvelle Description",
                          prix: 20000,
                        })
                      }
                      className="bg-yellow-500 text-white px-4 py-2 rounded"
                    >
                      Modifier
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Comptes des Clients */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Comptes des Clients</h2>
          <table className="w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4">ID</th>
                <th className="py-2 px-4">Nom</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Téléphone</th>
                <th className="py-2 px-4">Date de Création</th>
              </tr>
            </thead>
            <tbody>
              {clientAccounts.map((client) => (
                <tr key={client.id_client} className="border-t">
                  <td className="py-2 px-4">{client.id_client}</td>
                  <td className="py-2 px-4">{client.nom}</td>
                  <td className="py-2 px-4">{client.email}</td>
                  <td className="py-2 px-4">{client.telephone}</td>
                  <td className="py-2 px-4">{client.date_creation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;