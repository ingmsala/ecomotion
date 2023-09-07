import {Link} from 'react-router-dom';
import WishListItem from '../components/WishListItem';
import {IoHeartDislikeOutline} from 'react-icons/io5';
import useWishList from '../../hooks/useWishList';

export default function WishListContainer() {
  const {wishList, clearWishList} = useWishList();

  const handleRemoveList = e => {
    e.preventDefault();
    clearWishList();
  };

  return (
    <main className='container mx-auto mt-2 flex items-center justify-center flex-col gap-3'>{
      wishList.length === 0
        ? (
          <div className='flex flex-col justify-center items-center mt-10'>
            <div className='text-3xl font-semibold text-gray-400 py-6 px-2'>
              No hay productos en la lista de deseados</div>
            <Link to='/' className='px-4 py-2 items-center gap-2 flex-shrink text-sm font-semibold leading-5 shadow
            text-white transition-colors duration-150
              border border-transparent rounded-lg
            bg-violet-400 active:bg-violet-400 hover:bg-violet-500'>
              volver a la tienda
            </Link>
          </div>
        )
        : (
          <section className='max-w-4xl container mx-auto mt-3 bg-gradient-to-tr from-violet-50 from-80%  to-teal-50
          rounded shadow p-0 flex flex-col gap-2'>

            <header className='flex items-center px-4 py-2 border-b-2
             border-solid border-gray-200 text-center justify-between'>
              <h3 className='text-base font-semibold text-gray-700'>
                Lista de deseados
              </h3>

              <button
                onClick={handleRemoveList}
                className='px-4 py-3 items-center gap-2 flex-shrink text-xs font-semibold leading-5
          text-purple-500 hover:text-purple-700'
              >
                <span className='flex gap-2 justify-center items-center text-xs group'>
                  <span className='hidden group-hover:inline-flex transition-all
                    duration-700 ease-in-out'>
                    Vaciar lista
                  </span>
                  <IoHeartDislikeOutline className='text-xl' />
                </span>
              </button>

            </header>
            <main className='gap-2 flex flex-col'>
              {
                wishList.length > 0
                && wishList?.map((product, index) => (
                  <WishListItem key={product.item.id} product={product} index={index} />
                ))
              }
            </main>
          </section>
        )}
    </main>
  );
}
