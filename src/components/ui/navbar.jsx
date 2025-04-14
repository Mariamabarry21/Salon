import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { GiAfrica, GiHairStrands } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("accueil");

  const navLinks = [
    { name: "Accueil", path: "#acceuil", id: "accueil" },
    { name: "Services", path: "services", id: "services" },
    { name: "Coiffeurs", path: "coiffeurs", id: "coiffeurs" },
    { name: "Galerie", path: "galerie", id: "galerie" },
    { name: "Contact", path: "contact", id: "contact" },
    { name: "Connexion", path: "/login", id: "connexion" },
    { name: "Inscription", path: "/register", id: "inscription" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <GiHairStrands className="text-3xl text-[#E53E3E]" />
            <span className="text-2xl font-title text-[#2D3748]">
              Élégance<span className="text-[#E53E3E]">Dakar</span>
            </span>
          </Link>

          {/* Liens Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`relative px-3 py-2 font-medium ${
                  activeLink === link.id
                    ? "text-[#E53E3E]"
                    : "text-[#2D3748] hover:text-[#E53E3E]"
                } transition-colors`}
                onClick={() => setActiveLink(link.id)}
              >
                {link.name}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#E53E3E] transition-all duration-300 ${
                    activeLink === link.id ? "w-full" : "w-0"
                  }`}
                ></div>
              </Link>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/+221771234567"
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#128C7E] transition-colors"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp
            </a>
            <Link
              to="/rdv"
              className="bg-[#E53E3E] text-white px-6 py-2 rounded-full hover:bg-[#F56565] transition-colors"
            >
              Prendre RDV
            </Link>
          </div>

          {/* Menu Mobile */}
          <button
            className="md:hidden text-[#2D3748] p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <FaBars className="text-2xl" />
          </button>
        </div>

        {/* Menu Mobile Ouvert */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
              <GiAfrica className="text-3xl text-[#E53E3E]" />
              <button
                className="text-[#2D3748] p-2"
                onClick={() => setIsOpen(false)}
                aria-label="Fermer"
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  className={`text-xl ${
                    activeLink === link.id
                      ? "text-[#E53E3E] font-bold"
                      : "text-[#2D3748]"
                  }`}
                  onClick={() => {
                    setActiveLink(link.id);
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              ))}

              <div className="mt-8 flex flex-col gap-4">
                <a
                  href="https://wa.me/+221771234567"
                  className="bg-[#25D366] text-white px-6 py-3 rounded-full flex items-center gap-2 justify-center"
                >
                  <FaWhatsapp className="text-xl" />
                  Contact WhatsApp
                </a>
                <Link
                  to="/rdv"
                  className="bg-[#E53E3E] text-white px-6 py-3 rounded-full text-center"
                >
                  Prendre Rendez-vous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
