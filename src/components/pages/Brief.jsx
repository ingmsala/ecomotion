
import CartListItem from './CartListItem';
import CartResume from './CartResume';

import useCart from '../../hooks/useCart';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {toast} from 'sonner';

export default function Brief() {
  const {calcItemsQty} = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (calcItemsQty() === 0) {
      toast.error('No hay productos en el carrito');
      navigate('/');
    }
  }, []);

  // TODO: Agregar Numero de orden desde FIREBASE
  return (
    <main className='container flex flex-col items-center mx-auto flex-wrap justify-center gap-5 w-full mt-3'>
      <header className=''>
        <h3 className='text-2xl font-bold text-gray-700'>Resumen de la compra</h3>
        <div>Número de orden: 0001</div>
        <div>Fecha: 0001</div>
      </header>
      <section className='flex gap-4 '>
        <CartListItem edit={false} />
        <CartResume edit={false} />
      </section>
    </main>
  );
}
