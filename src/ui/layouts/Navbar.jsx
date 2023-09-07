import {useState} from 'react';
import {Link} from 'react-router-dom';
import Menu from '../components/Menu';
import {GiHamburgerMenu} from 'react-icons/gi';
import logoEcomotion from '../../assets/images/logoEcomotion.png';
import useCategory from '../../hooks/useCategory';

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const {categories} = useCategory();

  return (
    <>
      <nav className='mx-auto flex items-center
      justify-between h-16 px-4'>
        <Link to='/'>
          <img src={logoEcomotion} className='w-40' alt='Logo Ecomotion' />
        </Link>
        <div className='hidden md:flex flex-1'>
          <Menu categories={categories} />
        </div>
        <button
          type='button'
          className='md:hidden inline-flex items-center justify-center p-2
          rounded-md text-violet-600 hover:text-white hover:bg-violet-700 focus:outline-none
           focus:bg-violet-700 focus:text-white transition duration-150 ease-in-out'
          onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <GiHamburgerMenu />
        </button>
      </nav>
      {
        showMobileMenu && (
          <div className='md:hidden'>
            <Menu categories={categories} />
          </div>
        )
      }
    </>
  );
}
