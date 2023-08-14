import {useEffect, useState} from 'react';
import ItemList from './ItemList';

import {useParams} from 'react-router-dom';
import {getProducts, getProductsByCategory} from '../../services/products';
import Loading from '../widgets/Loading';

export default function ItemListContainer(/* {greeting} */) {
  // Const [stock, setStock] = useState(15);
  // const [cantItemsCarrito, setCantItemsCarrito] = useState(0);

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const {categoryId} = useParams();

  useEffect(() => {
    let ignore = false;
    async function listProducts() {
      setLoading(true);
      const listadoProducts = await getProducts();
      if (!ignore) {
        setProductos(listadoProducts);
      }

      setLoading(false);
    }

    async function listProductsByCategory() {
      setLoading(true);
      const listadoProducts = await getProductsByCategory(categoryId);
      if (!ignore) {
        setProductos(listadoProducts);
      }

      setLoading(false);
    }

    if (categoryId === undefined) {
      listProducts();
    } else {
      listProductsByCategory();
    }

    return () => {
      ignore = true;
    };
  }, [categoryId]);

  return (

    <main className='mx-auto max-w-6xl flex items-center justify-center'>
      {
        loading
          ? <Loading />
          : <ItemList productos={productos} />
      }
    </main>
  );
}
