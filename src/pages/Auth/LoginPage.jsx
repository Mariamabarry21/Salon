import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaSignInAlt, FaLock } from "react-icons/fa";
import { GiAfrica } from "react-icons/gi";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://192.168.1.85:5000/api/login", formData);
      alert(response.data.message);

      // Stockez le token dans le localStorage
      localStorage.setItem("token", response.data.token);

      // Redirigez vers la page personnelle avec l'ID du client
      const clientId = response.data.client.id_client;
      navigate(`/dashboard/${clientId}`);
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      alert(error.response?.data?.message || "Une erreur est survenue.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/public/page.jpg')`, // Assurez-vous que l'image est accessible
      }}
    >
      <div className="container mx-auto px-4 max-w-lg">
        <div className="bg-white/50 backdrop-blur-md rounded-2xl shadow-2xl p-8">
          {/* En-tête */}
          <div className="text-center mb-8">
            <GiAfrica className="text-5xl text-[#E53E3E] mx-auto mb-4" />
            <h1 className="text-3xl font-title text-[#2D3748] mb-2">
              Bienvenue sur{" "}
              <span className="text-[#E53E3E]">ÉléganceDakar</span>
            </h1>
            <p className="text-gray-600">
              Connectez-vous à votre espace client
            </p>
          </div>

          {/* Formulaire */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[#2D3748] mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#E53E3E] focus:border-transparent"
                placeholder="contact@exemple.sn"
                required
              />
            </div>

            <div>
              <label className="block text-[#2D3748] mb-2">Mot de passe</label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#E53E3E] pr-10"
                  placeholder="Entrez votre mot de passe"
                  required
                />
                <FaLock className="absolute top-4 right-3 text-gray-400" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#E53E3E] to-[#DD6B20] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <FaSignInAlt />
              Se connecter
            </button>

            <div className="text-center">
              <Link
                to="/mot-de-passe-oublie"
                className="text-[#E53E3E] hover:text-[#F56565] text-sm"
              >
                Mot de passe oublié ?
              </Link>
            </div>
          </form>

          <div className="my-8 flex items-center gap-0">
            <div className="flex-1 h-px bg-gray-200"></div>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <p className="text-center mt-8">
            Nouveau client ?{" "}
            <Link
              to="/register"
              className="text-[#E53E3E] font-semibold hover:text-[#F56565]"
            >
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;