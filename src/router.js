import {createBrowserRouter} from 'react-router-dom';

import LayoutMain from './components/layouts/LayoutMain';
import ItemListContainer from './components/pages/ItemListContainer';
import ItemDetailContainer from './components/pages/ItemDetailContainer';

export default createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
    children: [
      {
        path: '/',
        element: <ItemListContainer />,
        breadcrumbName: 'Home',
      },
      {
        path: '/category/:categoryId',
        element: <ItemListContainer />,
        breadcrumbName: 'Categoria',
      },
      {
        path: '/item/:id',
        element: <ItemDetailContainer />,

      },
    ],

  },

]);
