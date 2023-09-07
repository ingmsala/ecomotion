import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {updateStockProduct} from '../services/products';
import useCart from './useCart';
import useOrder from './useOrder';
import useAuth from './useAuth';
import {toast} from 'sonner';

export function useCheckout() {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const {user} = useAuth();
  const {cart, getPricesCart, removeList} = useCart();
  const {saveOrder} = useOrder();
  const navigate = useNavigate();

  const validateForm = form => {
    const fields = Object.fromEntries(new FormData(form));
    const errorsForm = {};

    if (!user) {
      const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!fields.name) {
        errorsForm.name = 'El nombre es requerido';
      }

      if (!fields.email) {
        errorsForm.email = 'El email es requerido';
      } else if (!fields.email.match(mailformat)) {
        errorsForm.email = 'El email no es válido';
      }

      if (!fields.emailRepeat) {
        errorsForm.emailRepeat = 'El email es requerido';
      } else if (!fields.emailRepeat.match(mailformat)) {
        errorsForm.emailRepeat = 'El email no es válido';
      }

      if (fields.email !== fields.emailRepeat && fields.emailRepeat !== '') {
        errorsForm.emailRepeat = 'Los emails no coinciden';
        errorsForm.email = 'Los emails no coinciden';
      }
    }

    if (!fields.phone) {
      errorsForm.phone = 'El teléfono es requerido';
    }

    setErrors(errorsForm);
    return errorsForm;
  };

  const buyCart = async buyer => {
    setIsLoading(true);
    const itemsToBuy = cart.map(product => ({
      id: product.item.id,
      title: product.item.nombre,
      quantity: product.cantidad,
      price: product.item.precio,
      personalization: product.item.personalization,
    }));
    let fixBuyer = {};
    if (user) {
      fixBuyer = {
        name: user.displayName,
        email: user.email,
        phone: buyer.phone,
      };
    } else {
      fixBuyer = Object.fromEntries(
        Object.entries(buyer).filter(([field]) => field !== 'emailRepeat'),
      );
    }

    const [subTotal, shipping] = getPricesCart();
    new Promise(resolve => {
      resolve(updateStockProduct(cart));
    }).then(async newStockProduct => {
      if (newStockProduct === false) {
        toast.error('No se puede realizar la compra por falta de stock');
        setIsLoading(false);
        return;
      }

      const newOrder = {
        items: itemsToBuy,
        buyer: fixBuyer,
        shipping,
        total: subTotal + shipping,
        state: 'generada',
      };

      const docRef = await saveOrder(newOrder);

      removeList();
      setIsLoading(false);
      toast.success('Se generó la orden de compra correctamente');
      navigate('brief/' + docRef.id, {replace: true});
    });
  };

  return {validateForm, errors, buyCart, isLoading};
}
