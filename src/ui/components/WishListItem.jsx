import {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import DetailCounter from './DetailCounter';
import Image from '../widgets/Image';
import {PiSpinnerGapThin} from 'react-icons/pi';
import {BsCartPlus} from 'react-icons/bs';
import {AiOutlineDelete} from 'react-icons/ai';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import useWishList from '../../hooks/useWishList';

export default function WishListItem({product, index}) {
  const {checkStockProduct, isInStock, isLoading} = useProduct();
  const {addToCart} = useCart();
  const {removeFromWishList} = useWishList();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product.item, product.cantidad);
    const newWishList = removeFromWishList(product.item.id);
    if (newWishList.length === 0) {
      navigate('/cart');
    }
  };

  useEffect(() => {
    checkStockProduct(product, product.cantidad);
  }, [product]);

  return (
    <article className={`w-full border-solid border-gray-200
        flex flex-row justify-center items-center gap-5
        min-w-3xl py-4 px-4 ` + (index === 0 ? '' : 'border-t')}>
      {

        isLoading
          ? <PiSpinnerGapThin
            className='flex items-center justify-center animate-spin h-7 w-7 text-gray-500/80' />
          : (
            <div className='flex flex-col md:grid md:grid-cols-5 gap-3 justify-between items-center w-full'>
              <Link to={`/item/${product.item.id}`}>
                <Image src={product.item.imagen} className='rounded-l w-20 h-20' />
              </Link>
              <div className='flex flex-col items-start gap-2'>
                <Link to={`/item/${product.item.id}`}>
                  <div className='flex flex-wrap font-semibold text-gray-600'>{product.item.nombre}</div>
                </Link>
                {

                  !isInStock
                  && <div className='text-start text-red-600 text-xs'>
                    * No se puede agregar al carrito porque la cantidad supera el stock
                  </div>

                }
              </div>
              <Link to={`/item/${product.item.id}`}>
                <DetailCounter personalization={product.item.personalization} cantidad={product.cantidad} />
              </Link>
              <Link to={`/item/${product.item.id}`}>
                <div className='text-right font-semibold text-gray-600'>
            $ {(product.item.precio * product.cantidad).toLocaleString('es-AR')}
                </div>
              </Link>
              <div className='w-full flex gap-5 items-center justify-center'>
                {
                  isInStock
                  && <button onClick={handleAddToCart}>
                    <div className='flex flex-col items-center
                    text-sm font-semibold text-purple-500 hover:text-purple-700'>
                      <BsCartPlus className='text-base' />
                      <div>Agrergar</div>
                    </div>
                  </button>
                }
                <button
                  onClick={() => removeFromWishList(product.item.id)}
                  className='text-sm font-semibold text-purple-500 hover:text-purple-700'>
                  <div className='flex flex-col items-center
                    text-sm font-semibold text-purple-500 hover:text-purple-700'>
                    <AiOutlineDelete className='text-base' />
                    <div>Eliminar</div>
                  </div>
                </button>
              </div>

            </div>
          )
      }
    </article>
  );
}
