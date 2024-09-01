import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../page/AuthProvider';

function Logout() {
  const { setIsLogin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogin(false); // Log out the user
    navigate('/'); // Redirect to home page
  }, [navigate, setIsLogin]); // Dependencies to ensure effect runs correctly

  return null; // Return null since this component is just for side effects
}

export default Logout;
