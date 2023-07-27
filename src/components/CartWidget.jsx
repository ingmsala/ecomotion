import {PiShoppingCartSimpleThin} from 'react-icons/pi';

export default function CartWidget() {
  const cartCount = 6;

  return (
    <a href='#' className='p-2 relative flex justify-center items-center w-14 h-14
    hover:bg-indigo-200 group border-b-2 hover:border-indigo-600 border-transparent
    hover:text-indigo-600'>
      <div className='group-hover:scale-105 transition-all
        text-4xl text-teal-700 group-hover:text-indigo-600 absolute'>
        <PiShoppingCartSimpleThin />
      </div>

      {
        cartCount > 0
        && <span
          className=' text-teal-700 text-[0.7rem]
            flex justify-center items-center
            group-hover:bg-indigo-200 group-hover:text-indigo-600 '>
          {cartCount}
        </span>
      }
    </a>

  );
}
