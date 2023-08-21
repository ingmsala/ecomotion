import {useState} from 'react';
import useCart from './useCart';
import {useNavigate} from 'react-router-dom';

export function useCheckout() {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const {cart, getPricesCart} = useCart();
  const navigate = useNavigate();

  const validateForm = form => {
    const fields = Object.fromEntries(new FormData(form));
    const errorsForm = {};
    const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!fields.name) {
      errorsForm.name = 'El nombre es requerido';
    }

    if (!fields.email) {
      errorsForm.email = 'El email es requerido';
    } else if (!fields.email.match(mailformat)) {
      errorsForm.email = 'El email no es válido';
    }

    if (!fields.phone) {
      errorsForm.phone = 'El teléfono es requerido';
    }

    setErrors(errorsForm);
    return errorsForm;
  };

  const buyCart = buyer => {
    setLoading(true);
    const cartBuyer = cart.map(product => ({
      id: product.item.id,
      title: product.item.nombre,
      quantity: product.cantidad,
      price: product.item.precio,
    }));

    const [subTotal, envio] = getPricesCart();

    // TODO date from firebase

    const date = new Date();

    console.log({items: cartBuyer, buyer, date: date.getTime(), envio, total: subTotal + envio});
    // RemoveList();
    setLoading(false);
    navigate('brief', {replace: true});
  };

  return {validateForm, errors, buyCart, loading};
}
