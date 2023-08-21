import {useEffect} from 'react';
import ItemList from './ItemList';

import {useParams} from 'react-router-dom';

import Loading from '../widgets/Loading';
import useProduct from '../../hooks/useProduct';

export default function ItemListContainer(/* {greeting} */) {
  // Const [stock, setStock] = useState(15);
  // const [cantItemsCarrito, setCantItemsCarrito] = useState(0);
  const {listProducts, listProductsByCategory, loading, productos} = useProduct();
  const {categoryId} = useParams();

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      if (categoryId === undefined) {
        listProducts();
      } else {
        listProductsByCategory(categoryId);
      }
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
