import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '@/contexts/AuthContext';

const PrivateRoute = ({ allowedRoles = ['client', 'coiffeur'] }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;