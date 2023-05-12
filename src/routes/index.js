import HomePage from '~/pages/Home';
import CartPage from '~/pages/Cart';
import CategoryPage from '~/pages/Category';
import DetailPage from '~/pages/Detail';
import CheckoutPage from '~/pages/Checkout';
import EmptyLayout from '~/components/Layouts/EmptyLayout';

import Login from '~/pages/Auth/Login';
import Register from '~/pages/Auth/Register';

const publicRoutes = [
  {
    path: '/',
    component: HomePage,
  },

  {
    path: '/category/:slug',
    component: CategoryPage,
  },
  {
    path: '/product/:id',
    component: DetailPage,
  },

  {
    path: '/auth/login',
    component: Login,
    layout: EmptyLayout,
  },
  {
    path: '/auth/register',
    component: Register,
    layout: EmptyLayout,
  },
  {
    path: '/cart',
    component: CartPage,
    layout: null,
  },
  {
    path: '/checkout',
    component: CheckoutPage,
    layout: null,
  },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
