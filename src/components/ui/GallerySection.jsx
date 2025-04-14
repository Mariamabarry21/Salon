import { FaCut, FaRegHeart, FaSearchPlus } from "react-icons/fa";
import { GiAfrica } from "react-icons/gi";
import { useState } from 'react'; // Import obligatoire
import { Link } from 'react-router-dom';

const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      category: "coupes",
      title: "Coupe Moderne Homme",
      service: "Coupe Barbe",
    },
    {
      id: 2,
      category: "tresses",
      title: "Tresses Africaines",
      service: "Tressage Créatif",
    },
    {
      id: 3,
      category: "soins",
      title: "Soin Capillaire",
      service: "Masque Naturel",
    },
    {
      id: 4,
      category: "coloration",
      title: "Coloration Éclat",
      service: "Teinture Végétale",
    },
    {
      id: 5,
      category: "evenements",
      title: "Mariage Dakarois",
      service: "Coiffure Cérémonie",
    },
    {
      id: 6,
      category: "tresses",
      title: "Braids Bohèmes",
      service: "Tresses Collées",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <section className="py-20 bg-[#faf7f2]">
      <div className="container mx-auto px-4">
        {/* Titre et Filtres */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-title text-[#2D3748] relative inline-block mb-8">
            <span className="bg-[#FFD700] px-4 pb-1 relative z-10">
              Notre Galerie Créative
            </span>
            <div className="absolute h-1 bg-[#E53E3E] w-32 left-1/2 -translate-x-1/2 bottom-0"></div>
          </h2>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "all",
              "coupes",
              "tresses",
              "soins",
              "coloration",
              "evenements",
            ].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full capitalize transition-all ${
                  activeFilter === filter
                    ? "bg-[#E53E3E] text-white"
                    : "bg-white text-[#2D3748] hover:bg-[#FFD700] hover:text-[#2D3748]"
                }`}
              >
                {filter === "all" ? "Tout voir" : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grille Galerie */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-square bg-gray-200 relative">
                <img
                  src={`public/gallery-${item.id}.jpg`}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D3748] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#FFD700]">
                    <FaCut className="text-sm" />
                    <span className="text-sm">{item.service}</span>
                  </div>
                </div>

                {/* Icônes Interaction */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white rounded-full hover:bg-[#FFD700]">
                    <FaRegHeart className="text-[#E53E3E]" />
                  </button>
                  <button className="p-2 bg-white rounded-full hover:bg-[#FFD700]">
                    <FaSearchPlus className="text-[#E53E3E]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bas de Galerie */}
        <div className="mt-16 text-center">
          <GiAfrica className="text-6xl text-[#E53E3E] mx-auto mb-6 animate-pulse" />
          <p className="text-xl text-[#2D3748] mb-8 max-w-2xl mx-auto">
            Prêt à transformer votre style ? Notre équipe d'experts vous attend
            pour créer une œuvre d'art capillaire unique.
          </p>
          <Link
            to="/contact"
            className="bg-[#E53E3E] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#F56565] inline-flex items-center gap-2"
          >
            <FaCut className="text-xl" />
            Prendre RDV Maintenant
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;