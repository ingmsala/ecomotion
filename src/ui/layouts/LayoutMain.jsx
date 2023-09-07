import {Outlet} from 'react-router-dom';
import Navbar from './Navbar';
import {CartProvider} from '../../context/cart';
import {AuthProvider} from '../../context/auth';
import {WishListProvider} from '../../context/wishList';
import {Toaster} from 'sonner';

export default function LayoutMain() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishListProvider>
          <Navbar />
          <Toaster richColors />
          <Outlet />
        </WishListProvider>
      </CartProvider>
    </AuthProvider>
  );
}
