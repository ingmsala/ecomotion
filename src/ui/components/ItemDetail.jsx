import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import NoFound from '../pages/NoFound';
import ItemCount from './ItemCount';
import {GrClose} from 'react-icons/gr';
import Image from '../widgets/Image';
import {MdOutlineShoppingCartCheckout} from 'react-icons/md';
import {getCategoryColor, getPersonalizationsByCategory} from '../../utils/categrory';
import useCart from '../../hooks/useCart';

export default function ItemDetail({item}) {
  const navigate = useNavigate();
  const {addToCart} = useCart();
  const [itemToAdd, setItemToAdd] = useState(item);
  const [canBuy, setCanBuy] = useState(false);

  if (!itemToAdd) {
    return <NoFound />;
  }

  const classEtiqueta = getCategoryColor(itemToAdd.categoria);
  const personalizationsList = getPersonalizationsByCategory(itemToAdd.categoria);
  const initialPersonalization = personalizationsList[0].options[0];
  const [personalizationItem, setPersonalizationItem] = useState(initialPersonalization);

  const handleAddToCart = (item, productCount) => {
    const newItem = {...item};
    newItem.stock -= productCount;

    if (personalizationItem === '') {
      newItem.personalization = [{label: personalizationsList[0].label, cantidad: productCount}];
    } else {
      newItem.personalization = [{label: personalizationItem, cantidad: productCount}];
    }

    addToCart(newItem, productCount);
    setItemToAdd(newItem);

    setCanBuy(true);
  };

  const handlePersonaliztion = e => {
    setPersonalizationItem(e.target.value);
    setCanBuy(false);
  };

  return (

    <section className='container mx-auto md:max-w-4xl mt-3 rounded shadow relative
      flex flex-col items-center gap-5 md:p-2 p-4
      md:grid md:grid-cols-5
      bg-gradient-to-tr from-violet-50 from-80%  to-teal-50'>

      <button
        type='button'
        onClick={() => {
          navigate(-1);
        }}
        className='absolute top-2 right-2 text-gray-500 hover:text-gray-800 hover:scale-105'>
        <GrClose />
      </button>

      <Image className='md:col-span-2 h-full'
        src={itemToAdd.imagen} alt={'Imagen de ' + itemToAdd.nombre} />

      <div className='md:col-span-3 flex flex-col justify-between items-start gap-3 '>

        <h3 className='text-3xl font-semibold text-gray-600'>{itemToAdd.nombre}</h3>

        <div className={`top-4 left-0 rounded py-1 px-4 text-xs uppercase text-gray-800 ${classEtiqueta}`}>
          {itemToAdd.categoria}
        </div>
        <div>
          <span className='text-2xl font-semibold text-gray-600'>$ {itemToAdd.precio?.toLocaleString('es-AR')}</span>
        </div>
        <div>

          {
            itemToAdd.stock > 0 && personalizationsList?.map(personalization =>
              (
                <div key={personalization.label}>
                  <div className='text-sm text-violet-400'>{personalization.label}</div>
                  <div className='flex gap-2'>
                    {
                      personalization.options.map(option => (
                        <button onClick={handlePersonaliztion} value={option}
                          className={'px-3 border border-solid border-gray-300 '
                          + `rounded-sm ${personalizationItem === option ? ' bg-gray-300' : ''}`}
                          key={option}>
                          {option}
                        </button>
                      ))
                    }
                  </div>
                </div>
              ),
            )
          }
        </div>

        {

          canBuy === true
            ? (
              <Link to='/cart'
                className='px-3 py-1 mt-2 rounded bg-transparent
                border border-purple-600 text-purple-600 border-solid
                hover:bg-purple-800 hover:text-white hover:border-transparent flex justify-center items-center gap-2'
              >
                <MdOutlineShoppingCartCheckout />
                Terminar mi compra
              </Link>
            )
            : <ItemCount item={itemToAdd} initial={1} onAdd={handleAddToCart} />
        }

        <p className='text-start text-gray-600 mt-5'>
          {itemToAdd.descripcion}
        </p>

      </div>
    </section>

  );
}
