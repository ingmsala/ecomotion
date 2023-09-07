import {Link} from 'react-router-dom';
import useCart from '../../hooks/useCart';
import {DISCOUNT_LIMIT, FREE_TEXT} from '../../constants/cart';

export default function CartResume({edit}) {
  const {itemsQty, getPricesCart} = useCart();

  const [subTotal, shipping] = getPricesCart();
  const total = subTotal + shipping;

  return (
    <section className='max-w-3xl bg-gradient-to-tr from-violet-50 from-80%  to-teal-50
    rounded shadow p-0 flex flex-col gap-2'>

      <header className='text-base font-semibold text-gray-700
          border-b-2 border-solid border-gray-200 py-4 text-center'>
          Resumen
      </header>
      <main className='flex flex-col p-4'>
        <div className='flex justify-between items-center gap-2'>
          <div className='text-gray-600'>Productos <span className='text-xs'>({itemsQty})</span></div>
          <div className='text-gray-600'>$ {subTotal.toLocaleString('es-AR')}</div>
        </div>
        <div className='flex justify-between items-center gap-2 text-xs'>
          <div className='text-gray-600'>Envío</div>
          {
            shipping === 0
              ? <div className='text-green-600'>{FREE_TEXT}</div>
              : <div className='text-gray-600'>$ {shipping.toLocaleString('es-AR')}</div>
          }
        </div>
        {
          shipping !== 0 && edit && (
            <div className=' text-green-600 text-xs mt-4 p-2 bg-emerald-200 rounded'>
              {
                `Agregue productos por la suma de 
                  $ ${(DISCOUNT_LIMIT - subTotal).toLocaleString('es-AR')}
                  para obtener envío gratis`
              }
            </div>
          )

        }
        <div className='flex justify-between items-start mt-5 gap-2 flex-1'>
          <div className='text-gray-600 font-bold text-lg'>Total</div>
          <div className='text-gray-600 font-bold text-lg'>
                      $ {total.toLocaleString('es-AR')}
          </div>
        </div>
        {
          edit && <div className='flex justify-between items-center gap-2'>
            <Link to='/checkout'
              className='w-full flex justify-center
                text-white font-bold text-base bg-teal-600 hover:bg-teal-700 rounded px-3 py-1 mt-8'>
              Continuar compra
            </Link>
          </div>
        }

      </main>

    </section>
  );
}
