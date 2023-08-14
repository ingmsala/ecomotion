import {Link} from 'react-router-dom';
import {getCategoryColor} from '../../utils/categrory';

export default function Item({producto}) {
  let classEtiqueta = '';

  classEtiqueta = getCategoryColor(producto.categoria);

  const image = (producto.imagen)
    ? require(`../../assets/products/${producto.imagen}`)
    : '';

  return (

    <Link to={`/item/${producto.id}`} className='
      bg-gradient-to-tr from-violet-100 from-30% via-blue-50 via-95% to-teal-50
      rounded shadow-2xl p-0 max-w-max
      flex flex-col relative justify-between
      hover:scale-105 transition-all '>

      <div className={`absolute top-4 left-0
        ${classEtiqueta}
         rounded-r py-1 px-4 text-xs uppercase text-gray-800`}>
        {producto.categoria}
      </div>

      <img className='h-64 w-64 rounded-t bg-cover p-1' src={image} alt={'Imagen de ' + producto.nombre} />

      <div className='text-base uppercase text-gray-800 font-bold text-center flex-1 self-center py-4'>
        {producto.nombre}
      </div>

      <div className=' py-2 px-3 bg-teal-700/50 text-white rounded-b text-center'>

        <span className='font-bold text-lg'>
          {
            producto.stock > 0
              ? `$ ${producto.precio?.toLocaleString('es-AR')}`
              : 'Sin stock'
          }
        </span>

      </div>

    </Link>

  );
}
