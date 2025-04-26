import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "../pages/Contact/ContactPage"; // Import de la page Contact
import Coiffeurs from "../pages/Coiffeur/coiffeurs"; // Assurez-vous que le chemin est correct


// Lazy loading de la page d'accueil
const HomePage = lazy(() => import("../pages/Home/HomePage"));
const LoginPage = lazy(() => import("../pages/Auth/LoginPage"));
const RegisterPage = lazy(() => import("../pages/Auth/RegisterPage"));
const Admin = lazy(() => import("../pages/Admin/admin"));
const Client = lazy(() => import("../pages/Client/client"));
const RdvPage = lazy(() => import("../pages/RdvPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const ReservationPage = lazy(() => import("../pages/ReservationPage"));
const ServicePage = lazy(() => import("../pages/Service"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Chargement...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/client" element={<Client />} />
          <Route path="/coiffeurs" element={<Coiffeurs />} />
          <Route path="/Rdv/:name" element={<RdvPage />} />
          <Route path="/contact" element={<ContactPage />} /> {/* Nouvelle route */}
          <Route path="/dashboard/:id_client" element={<DashboardPage />} /> {/* Nouvelle route pour le tableau de bord */}
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/services" element={<ServicePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
