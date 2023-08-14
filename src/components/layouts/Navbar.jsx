import logoEcomotion from '../../assets/images/logoEcomotion.png';
import {AiOutlineHome} from 'react-icons/ai';
import {GiKickScooter} from 'react-icons/gi';
import {PiBicycleDuotone} from 'react-icons/pi';
import {TbHelmet} from 'react-icons/tb';
import CartWidget from '../pages/CartWidget';
import NavLink from '../widgets/NavLink';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center
      px-5 w-full flex-wrap md:flex-nowrap md:h-14'>
      <Link to='/'>
        <img src={logoEcomotion} className='w-40' alt='Logo Ecomotion' />
      </Link>

      <ul className='flex flex-wrap justify-center items-center '>
        <li>
          <NavLink to='/'>
            <div className='group-hover:scale-125 transition-all'><AiOutlineHome /></div>
            <div>Home</div>
          </NavLink>
        </li>
        <li>
          <NavLink to='/category/scooters'>
            <div className='group-hover:scale-125 transition-all'><GiKickScooter /></div>
            <div>Scooters</div>
          </NavLink>
        </li>
        <li>
          <NavLink to='/category/bicicletas'>
            <div className='group-hover:scale-125 transition-all'><PiBicycleDuotone /></div>
            <div>Bicicletas</div>
          </NavLink>
        </li>
        <li>
          <NavLink to='/category/accesorios'>
            <div className='group-hover:scale-125 transition-all'><TbHelmet /></div>
            <div>Accesorios</div>
          </NavLink>
        </li>
      </ul>

      <CartWidget />

    </nav>
  );
}
