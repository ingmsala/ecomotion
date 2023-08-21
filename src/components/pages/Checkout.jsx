
import CartListItem from './CartListItem';
import CartResume from './CartResume';
import {useCheckout} from '../../hooks/useCheckout';
import useCart from '../../hooks/useCart';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {toast} from 'sonner';
import InputForm from '../widgets/InputForm';

export default function Checkout() {
  const {errors, validateForm, buyCart} = useCheckout();
  const {cart, calcItemsQty} = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (calcItemsQty() === 0) {
      toast.error('No hay productos en el carrito');
      navigate('/');
    }
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
      <section className='flex flex-col gap-4 max-w-sm'>
        <CartListItem edit={false} cart={cart} />
        <CartResume edit={false} />
      </section>
      <section className='max-w-sm w-full'>
        <form onSubmit={handleSubmit} className='w-full'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col w-full max-w-2xl px-0 pb-8
            bg-gradient-to-tr from-violet-50 from-80%  to-teal-50
            rounded shadow '>
              <header className='text-base font-semibold text-gray-700
                  border-b-2 border-solid border-gray-200 py-4 text-center'>
                  Checkout
              </header>
              <div className='mt-5'>
                <div className='flex flex-col mb-2'>
                  <InputForm
                    errorField={errors.name}
                    label='Nombre Completo'
                    idName='name'
                    placeholder=''
                    type='text'
                    focus = {true}
                  />
                </div>
                <div className='flex flex-col mb-2'>
                  <InputForm
                    errorField={errors.email}
                    label='Correo electrónico'
                    idName='email'
                    placeholder=''
                    type='text'
                  />
                </div>
                <div className='flex flex-col mb-2'>
                  <InputForm
                    errorField={errors.phone}
                    label='Teléfono'
                    idName='phone'
                    placeholder=''
                    type='text'
                  />
                </div>
                <button
                  type='submit'
                  className='flex w-11/12 mx-auto px-4 py-2 tracking-wide text-white justify-center
                  transition-colors mt-6 duration-200 transform
                  bg-violet-500 rounded hover:bg-violet-600 focus:outline-none focus:bg-violet-400'
                >
                  Ordene ahora
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>

    </main>
  );
}
