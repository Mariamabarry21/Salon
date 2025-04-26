import React, { useState, useEffect } from "react";
import axios from "axios";

const ServicePage = () => {
  const [services, setServices] = useState([]);

  // Récupérer les services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://192.168.1.85:5000/api/services");
        setServices(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des services :", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-100 py-10"
      style={{
        backgroundImage: "url('/public/page.jpg')", // Chemin de l'image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
   <div className="container mx-auto px-4 bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Nos Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id_service} className="bg-blue-50 p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-2 text-blue-800">{service.nom_service}</h2>
              <p className="text-gray-700 mb-2">{service.description}</p>
              <p className="text-gray-900 font-bold">{service.prix} FCFA</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;