import {Link} from 'react-router-dom';
import useCart from '../../hooks/useCart';

export default function CartItem({producto, edit, index}) {
  const {deleteItem} = useCart();

  const imageProduct = producto.item.imagen
    ? require(`../../assets/products/${producto.item.imagen}`)
    : '';

  const handleRemove = e => {
    e.preventDefault();
    deleteItem(producto.item);
  };

  return (
    <article className={`w-full border-solid border-gray-200
    flex flex-row justify-start items-center gap-5
                          min-w-3xl py-1 px-4 ` + (index === 0 ? '' : 'border-t')}>
      <Link to={`/item/${producto.item.id}`}>
        <img src={imageProduct} className='rounded-l w-20' />
      </Link>
      <div className='flex md:grid md:grid-cols-3 gap-3 justify-between items-center w-full'>
        <div className='flex flex-col items-start gap-2'>
          <Link to={`/item/${producto.item.id}`}>
            <div className='flex flex-wrap font-semibold text-gray-600'>{producto.item.nombre}</div>
          </Link>
          {
            edit && <button
              onClick={handleRemove}
              className='text-sm font-semibold text-purple-500 hover:text-purple-800'>
            Eliminar
            </button>
          }

        </div>
        <Link to={`/item/${producto.item.id}`}>
          <div className='text-center  text-gray-600'><span className='text-sm'>×</span>{producto.cantidad}</div>
        </Link>
        <Link to={`/item/${producto.item.id}`}>
          <div className='text-right font-semibold text-gray-600'>
          $ {(producto.item.precio * producto.cantidad).toLocaleString('es-AR')}
          </div>
        </Link>
      </div>

    </article>
  );
}
