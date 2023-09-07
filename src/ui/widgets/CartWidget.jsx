import {PiShoppingCartSimpleThin} from 'react-icons/pi';
import NavLink from './NavLink';
import useCart from '../../hooks/useCart';

export default function CartWidget() {
  const {itemsQty} = useCart();

  return (
    <NavLink to='/cart' className='p-2 relative flex justify-center items-center w-14 h-14
    group'>
      <div className='group-hover:scale-105 transition-all
        text-4xl text-teal-700 group-hover:text-indigo-600 absolute'>
        <PiShoppingCartSimpleThin />
      </div>

      {
        itemsQty > 0
        && <span
          className=' text-teal-700 text-[0.7rem]
            flex justify-center items-center
            group-hover:bg-indigo-200 group-hover:text-indigo-600 '>
          {itemsQty}
        </span>
      }
    </NavLink>

  );
}
