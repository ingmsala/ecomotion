import {BsCartX} from 'react-icons/bs';
import useCart from '../../hooks/useCart';
import CartItem from './CartItem';

export default function CartListItem({edit}) {
  const {cart, removeList} = useCart();

  const handleRemoveList = () => {
    removeList();
  };

  return (
    <section className='max-w-3xl'>
      <div className=' bg-gradient-to-tr from-violet-50 from-80%  to-teal-50
                   rounded shadow p-0 flex flex-col gap-2'>
        <div className={`flex items-center px-4 py-2 border-b-2
                   border-solid border-gray-200 text-center` + (edit ? ' justify-between' : ' justify-center')}>
          <h3 className='text-base font-semibold text-gray-700'>
            Productos
          </h3>
          {
            edit && (
              <button
                onClick={handleRemoveList}
                className='px-4 py-3 items-center gap-2 flex-shrink text-xs font-semibold leading-5
                        text-violet-400'
              >
                <span className='flex gap-2 justify-center items-center text-xs group'>
                  <span className='hidden group-hover:inline-flex transition-all
                          duration-700 ease-in-out'>
                    Vaciar carrito
                  </span>
                  <BsCartX className='text-xl' />
                </span>
              </button>
            )
          }
        </div>
        {
          cart?.map((producto, index) => (
            <CartItem key={producto.item.id} producto={producto} index={index} edit={edit} />
          ))
        }
      </div>
    </section>
  );
}
