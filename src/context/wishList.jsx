import {createContext, useState} from 'react';
import {toast} from 'sonner';

export const WishListContext = createContext();

export const WishListProvider = ({children}) => {
  const wishListStorage = localStorage.getItem('wishList');
  const initialWishList = wishListStorage ? JSON.parse(wishListStorage) : [];
  const [wishList, setWishList] = useState(initialWishList);

  const isInWishList = id => wishList.some(product => product.item.id === id);

  const updateLocalStorageWishList = wishList => {
    localStorage.setItem('wishList', JSON.stringify(wishList));
  };

  const addToWishList = (item, cantidad) => {
    if (isInWishList(item.id)) {
      setWishList([...wishList, {item, cantidad}]);
      const newWishList = wishList.map(productInWishList => {
        if (productInWishList.item.id === item.id) {
          if (item.personalization) {
            const newPersonalizations = [...productInWishList.item.personalization];
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
            cantidad: productInWishList.cantidad + cantidad,
          };
        }

        return productInWishList;
      });
      setWishList(newWishList);
      updateLocalStorageWishList(newWishList);
    } else {
      const newWishList = [...wishList, {item, cantidad}];
      setWishList(newWishList);
      updateLocalStorageWishList(newWishList);
    }

    toast.success('Producto agregado a la lista de deseos');
  };

  const removeFromWishList = id => {
    const newWishList = wishList.filter(product => product.item.id !== id);
    setWishList(newWishList);
    updateLocalStorageWishList(newWishList);
    return newWishList;
  };

  const clearWishList = () => {
    setWishList([]);
    updateLocalStorageWishList([]);
  };

  const getQuantityWishList = () => wishList.length;

  return (
    <WishListContext.Provider value={{
      wishList,
      addToWishList,
      removeFromWishList,
      clearWishList,
      getQuantityWishList,
    }}>
      {children}
    </WishListContext.Provider>
  );
};
