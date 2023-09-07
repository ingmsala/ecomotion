import {useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import useOrder from '../../hooks/useOrder';
import useAuth from '../../hooks/useAuth';
import {toast} from 'sonner';

export default function OrderSearchForm() {
  const {getOrderItemByIdAndUser, orderSearch} = useOrder();
  const navigate = useNavigate();
  const {user} = useAuth();
  const orderInput = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const orderId = formData.get('orderId');

    if (orderId === '') {
      toast.error('Ingrese un número de orden');
      return;
    }

    toast.promise(getOrderItemByIdAndUser(orderId, user), {
      isLoading: 'Buscando orden...',
      success() {
        orderInput.current.value = null;
        return 'Orden encontrada';
      },
      error(error) {
        return error.message;
      },
    });
  };

  useEffect(() => {
    if (orderSearch) {
      navigate(`/checkout/brief/${orderSearch.id}`);
    }
  }, [orderSearch]);

  return (
    user === null ? null
      : (
        <form onSubmit={handleSubmit} className='block w-3/4 mx-auto
          md:w-auto md:mx-0 md:flex justify-center items-center gap-2 order-last md:order-none'>
          <div className='flex rounded-md overflow-hidden w-full'>
            <input type='text'
              name='orderId'
              id='orderId'
              placeholder='Orden: 123456'
              ref={orderInput}
              className='w-full rounded-md rounded-r-none pl-2 pr-5 py-2 mt-5 md:py-0 md:mt-0
          bg-violet-50 focus:bg-white focus:outline-none
          placeholder:text-xs sm:text-xs
          focus:ring-0 focus:border-red-500 focus:border-l-0
          ' />
            <button className='bg-teal-800 hover:bg-indigo-600
        text-white px-2 text-sm font-semibold py-1 rounded-r-md mt-5 md:py-1 md:mt-0'><BsSearch /></button>
          </div>
        </form>
      )
  );
}
