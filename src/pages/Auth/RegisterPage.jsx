import { FaUserPlus, FaPhone, FaGoogle, FaFacebook } from "react-icons/fa";
import { GiAfrica } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#faf7f2] flex items-center">
      <div className="container mx-auto px-4 max-w-xl">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* En-tête */}
          <div className="text-center mb-8">
            <GiAfrica className="text-5xl text-[#E53E3E] mx-auto mb-4" />
            <h1 className="text-3xl font-title text-[#2D3748] mb-2">
              Rejoignez la <span className="text-[#E53E3E]">Communauté</span>
            </h1>
            <p className="text-gray-600">Créez votre compte en 1 minute</p>
          </div>

          {/* Formulaire */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 lg:gap-3">
              <div>
                <label className="block text-[#2D3748] mb-2">Nom complet</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#E53E3E]"
                  placeholder="Awa Diop"
                  required
                />
              </div>

              <div>
                <label className="block text-[#2D3748] mb-2">Email</label>
                <input
                  type="email"
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
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#E53E3E] pl-12"
                    placeholder="77 123 45 67"
                    required
                  />
                  <div className="absolute left-3 top-3.5 text-gray-400">
                    +221
                  </div>
                  <FaPhone className="absolute right-3 top-3.5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-[#2D3748] mb-2">
                  Mot de passe
                </label>
                <input
                  type="password"
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

            {/* Conditions */}
            <p className="text-sm text-gray-500 text-center">
              En cliquant sur S'inscrire, vous acceptez nos{" "}
              <Link to="/conditions" className="text-[#E53E3E] hover:underline">
                Conditions d'utilisation
              </Link>
            </p>
          </form>

          {/* Séparateur */}
          <div className="my-8 flex items-center gap-0">
            <div className="flex-1 h-px bg-gray-200"></div>
            {/* <span className="text-gray-400">Ou continuer avec</span> */}
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Boutons Sociaux */}
          {/* <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#DB4437] text-white p-3 rounded-lg hover:bg-opacity-90">
              <FaGoogle />
              Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#3B5998] text-white p-3 rounded-lg hover:bg-opacity-90">
              <FaFacebook />
              Facebook
            </button>
          </div> */}

          {/* Lien Connexion */}
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
