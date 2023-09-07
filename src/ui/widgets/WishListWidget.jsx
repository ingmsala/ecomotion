import NavLink from './NavLink';
import {BiSolidHeart} from 'react-icons/bi';
import {CiHeart} from 'react-icons/ci';
import useWishList from '../../hooks/useWishList';

export default function WishListWidget() {
  const {wishList} = useWishList();

  return (

    <NavLink to='/wishlist' className='p-2 relative flex justify-center items-center w-14 h-14
      group'>
      <div className='group-hover:scale-105 transition-all
        text-4xl text-teal-700 group-hover:text-indigo-600 absolute'>
        {
          wishList.length > 0
            ? <span><BiSolidHeart /></span>
            : <span><CiHeart /></span>
        }
      </div>
    </NavLink>

  );
}
