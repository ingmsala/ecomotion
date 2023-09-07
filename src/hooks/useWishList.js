import {useContext} from 'react';
import {WishListContext} from '../context/wishList';

export default function useWishList() {
  const context = useContext(WishListContext);

  if (!context) {
    throw new Error('useWishList debe estar dentro del proveedor WishListContext');
  }

  return context;
}
