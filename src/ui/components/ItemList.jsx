import {Link} from 'react-router-dom';
import Item from './Item';

export default function ItemList({products}) {
  return (

    <section className='flex flex-wrap justify-center gap-3 mt-5 '>
      {
        products.length === 0
          ? <div className='flex flex-col justify-center items-center mt-10'>
            <div className='text-3xl font-semibold text-gray-400 py-6 px-2'>No hay productos para mostrar</div>
            <Link to='/' className='px-4 py-2 items-center gap-2 flex-shrink text-sm font-semibold leading-5 shadow
            text-white transition-colors duration-150
              border border-transparent rounded-lg
            bg-violet-400 active:bg-violet-400 hover:bg-violet-500'>
              volver a la tienda
            </Link>
          </div>
          : products.map(product => (
            <article key={product.id}>
              <Item product={product} />
            </article>
          ))
      }
    </section>

  );
}
