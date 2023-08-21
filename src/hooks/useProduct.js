import {useState} from 'react';
import {getProductById, getProducts, getProductsByCategory} from '../services/products';
import useCart from './useCart';

export default function useProduct() {
  const [productos, setProductos] = useState([]);
  const [itemProduct, setItemProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const {cart} = useCart();

  const getRealStock = item => {
    const productSearch = cart.find(i => i.item.id === item.id);
    return productSearch ? productSearch.item.stock : item.stock;
  };

  async function listProducts() {
    setLoading(true);
    const listadoProducts = await getProducts();
    const fixedListado = fixStockList(listadoProducts);
    setProductos(fixedListado);

    setLoading(false);
  }

  async function listProductsByCategory(categoryId) {
    setLoading(true);
    const listadoProducts = await getProductsByCategory(categoryId);
    const fixedListado = fixStockList(listadoProducts);
    setProductos(fixedListado);

    setLoading(false);
  }

  async function getProductItemById(id) {
    setLoading(true);
    const item = await getProductById(id);
    const fixedItem = fixStockItem(item);
    setItemProduct(fixedItem);
    setLoading(false);
  }

  function fixStockList(listadoProducts) {
    return listadoProducts.map(item => fixStockItem(item));
  }

  function fixStockItem(item) {
    const cantidadStock = getRealStock(item);
    const newItem = {...item};
    newItem.stock = cantidadStock;
    return newItem;
  }

  return {
    listProducts,
    listProductsByCategory,
    productos,
    loading,
    getProductItemById,
    getRealStock,
    itemProduct,
  };
}
