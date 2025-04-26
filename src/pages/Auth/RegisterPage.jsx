import { FaUserPlus, FaPhone } from "react-icons/fa";
import { GiAfrica } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://192.168.1.85:5000/api/register", formData);
      alert(response.data.message);
      navigate("/rendezvous"); // Redirigez vers la page de prise de rendez-vous après l'inscription
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      alert(error.response?.data?.message || "Une erreur est survenue.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/public/page.jpg')`,
      }}
    >
      <div className="container mx-auto px-4 max-w-xl">
        <div className="bg-white/50 backdrop-blur-md rounded-2xl shadow-2xl p-8">
          {/* En-tête */}
          <div className="text-center mb-8">
            <GiAfrica className="text-5xl text-[#E53E3E] mx-auto mb-4" />
            <h1 className="text-3xl font-title text-[#2D3748] mb-2">
              Rejoignez la <span className="text-[#E53E3E]">Communauté</span>
            </h1>
            <p className="text-gray-600">Créez votre compte en 1 minute</p>
          </div>

          {/* Formulaire */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 lg:gap-3">
              <div>
                <label className="block text-[#2D3748] mb-2">Nom complet</label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#E53E3E]"
                  required
                />
              </div>

              <div>
                <label className="block text-[#2D3748] mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#E53E3E]"
                  placeholder="contact@exemple.sn"
                  required
                />
              </div>

              <div>
                <label className="block text-[#2D3748] mb-2">Téléphone</label>
                <div className="relative">
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#E53E3E] pl-12"
                    required
                  />
                  <FaPhone className="absolute right-3 top-3.5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-[#2D3748] mb-2">Mot de passe</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#E53E3E]"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#E53E3E] to-[#DD6B20] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <FaUserPlus />
              S'inscrire
            </button>

            <p className="text-sm text-gray-500 text-center">
              En cliquant sur S'inscrire, vous acceptez nos{" "}
              <Link to="/conditions" className="text-[#E53E3E] hover:underline">
                Conditions d'utilisation
              </Link>
            </p>
          </form>

          <div className="my-8 flex items-center gap-0">
            <div className="flex-1 h-px bg-gray-200"></div>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <p className="text-center mt-8">
            Déjà membre ?{" "}
            <Link
              to="/login"
              className="text-[#E53E3E] font-semibold hover:text-[#F56565]"
            >
              Connectez-vous ici
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
