import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import NoFound from './NoFound';
import Loading from '../widgets/Loading';
import ItemDetail from '../components/ItemDetail';
import useProduct from '../../hooks/useProduct';

export default function ItemDetailContainer() {
  const {id} = useParams();
  const {getProductItemById, itemProduct, isLoading} = useProduct();

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      getProductItemById(id);
    }

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <main>
      {
        isLoading
          ? <Loading />
          : (
            Object.keys(itemProduct).length === 0
              ? <NoFound />
              : <ItemDetail item={itemProduct} />
          )
      }
    </main>
  );
}
