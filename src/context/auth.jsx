import {createContext, useState} from 'react';
import {loginWithGoogleService, logoutGoogleService} from '../services/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const loginWithGoogle = async () => {
    await loginWithGoogleService()
      .then(res => setUser(res.user))
      .catch(() => {
        setUser(null);
      });
  };

  const logout = async () => {
    await logoutGoogleService()
      .then(res => setUser(res))
      .catch(() => {
        setUser(null);
      });
  };

  return (
    <AuthContext.Provider value={{
      user,
      logout,
      loginWithGoogle,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
