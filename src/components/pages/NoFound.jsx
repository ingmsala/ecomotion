import {Link} from 'react-router-dom';
import NoFoundImage from '../../assets/images/404.webp';

export default function NoFound() {
  return (
    <main className='flex items-center justify-center'>
      <section className='flex flex-col md:flex-row items-center justify-center gap-4 px-5 text-gray-700'>
        <div className='max-w-md '>
          <div className='text-5xl font-bold text-violet-400'>
            404
          </div>
          <p className='text-2xl md:text-3xl font-light leading-normal'>
            Lo siento. No hemos podido encontrar esta página
          </p>
          <p className='mb-3 mt-4'>
            Pero no te preocupes, puedes encontrar muchas otras cosas en nuestra tienda.
          </p>
          <Link to='/' className='px-4 py-2 items-center gap-2 flex-shrink text-sm font-semibold leading-5 shadow
            text-white transition-colors duration-150
            border border-transparent rounded-lg
            bg-violet-400 active:bg-violet-400 hover:bg-violet-500'>
              volver a la tienda
          </Link>
        </div>
        <div className='max-w-lg order-first md:order-last'>
          <img src={NoFoundImage} alt='Página no encontrada' />
        </div>

      </section>
    </main>
  );
}
