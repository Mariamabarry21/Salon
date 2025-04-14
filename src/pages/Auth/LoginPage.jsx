import { FaSignInAlt, FaLock, FaGoogle, FaFacebook } from "react-icons/fa";
import { GiAfrica } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#faf7f2] flex items-center">
      <div className="container mx-auto px-4 max-w-lg">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
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
          <form className="space-y-6">
            <div>
              <label className="block text-[#2D3748] mb-2">Email</label>
              <input
                type="email"
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
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#E53E3E] pr-10"
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

          {/* Lien Inscription */}
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
}
