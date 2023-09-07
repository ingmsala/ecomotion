import CartWidget from '../widgets/CartWidget';
import NavLink from '../widgets/NavLink';
import UserWidget from '../widgets/UserWidget';
import NavLinkSkeleton from '../widgets/NavLinkSkeleton';
import WishListWidget from '../widgets/WishListWidget';
import OrderSearchForm from '../components/OrderSearchForm';
import {AiOutlineHome} from 'react-icons/ai';
import {getCategoryIcon} from '../../utils/categrory';

export default function Menu({categories}) {
  return (
    <section className='w-full flex flex-col md:flex-row'>

      <ul className='flex flex-1 flex-col md:flex-row justify-center items-center '>

        {
          categories.length > 0
            ? <>
              <li>
                <NavLink to='/'>
                  <div className='group-hover:scale-125 transition-all'><AiOutlineHome /></div>
                  <div>Home</div>
                </NavLink>
              </li>
              {
                categories.map(category => (
                  <li key={category.id}>
                    <NavLink to={`/category/${category.key}`}>
                      <div className='group-hover:scale-125 transition-all'>{getCategoryIcon(category.key)}</div>
                      <div>{category.description}</div>
                    </NavLink>
                  </li>
                ))
              }
            </>

            : <ul className='flex flex-col gap-2 items-center md:flex-row justify-center'>
              <NavLinkSkeleton />
              <NavLinkSkeleton />
              <NavLinkSkeleton />
              <NavLinkSkeleton />
            </ul>

        }

      </ul>

      <OrderSearchForm />

      <div className='flex justify-center items-center gap-2'>
        <WishListWidget />
      </div>
      <ul className='flex flex-col items-center md:flex-row justify-center'>

        <li><CartWidget /></li>
        <li><UserWidget /></li>

      </ul>
    </section>
  );
}
