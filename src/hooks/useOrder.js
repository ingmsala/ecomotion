import {useState} from 'react';
import {getOrderById, getOrderByIdAndUser, insertOrder} from '../services/orders';

export default function useOrder() {
  const [isLoading, setIsLoading] = useState(true);
  const [orderSearch, setOrderSearch] = useState();

  const getOrderItemById = async id => {
    const order = await getOrderById(id);
    setOrderSearch(order);
    setIsLoading(false);
  };

  const getOrderItemByIdAndUser = async (id, user) => {
    if (!user) {
      throw new Error('El usuario no está autenticado');
    }

    const order = await getOrderByIdAndUser(id, user);

    setOrderSearch(order);
    setIsLoading(false);
  };

  const saveOrder = async order => {
    const newOrder = await insertOrder(order);
    return newOrder;
  };

  return {
    getOrderById,
    saveOrder,
    getOrderItemById,
    isLoading,
    orderSearch,
    getOrderItemByIdAndUser,
  };
}
