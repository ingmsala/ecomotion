import {Link} from 'react-router-dom';
import Image from '../widgets/Image';
import DetailCounter from './DetailCounter';
import useCart from '../../hooks/useCart';
import useWishList from '../../hooks/useWishList';

export default function CartItem({product, edit, index}) {
  const {deleteItem} = useCart();
  const {addToWishList} = useWishList();

  const imageProduct = product.item.imagen;

  const handleRemove = e => {
    e.preventDefault();
    deleteItem(product.item);
  };

  const handleAddWishList = e => {
    e.preventDefault();
    addToWishList(product.item, product.cantidad);
    deleteItem(product.item);
  };

  return (
    <article className={`w-full border-solid border-gray-200
    flex flex-row justify-start items-center gap-5
                          min-w-3xl py-1 px-4 ` + (index === 0 ? '' : 'border-t')}>
      <Link to={`/item/${product.item.id}`}>
        <Image src={imageProduct} className='rounded-l w-20 h-20' alt={'Imagen de ' + product.item.nombre} />
      </Link>
      <div className='flex md:grid md:grid-cols-3 gap-3 justify-between items-center w-full'>
        <div className='flex flex-col items-start gap-2'>
          <Link to={`/item/${product.item.id}`}>
            <div className='flex flex-wrap font-semibold text-gray-600'>{product.item.nombre}</div>
          </Link>
          {
            edit && <div className='flex gap-5'>
              <button
                onClick={handleRemove}
                className='text-sm font-semibold text-purple-500 hover:text-purple-700'>
                Eliminar
              </button>
              <button
                onClick={handleAddWishList}
                className='text-sm font-semibold text-purple-500 hover:text-purple-700'>
                Guardar
              </button>
            </div>
          }

        </div>
        <Link to={`/item/${product.item.id}`} className='flex justify-center'>
          <DetailCounter personalization={product.item.personalization} cantidad={product.cantidad} />
        </Link>
        <Link to={`/item/${product.item.id}`}>
          <div className='text-right font-semibold text-gray-600'>
          $ {(product.item.precio * product.cantidad).toLocaleString('es-AR')}
          </div>
        </Link>
      </div>

    </article>
  );
}
