import { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../api/client';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const userData = await authAPI.getProfile();
          setUser(userData);
        }
      } catch (error) {
        logout();
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const login = async (email, password) => {
    try {
      const { token, user } = await authAPI.login({ email, password });
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      redirectBasedOnRole(user.role);
    } catch (error) {
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const { token, user } = await authAPI.register(userData);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      redirectBasedOnRole(user.role);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/connexion');
  };

  const redirectBasedOnRole = (role) => {
    const routes = {
      client: '/dashboard',
      coiffeur: '/coiffeur/agenda',
      admin: '/admin/utilisateurs'
    };
    navigate(routes[role] || '/');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);