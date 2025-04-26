import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GiAfrica } from "react-icons/gi";

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    nom_client: "",
    email_client: "",
    nom_service: "",
    nom_coiffeur: "",
    date_rdv: "",
    heure_rdv: "",
  });

  const [coiffeurs, setCoiffeurs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCoiffeurs = async () => {
      try {
        const response = await axios.get("http://192.168.1.85:5000/api/coiffeurs");
        setCoiffeurs(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des coiffeurs :", error);
      }
    };

    fetchCoiffeurs();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Données envoyées :", formData);
    try {
      const response = await axios.post("http://192.168.1.85:5000/api/rendezvous", formData);
      console.log("Réponse du serveur :", response.data);
      alert("Réservation enregistrée avec succès !");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Client non trouvé. Vous allez être redirigé vers la page d'inscription.");
        navigate("/register");
      } else {
        console.error("Erreur lors de l'enregistrement de la réservation :", error);
        alert("Une erreur est survenue lors de l'enregistrement de la réservation.");
      }
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/public/page.jpg')`,
      }}
    >
      <div className="container mx-auto px-4 max-w-lg">
        <div className="bg-white/50 backdrop-blur-md rounded-2xl shadow-2xl p-8">
          {/* En-tête */}
          <div className="text-center mb-8">
            <GiAfrica className="text-5xl text-[#E53E3E] mx-auto mb-4" />
            <h1 className="text-3xl font-title text-[#2D3748] mb-2">
              Réserver un créneau
            </h1>
            <p className="text-gray-600">
              Remplissez le formulaire ci-dessous pour réserver votre créneau
            </p>
          </div>

          {/* Formulaire */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#2D3748] mb-2">Nom du Client</label>
                <input
                  type="text"
                  name="nom_client"
                  value={formData.nom_client}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#E53E3E] focus:border-transparent"
                  placeholder="Entrez votre nom"
                  required
                />
              </div>

              <div>
                <label className="block text-[#2D3748] mb-2">Email du Client</label>
                <input
                  type="email"
                  name="email_client"
                  value={formData.email_client}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#E53E3E] focus:border-transparent"
                  placeholder="contact@exemple.sn"
                  required
                />
              </div>

              <div>
                <label className="block text-[#2D3748] mb-2">Nom du Service</label>
                <input
                  type="text"
                  name="nom_service"
                  value={formData.nom_service}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#E53E3E] focus:border-transparent"
                  placeholder="Entrez le service souhaité"
                  required
                />
              </div>

              <div>
                <label className="block text-[#2D3748] mb-2">Nom du Coiffeur</label>
                <select
                  name="nom_coiffeur"
                  value={formData.nom_coiffeur}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#E53E3E] focus:border-transparent"
                  required
                >
                  <option value="">Sélectionnez un coiffeur</option>
                  {coiffeurs.map((coiffeur) => (
                    <option key={coiffeur.id_coiffeur} value={coiffeur.nom}>
                      {coiffeur.nom}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#2D3748] mb-2">Date</label>
                <input
                  type="date"
                  name="date_rdv"
                  value={formData.date_rdv}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#E53E3E] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-[#2D3748] mb-2">Heure</label>
                <input
                  type="time"
                  name="heure_rdv"
                  value={formData.heure_rdv}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#E53E3E] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#E53E3E] to-[#DD6B20] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Valider
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;