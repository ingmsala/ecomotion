import {Link} from 'react-router-dom';
import Image from '../widgets/Image';
import {getCategoryColor} from '../../utils/categrory';
import noFoundImage from '../../assets/images/noFoundImage.webp';

export default function Item({product}) {
  const classEtiqueta = getCategoryColor(product.categoria);

  const image = product.imagen ? product.imagen : noFoundImage;

  return (
    <article>
      <Link to={`/item/${product.id}`} className='
      bg-gradient-to-tr from-violet-100 from-30% via-blue-50 via-95% to-teal-50
      rounded shadow-2xl p-0 max-w-max
      flex flex-col relative justify-between
      hover:scale-105 transition-all '>

        <div className={`absolute top-4 left-0 z-10
        ${classEtiqueta}
         rounded-r py-1 px-4 text-xs uppercase text-gray-800`}>
          {product.categoria}
        </div>

        <Image className='h-64 w-64 rounded-t bg-cover p-1 m-1' src={image} alt={'Imagen de ' + product.nombre} />

        <div className='text-base uppercase text-gray-800 font-bold text-center flex-1 self-center py-4'>
          {product.nombre}
        </div>

        <div className={` py-2 px-3 text-white rounded-b text-center 
        ${product.stock > 0 ? ' bg-teal-700/50' : ' bg-orange-700/50'}`}>

          <span className='font-bold text-lg'>
            {
              product.stock > 0
                ? `$ ${product.precio?.toLocaleString('es-AR')}`
                : 'Sin stock'
            }
          </span>

        </div>

      </Link>
    </article>

  );
}
