import React from "react";
import { useNavigate } from "react-router-dom";

const coiffeurs = [
  {
    image: "/page5.jpg",
    name: "Amy Dione",
    specialty: "Spécialiste en tresses africaines",
    disponibilite: "Lundi à Vendredi - 10h à 18h",
  },
  {
    image: "/pase2.jpg",
    name: "Fatima Sall",
    specialty: "Expertise en perruques naturelles",
    disponibilite: "Mardi & Jeudi - 12h à 17h",
  },
  {
    image: "/page3.jpg",
    name: "Mariam Barry",
    specialty: "Coiffure cérémonie et événements",
    disponibilite: "Tous les jours sauf Dimanche - 9h à 16h",
  },
  {
    image: "/page4.jpg",
    name: "Awa Sy",
    specialty: "Styliste en dreadlocks et twists",
    disponibilite: "Week-ends uniquement - 11h à 20h",
  },
];

const Coiffeurs = () => {
  const navigate = useNavigate();

  const handleClick = (name) => {
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    navigate(`/rdv/${slug}`);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: "url('/public/page.jpg')" }}
    >
      <div className="bg-white bg-opacity-70 container mx-auto px-4 py-16 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#2D3748]">
          Nos Coiffeuses
        </h1>
        <div className="grid md:grid-cols-4 gap-8">
          {coiffeurs.map((c, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2D3748]">
                  {c.name}
                </h3>
                <p className="text-gray-500">{c.specialty}</p>
                <p className="mt-2 text-[#E53E3E] font-medium">
                  Disponibilité : {c.disponibilite}
                </p>
                <button
                  onClick={() => handleClick(c.name)}
                  className="mt-4 bg-[#E53E3E] text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Réserver
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coiffeurs;
