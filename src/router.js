import {createBrowserRouter} from 'react-router-dom';
import LayoutMain from './ui/layouts/LayoutMain';
import ItemListContainer from './ui/pages/ItemListContainer';
import ItemDetailContainer from './ui/pages/ItemDetailContainer';
import NoFound from './ui/pages/NoFound';
import Cart from './ui/pages/Cart';
import Checkout from './ui/pages/Checkout';
import Brief from './ui/pages/Brief';
import WishListContainer from './ui/pages/WishListContainer';
import {resetAllStockProduct, setProducts} from './services/products';
import {setCategories} from './services/categories';

export default createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
    errorElement: <NoFound />,
    children: [
      {
        path: '/',
        element: <ItemListContainer />,
      },
      {
        path: '/category/:categoryId',
        element: <ItemListContainer />,
      },
      {
        path: '/item/:id',
        element: <ItemDetailContainer />,
        errorElement: <NoFound />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/wishlist',
        element: <WishListContainer />,
      },

      {
        path: '/checkout',
        children: [
          {
            index: true,
            element: <Checkout />,
          },

          {
            path: 'brief/:idOrder',
            element: <Brief />,
            errorElement: <NoFound />,
          },
        ],
      },

      {
        path: '*',
        element: <NoFound />,
      },
      {
        path: '/migrate_product',
        element: <ItemListContainer />,
        async loader() {
          await setProducts();
          return {
            element: <ItemListContainer />,
          };
        },
      },
      {
        path: '/migrate_categories',
        element: <ItemListContainer />,
        async loader() {
          await setCategories();
          return {
            element: <ItemListContainer />,
          };
        },
      },
      {
        path: '/reset_stock',
        async loader() {
          await resetAllStockProduct();
          return {
            element: <ItemListContainer />,
          };
        },
        element: <ItemListContainer />,
      },
    ],

  },

]);
