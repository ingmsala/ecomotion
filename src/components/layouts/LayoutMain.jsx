import {Outlet} from 'react-router-dom';
import Navbar from './Navbar';
import {CartProvider} from '../../context/cart';
import {Toaster} from 'sonner';

export default function LayoutMain() {
  return (
    <CartProvider>
      <header>
        <Navbar />
      </header>
      <Toaster />
      <Outlet />

    </CartProvider>
  );
}
