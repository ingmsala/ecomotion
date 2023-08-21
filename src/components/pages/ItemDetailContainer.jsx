import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import ItemDetail from './ItemDetail';
import Loading from '../widgets/Loading';
import useProduct from '../../hooks/useProduct';

export default function ItemDetailContainer() {
  const {id} = useParams();
  const {getProductItemById, itemProduct, loading} = useProduct();

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
        loading
          ? <Loading />
          : <ItemDetail item={itemProduct} />
      }
    </main>
  );
}
