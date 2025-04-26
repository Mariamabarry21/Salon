// import {
//   FaScissors,
//   FaCalendarAlt,
//   FaStar,
//   FaInstagram,
//   FaFacebookF,
//   FaTwitter,
// } from "react-icons/fa";
// import { GiAfrica, GiHairStrands } from "react-icons/gi";
import Navbar from "../../components/ui/navbar";
import GallerySection from "../../components/ui/GallerySection";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      <Navbar />

      
      <header
        id="acceuil"
        className="relative bg-[url('/public/page.jpg')]  bg-cover bg-no-repeat bg-center  text-white py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <div className="mb-8 animate-bounce">
            
          </div>
          <h1 className="font-title text-5xl md:text-7xl mb-6 animate-fade-in-down">
            <span className="block text-4xl mb-4 font-light">
              Salon de Coiffure
            </span>
            Élégance Dakar
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Découvrez l'art de la coiffure africaine moderne au cœur de la
            capitale sénégalaise
          </p>
          <button 
          onClick={() => navigate("/reservation")}
          className="bg-[#FFD700] text-[#2D3748] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#FFE55C] transition-all shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
            
            Prendre rendez-vous
          </button>
        </div>
      </header>

      {/* Services  */}
      <section id="services" className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-title text-center mb-16 text-[#2D3748] relative">
          <span className="bg-[#FFD700] px-4 pb-1 relative z-10">
            Nos Services Stars
          </span>
          <div className="absolute h-1 bg-[#E53E3E] w-32 left-1/2 -translate-x-1/2 bottom-0"></div>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {["Coupe Homme", "Coloration Naturelle", "Tresses Africaines"].map(
            (service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="bg-[#E53E3E] w-fit p-4 rounded-full mb-6">
                  
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#2D3748]">
                  {service}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service === "Coupe Homme"
                    ? "Coupes modernes et styles personnalisés par nos experts"
                    : service === "Coloration Naturelle"
                    ? "Colorations 100% naturelles à base de henné et plantes locales"
                    : "Tressage traditionnel et moderne avec des matériaux premium"}
                </p>
                <div className="flex justify-between items-center border-t pt-4">
                  <span className="text-[#E53E3E] font-bold text-xl">
                    À partir de{" "}
                    {service === "Tresses Africaines" ? "25 000" : "15 000"}{" "}
                    FCFA
                  </span>
                  <button 
                    onClick={() => navigate("/reservation")}
                    className="bg-[#2D3748] text-white px-6 py-2 rounded-lg hover:bg-[#4A5568] flex items-center gap-2">
                    
                    Réserver
                    
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Notre Équipe */}
      <section id="coiffeurs" className="bg-[#2D3748] text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-title text-center mb-16 relative">
            <span className="bg-[#FFD700] px-4 pb-1 relative z-10">
              Nos Artisans Capillaires
            </span>
            <div className="absolute h-1 bg-[#E53E3E] w-32 left-1/2 -translate-x-1/2 bottom-0"></div>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
  {[
    {
      image: "/public/page5.jpg",
      name: "Amy Dione",
      specialty: "Spécialiste en tresses africaines et soin capillaire",
    },
    {
      image: "/public/pase2.jpg",
      name: "Fatima Sall",
      specialty: "Expertise en perruques naturelles",
    },
    {
      image: "/public/page3.jpg",
      name: "Mariam Barry",
      specialty: "Coiffure cérémonie",
    },
    {
      image: "/public/page4.jpg",
      name: "Awa Sy",
      specialty: "Styliste en dreadlocks , twists et coiffure homme",
    },
  ].map((coiffeur, i) => (
    <div
      key={i}
      className="group relative overflow-hidden rounded-2xl transform hover:-translate-y-2 transition-all duration-300"
    >
      <img
        src={coiffeur.image}
        alt={coiffeur.name}
        className="w-full h-80 object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2D3748] via-transparent to-transparent p-6 flex flex-col justify-end">
        <h3 className="font-bold text-xl mb-2">{coiffeur.name}</h3>
        <p className="text-[#FFD700] text-sm mb-4">{coiffeur.specialty}</p>
        <div className="flex gap-3">
          <a href="#" className="text-white hover:text-[#FFD700]">
            
          </a>
          <a href="#" className="text-white hover:text-[#FFD700]">
            
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Gallerie */}
      <GallerySection />

      
      <section id="contact" className="py-20 bg-[#FFD700] bg-opacity-10">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-12 shadow-2xl">
          <h2 className="text-4xl font-title mb-6 text-[#2D3748]">
            Réservez Votre Créneau
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Disponibilités en temps réel • Paiement sécurisé • Rappel SMS
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
          <button
                  onClick={() => navigate("/reservation")}
                  className="mt-4 bg-[#E53E3E] text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Prendre RDV
                </button>
            <button
              onClick={() => navigate("/coiffeurs")}
              className="border-2 border-[#2D3748] text-[#2D3748] px-10 py-4 rounded-full font-bold hover:bg-[#2D3748] hover:text-white transition-all text-lg"
            >
              Voir les Coiffeurs
            </button>
          </div>
        </div>
      </div>
    </section>

      {/* Footer */}
      <footer className="bg-[#2D3748] text-white py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-title mb-6 flex items-center gap-2">
              
              Élégance Dakar
            </h3>
            <address className="not-italic text-gray-300">
              Rue 10, Plateau
              <br />
              Dakar, Sénégal
              <br />
              <a href="tel:+221770526310" className="hover:text-[#FFD700]">
                +221 77 052 63 10
              </a>
            </address>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Nos Services</h4>
            <ul className="space-y-3 text-gray-300">
              {[
                "Coiffure Homme",
                "Tresses",
                "Soins Naturels",
                "Événements",
              ].map((item, i) => (
                <li key={i} className="hover:text-[#FFD700] transition-colors">
                  <a href="#" className="flex items-center gap-2">
                    
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Heures d'Ouverture</h4>
            <div className="text-gray-300 space-y-2">
              <p>Lun-Sam : 8h - 20h</p>
              <p>Dimanche : Sur RDV</p>
              <p className="mt-4 text-[#FFD700]">
                Urgences capillaires : 24h/24
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Réseaux Sociaux</h4>
            <div className="flex gap-6 text-2xl">
              <a href="#" className="text-[#FFD700] hover:text-[#E53E3E]">
                {/* <FaInstagram /> */}
              </a>
              <a href="#" className="text-[#FFD700] hover:text-[#E53E3E]">
                {/* <FaFacebookF /> */}
              </a>
              <a href="#" className="text-[#FFD700] hover:text-[#E53E3E]">
                {/* <FaTwitter /> */}
              </a>
            </div>
           
          </div>
        </div>
      </footer>
    </div>
  );
}
