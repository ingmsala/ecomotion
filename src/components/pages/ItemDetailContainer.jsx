import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import ItemDetail from './ItemDetail';
import {getProductById} from '../../services/products';
import Loading from '../widgets/Loading';

export default function ItemDetailContainer() {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState({});
  const {id} = useParams();

  useEffect(() => {
    let ignore = false;
    const getItem = async () => {
      setLoading(true);
      const item = await getProductById(id);
      if (!ignore) {
        setItem(item);
      }

      setLoading(false);
    };

    getItem();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <main>
      {
        loading
          ? <Loading />
          : <ItemDetail item={item} />
      }

    </main>
  );
}
