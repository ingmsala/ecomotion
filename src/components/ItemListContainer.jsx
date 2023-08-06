import {useEffect, useState} from 'react';
// Import ItemCount from './ItemCount';
import ItemList from './ItemList';
import {getProducts} from '../services/products';
import {CgSpinner} from 'react-icons/cg';

export default function ItemListContainer(/* {greeting} */) {
  // Const [stock, setStock] = useState(15);
  // const [cantItemsCarrito, setCantItemsCarrito] = useState(0);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Const [info, setInfo] = useState(greeting);

  /* function onAdd(cantidad) {
    if (cantidad <= stock && cantidad > 0) {
      setInfo(`Agregaste ${cantidad} productos`);
      setStock(stock - cantidad);
      setCantItemsCarrito(cantItemsCarrito + cantidad);
    }
  } */

  useEffect(() => {
    async function listProducts() {
      setLoading(true);
      const listadoProducts = await getProducts();
      setProductos(listadoProducts);
      setLoading(false);
    }

    listProducts();
  }, []);

  return (
    <div className='mx-auto max-w-6xl flex items-center justify-center'>
      {/* <div className='mt-10 px-8 py-4 bg-gray-100 shadow rounded text-gray-500 text-center flex flex-col'>
        <div>Stock: {stock}</div>
        < ItemCount stock={stock} initial={1} onAdd={onAdd} />
        <div>{info}</div>
        <div>Items en carrito: {cantItemsCarrito}</div>
      </div> */}

      {
        loading
          ? <div className='
           flex flex-col justify-center items-center'>
            <CgSpinner className='animate-spin h-16 w-16 mt-10 text-gray-500/80' />
          </div>
          : <ItemList productos={productos} />
      }

    </div>
  );
}
