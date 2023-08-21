import {Link} from 'react-router-dom';
import useCart from '../../hooks/useCart';
import CartResume from './CartResume';
import CartListItem from './CartListItem';

export default function Cart({edit = true}) {
  const {cart} = useCart();

  return (
    <main className='container mx-auto mt-2 flex items-center justify-center flex-col gap-3'>

      {
        cart.length === 0
          ? (
            <>
              <div className='text-3xl font-semibold text-gray-400 py-6 px-2'>No hay productos en el carrito</div>
              <Link to='/' className='px-4 py-2 items-center gap-2 flex-shrink text-sm font-semibold leading-5 shadow
            text-white transition-colors duration-150
              border border-transparent rounded-lg
            bg-violet-400 active:bg-violet-400 hover:bg-violet-500'>
              volver a la tienda
              </Link>
            </>
          )
          : (
            <div className='flex flex-col md:flex-row justify-center gap-10'>
              <CartListItem edit={edit} />
              <CartResume edit={edit} />
            </div>
          )
      }
    </main>
  );
}
