import {createContext, useState} from 'react';
import {toast} from 'sonner';
import {DISCOUNT_LIMIT, DISCOUNT_PERCENTAGE} from '../constants/cart';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const cartStorage = localStorage.getItem('cart');
  const initialCart = cartStorage ? JSON.parse(cartStorage) : [];
  const [cart, setCart] = useState(initialCart);

  const updateLocalStorageCart = cart => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const addToCart = (item, cantidadProducto) => {
    let confirmInfo = '';
    if (isInCart(item)) {
      const newCart = cart.map(productInCart => {
        if (productInCart.item.id === item.id) {
          return {
            item,
            cantidad: productInCart.cantidad + cantidadProducto,
          };
        }

        return productInCart;
      });

      updateLocalStorageCart(newCart);
      setCart(newCart);
      confirmInfo = (cantidadProducto > 1)
        ? 'Se agregaron ' + cantidadProducto + ' subproductos al carrito'
        : 'Se agregó ' + cantidadProducto + ' subproducto al carrito';
    } else {
      const newCart = [...cart, {item, cantidad: cantidadProducto}];
      setCart(newCart);
      updateLocalStorageCart(newCart);
      confirmInfo = (cantidadProducto > 1)
        ? 'Se agregaron ' + cantidadProducto + ' productos al carrito'
        : 'Se agregó ' + cantidadProducto + ' producto al carrito';
    }

    toast.success(confirmInfo);
  };

  const deleteItem = item => {
    const newCart = cart.filter(product => product.item.id !== item.id);
    setCart(newCart);
    updateLocalStorageCart(newCart);
  };

  const removeList = () => {
    setCart([]);
    updateLocalStorageCart([]);
  };

  const isInCart = item => {
    const found = cart.find(product => product.item.id === item.id);
    if (found) {
      return true;
    }

    return false;
  };

  const calcItemsQty = () => {
    let productCount = 0;
    cart.forEach(product => {
      productCount += product.cantidad;
    });
    return productCount;
  };

  const getPricesCart = () => {
    let subTotal = 0;
    cart.forEach(product => {
      subTotal += (product.cantidad * product.item.precio);
    });
    const envio = (subTotal < DISCOUNT_LIMIT) ? subTotal * DISCOUNT_PERCENTAGE : 0;
    return [subTotal, envio];
  };

  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      addToCart,
      deleteItem,
      removeList,
      isInCart,
      calcItemsQty,
      getPricesCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};
