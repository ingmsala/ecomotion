import {useNavigate} from 'react-router-dom';
import {getCategoryColor} from '../../utils/categrory';
import ItemCount from './ItemCount';
import {GrClose} from 'react-icons/gr';
import NoFound from './NoFound';
import useCart from '../../hooks/useCart';
import {useState} from 'react';
// Import useProduct from '../../hooks/useProduct';
// import {useEffect} from 'react';

export default function ItemDetail({item}) {
  const navigate = useNavigate();
  const {addToCart} = useCart();
  const [itemAux, setItemAux] = useState(item);
  // Const {getRealStock} = useProduct();

  if (!itemAux) {
    return <NoFound />;
  }

  /* UseEffect(() => {
    const cantidadStock = getRealStock(item);
    const newItem = {...item};
    newItem.stock = cantidadStock;
    setItemAux(newItem);
  }, []); */

  const classEtiqueta = getCategoryColor(itemAux.categoria);

  const image = (itemAux.imagen)
    ? require(`../../assets/products/${itemAux.imagen}`)
    : '';

  const handleAddToCart = (item, cantidadProducto) => {
    // Const cantidadStock = getRealStock(item);
    const newItem = {...item};
    newItem.stock -= cantidadProducto;
    addToCart(newItem, cantidadProducto);
    setItemAux(newItem);
  };

  return (

    <section className='container mx-auto md:max-w-4xl mt-3 rounded shadow relative
      flex flex-col items-center gap-5 md:p-2 p-4
      md:flex-row
      bg-gradient-to-tr from-violet-50 from-80%  to-teal-50'>

      <button
        type='button'
        onClick={() => {
          navigate(-1);
        }}
        className='absolute top-2 right-2 text-gray-500 hover:text-gray-800 hover:scale-105'>
        <GrClose />
      </button>

      <img className='w-2/4 md:w-94 md:rounded-l' src={image} alt={'Imagen de ' + itemAux.nombre} />

      <div className='flex flex-col justify-between items-start gap-3 '>

        <h3 className='text-3xl font-semibold text-gray-600'>{itemAux.nombre}</h3>

        <div className={`top-4 left-0 rounded py-1 px-4 text-xs uppercase text-gray-800 ${classEtiqueta}`}>
          {itemAux.categoria}
        </div>
        <div>
          <span className='text-2xl font-semibold text-gray-600'>$ {itemAux.precio?.toLocaleString('es-AR')}</span>
        </div>

        <ItemCount item={itemAux} initial={1} onAdd={handleAddToCart} />
        <p className='text-start text-gray-600 mt-5'>
          {itemAux.descripcion}
        </p>

      </div>
    </section>

  );
}
