import {useEffect, useState} from 'react';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';

export default function ItemCount({stock, initial, onAdd}) {
  const [cantidadProducto, setCantidadProducto] = useState(initial);

  useEffect(() => {
    /* If (cantidadProducto > stock) {
      setCantidadProducto(stock);
    } */
    setCantidadProducto(1);
  }, [stock]);

  const handleClickSumar = () => {
    if (cantidadProducto < stock) {
      setCantidadProducto(cantidadProducto + 1);
    }
  };

  const handleClickRestar = () => {
    if (cantidadProducto > 1) {
      setCantidadProducto(cantidadProducto - 1);
    }
  };

  if (stock < 1) {
    return (
      <div className='flex flex-col items-center'>
        <div className='flex items-center'>
          <span className='px-3 py-1 text-gray-700 font-semibold'>Sin stock</span>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='grid grid-cols-3 gap-3'>
        <button onClick={handleClickRestar} disabled={cantidadProducto < 2}
          className='px-2 py-1 rounded bg-teal-600/80
            disabled:opacity-60 disabled:cursor-not-allowed enabled:hover:bg-teal-700'>
          <AiOutlineMinus className='text-white' />

        </button>

        <span className='text-gray-700 font-semibold '>{cantidadProducto}</span>

        <button onClick={handleClickSumar} disabled={cantidadProducto >= stock}
          className='px-2 py-1 rounded bg-teal-600/80
            disabled:opacity-60 disabled:cursor-not-allowed enabled:hover:bg-teal-700'>
          <AiOutlinePlus className='text-white' />
        </button>

      </div>
      {
        stock > 0
          ? <button
            className='px-3 py-1 mt-2 rounded bg-transparent
            border border-purple-600 text-purple-600 border-solid
            hover:bg-purple-800 hover:text-white hover:border-transparent'
            onClick={() => onAdd(cantidadProducto)}>Agregar al carrito
          </button>
          : <div className='flex items-center'>
            <span className='px-3 py-1 text-gray-700 font-semibold'>Sin stock</span>
          </div>

      }

    </div>

  );
}
