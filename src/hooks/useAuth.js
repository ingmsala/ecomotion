import {useContext} from 'react';
import {AuthContext} from '../context/auth';

export default function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth debe estar dentro del proveedor AuthContext');
  }

  return context;
}
