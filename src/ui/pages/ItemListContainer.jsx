import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Loading from '../widgets/Loading';
import ItemList from '../components/ItemList';
import useProduct from '../../hooks/useProduct';

export default function ItemListContainer() {
  const {listProducts, listProductsByCategory, isLoading, products} = useProduct();
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
        isLoading
          ? <Loading />
          : <ItemList products={products} />
      }
    </main>
  );
}
