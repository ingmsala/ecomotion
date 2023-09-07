import {createContext, useEffect, useState} from 'react';
import {toast} from 'sonner';
import {DISCOUNT_LIMIT, DISCOUNT_PERCENTAGE} from '../constants/cart';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const cartStorage = localStorage.getItem('cart');
  const initialCart = cartStorage ? JSON.parse(cartStorage) : [];
  const [cart, setCart] = useState(initialCart);
  const [itemsQty, setItemsQty] = useState(0);

  useEffect(() => {
    setItemsQty(calcItemsQty());
  }, [cart]);

  const updateLocalStorageCart = cart => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const addToCart = (item, productCount) => {
    if (isInCart(item)) {
      const newCart = cart.map(productInCart => {
        if (productInCart.item.id === item.id) {
          if (item.personalization) {
            const newPersonalizations = [...productInCart.item.personalization];
            item.personalization.forEach(personalizationItem => {
              const found = newPersonalizations.find(
                newPersonalizationItem => newPersonalizationItem.label === personalizationItem.label);
              if (found) {
                found.cantidad += personalizationItem.cantidad;
              } else {
                newPersonalizations.push(personalizationItem);
              }
            });
            item.personalization = newPersonalizations;
          }

          return {
            item,
            cantidad: productInCart.cantidad + productCount,
          };
        }

        return productInCart;
      });

      updateLocalStorageCart(newCart);
      setCart(newCart);
    } else {
      const newCart = [...cart, {item, cantidad: productCount}];
      setCart(newCart);
      updateLocalStorageCart(newCart);
    }

    const confirmInfo = (productCount > 1)
      ? 'Se agregaron ' + productCount + ' productos al carrito'
      : 'Se agregó ' + productCount + ' producto al carrito';

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
    const shipping = (subTotal < DISCOUNT_LIMIT) ? subTotal * DISCOUNT_PERCENTAGE : 0;
    return [subTotal, shipping];
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
      itemsQty,
    }}>
      {children}
    </CartContext.Provider>
  );
};
