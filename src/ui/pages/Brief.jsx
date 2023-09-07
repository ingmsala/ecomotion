import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Loading from '../widgets/Loading';
import OrderResume from '../components/OrderResume';
import OrderListItem from '../components/OrderListItem';
import NoFound from './NoFound';
import useOrder from '../../hooks/useOrder';

export default function Brief() {
  const {getOrderItemById, isLoading, orderSearch} = useOrder();

  const {idOrder} = useParams();

  useEffect(() => {
    let ignore = false;

    async function getOrder() {
      await getOrderItemById(idOrder);
    }

    if (!ignore) {
      getOrder();
    }

    return () => {
      ignore = true;
    };
  }, [idOrder]);

  return (
    <main className='container flex flex-col items-center mx-auto flex-wrap justify-center gap-5 w-full mt-3'>
      {

        isLoading
          ? <Loading />
          : orderSearch.date === undefined
            ? <NoFound />
            : <>
              <header className=''>
                <h3 className='text-2xl font-bold text-gray-700'>Resumen de la compra</h3>
              </header>
              <section className='flex gap-4 '>
                <OrderListItem order={orderSearch} />
                <OrderResume orden={orderSearch} />
              </section>
            </>
      }

    </main>
  );
}
