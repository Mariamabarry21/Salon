import React from "react";

const ContactPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 py-10"
      style={{
        backgroundImage: "url('/public/page.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="bg-white p-10 rounded shadow-lg w-full max-w-md"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)", 
        }}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Contactez-nous</h2>
        <p className="text-center mb-6">
          Vous pouvez nous joindre via les informations ci-dessous :
        </p>
        <ul className="space-y-4">
          <li>
            <strong>Nom :</strong> Élégance Dakar
          </li>
          <li>
            <strong>Adresse :</strong> Rue 10, Plateau, Dakar, Sénégal
          </li>
          <li>
            <strong>Téléphone :</strong> +221 77 052 63 10
          </li>
          <li>
            <strong>Email :</strong> contact@elegancedakar.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;