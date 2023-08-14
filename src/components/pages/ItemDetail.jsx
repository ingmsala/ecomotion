import {useNavigate} from 'react-router-dom';
import {getCategoryColor} from '../../utils/categrory';
import ItemCount from './ItemCount';
import {GrClose} from 'react-icons/gr';

export default function ItemDetail({item}) {
  const navigate = useNavigate();

  const classEtiqueta = getCategoryColor(item.categoria);

  const image = (item.imagen)
    ? require(`../../assets/products/${item.imagen}`)
    : '';

  return (

    <section className='container mx-auto md:max-w-4xl mt-3 rounded shadow relative
      flex flex-col items-center gap-5 md:p-0 p-4
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

      <img className='w-2/4 md:w-94 md:rounded-l' src={image} alt={'Imagen de ' + item.nombre} />

      <div className='flex flex-col justify-between items-start gap-3 '>

        <h3 className='text-3xl font-semibold text-gray-600'>{item.nombre}</h3>

        <div className={`top-4 left-0 rounded py-1 px-4 text-xs uppercase text-gray-800 ${classEtiqueta}`}>
          {item.categoria}
        </div>
        <div>
          <span className='text-2xl font-semibold text-gray-600'>$ {item.precio?.toLocaleString('es-AR')}</span>
        </div>

        <ItemCount stock={item.stock} initial={1} onAdd={ () => {
          console.log('agregar al carrito');
        }} />
        <p className='text-start text-gray-600 mt-5'>
          {item.descripcion}
        </p>

      </div>

    </section>

  );
}
