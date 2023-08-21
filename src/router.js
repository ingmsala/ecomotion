import {createBrowserRouter} from 'react-router-dom';

import LayoutMain from './components/layouts/LayoutMain';
import ItemListContainer from './components/pages/ItemListContainer';
import ItemDetailContainer from './components/pages/ItemDetailContainer';
import NoFound from './components/pages/NoFound';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';
import Brief from './components/pages/Brief';

export default createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
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
        path: '/checkout',
        // Element: <Checkout />,
        children: [
          {
            index: true,
            element: <Checkout />,
          },

          {
            path: 'brief',
            element: <Brief />,
          },
        ],
      },

      {
        path: '*',
        element: <NoFound />,
      },
    ],

  },

]);
