import {useContext} from 'react';
import {CartContext} from '../context/cart';

export default function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart debe estar dentro del proveedor CartContext');
  }

  return context;
}

