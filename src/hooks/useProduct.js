import {useState} from 'react';
import {checkStockProductService, getProductById,
  getProducts, getProductsByCategory, resetAllStockProduct} from '../services/products';
import useCart from './useCart';

export default function useProduct() {
  const [products, setProducts] = useState([]);
  const [itemProduct, setItemProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isInStock, setIsInStock] = useState(false);

  const {cart} = useCart();

  const getLocalStock = item => {
    const productSearch = cart.find(i => i.item.id === item.id);
    return productSearch ? productSearch.item.stock : item.stock;
  };

  async function listProducts() {
    setIsLoading(true);
    const listProducts = await getProducts();
    const fixedList = fixStockList(listProducts);
    setProducts(fixedList);
    setIsLoading(false);
  }

  async function listProductsByCategory(categoryId) {
    setIsLoading(true);
    const listProducts = await getProductsByCategory(categoryId);

    if (listProducts === null) {
      setProducts([]);
      setIsLoading(false);
      return;
    }

    const fixedList = fixStockList(listProducts);
    setProducts(fixedList);
    setIsLoading(false);
  }

  async function getProductItemById(id) {
    setIsLoading(true);
    const item = await getProductById(id);
    if (!item) {
      setIsLoading(false);
      setItemProduct({});
      return;
    }

    const fixedItem = fixStockItem(item);
    setItemProduct(fixedItem);
    setIsLoading(false);
  }

  async function resetAllStock() {
    setIsLoading(true);
    await resetAllStockProduct();
    listProducts();
    setIsLoading(false);
  }

  async function checkStockProduct(product, cantidad) {
    setIsLoading(true);
    const inStock = await checkStockProductService(product, cantidad);
    setIsInStock(inStock);
    setIsLoading(false);
  }

  function fixStockList(listProducts) {
    return listProducts.map(item => fixStockItem(item));
  }

  function fixStockItem(item) {
    const qtyStock = getLocalStock(item);
    const newItem = {...item};
    newItem.stock = qtyStock;
    return newItem;
  }

  return {
    listProducts,
    listProductsByCategory,
    products,
    isLoading,
    getProductItemById,
    getLocalStock,
    itemProduct,
    resetAllStock,
    checkStockProduct,
    isInStock,

  };
}
