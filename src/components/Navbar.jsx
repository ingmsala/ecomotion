import logoEcomotion from '../assets/images/logoEcomotion.png';
import {AiOutlineHome} from 'react-icons/ai';
import {GiKickScooter} from 'react-icons/gi';
import {PiBicycleDuotone} from 'react-icons/pi';
import {TbHelmet} from 'react-icons/tb';
import CartWidget from './CartWidget';

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center
      px-5 w-full flex-wrap md:flex-nowrap md:h-14'>
      <a href='#'>
        <img src={logoEcomotion} className='w-40' alt='Logo Ecomotion' />
      </a>

      <ul className='flex flex-wrap justify-center items-center '>
        <li>
          <a href='#' className='p-2 text-teal-700 flex flex-col justify-center items-center
            hover:bg-indigo-200 group border-b-2 hover:border-indigo-600 border-teal-800
            hover:text-indigo-600'>
            <div className='group-hover:scale-125 transition-all'><AiOutlineHome /></div>
            <div>Home</div>
          </a>
        </li>
        <li>
          <a href='#' className='p-2 text-teal-700 flex flex-col justify-center items-center
            hover:bg-indigo-200 group border-b-2 hover:border-indigo-600 border-transparent
            hover:text-indigo-600'>
            <div className='group-hover:scale-125 transition-all'><GiKickScooter /></div>
            <div>Scooters</div>
          </a>
        </li>
        <li>
          <a href='#' className='p-2 text-teal-700 flex flex-col justify-center items-center
            hover:bg-indigo-200 group border-b-2 hover:border-indigo-600 border-transparent
            hover:text-indigo-600'>
            <div className='group-hover:scale-125 transition-all'><PiBicycleDuotone /></div>
            <div>Bicicletas</div>
          </a>
        </li>
        <li>
          <a href='#' className='p-2 text-teal-700 flex flex-col justify-center items-center
            hover:bg-indigo-200 group border-b-2 hover:border-indigo-600 border-transparent
            hover:text-indigo-600'>
            <div className='group-hover:scale-125 transition-all'><TbHelmet /></div>
            <div>Accesorios</div>
          </a>
        </li>
      </ul>

      <CartWidget />

    </nav>
  );
}
