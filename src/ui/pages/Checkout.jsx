import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Loading from '../widgets/Loading';
import CartListItem from '../components/CartListItem';
import CartResume from '../components/CartResume';
import CheckoutForm from '../components/CheckoutForm';
import useCart from '../../hooks/useCart';
import {useCheckout} from '../../hooks/useCheckout';
import {toast} from 'sonner';

export default function Checkout() {
  const {itemsQty} = useCart();
  const {errors, validateForm, buyCart, isLoading} = useCheckout();

  const navigate = useNavigate();

  useEffect(() => {
    if (itemsQty === 0) {
      toast.error('No hay productos en el carrito');
      navigate('/');
    }

    return () => {
    };
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const errors = validateForm(form);
    if (Object.keys(errors).length) {
      return;
    }

    const buyer = Object.fromEntries(new FormData(form));
    buyCart(buyer);
  };

  return (
    <main className='container flex flex-wrap justify-center gap-5 md:gap-20 mx-auto'>

      {
        isLoading
          ? <Loading />
          : <>
            <section className='flex flex-col gap-4 max-w-sm'>
              <CartListItem edit={false} />
              <CartResume edit={false} />
            </section>
            <section className='max-w-sm w-full'>
              <CheckoutForm handleSubmit={handleSubmit} errors={errors} />
            </section>
          </>
      }

    </main>
  );
}
