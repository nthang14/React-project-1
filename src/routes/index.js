import HomePage from '~/pages/Home';
import CartPage from '~/pages/Cart';
import CategoryPage from '~/pages/Category';
import DetailPage from '~/pages/Detail';
import CheckoutPage from '~/pages/Checkout';
import EmptyLayout from '~/components/Layouts/EmptyLayout';

import Login from '~/pages/Login';
const publicRoutes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/cart',
    component: CartPage,
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
    path: '/checkout',
    component: CheckoutPage,
    layout: EmptyLayout,
  },
  {
    path: '/login',
    component: Login,
    layout: EmptyLayout,
  },
];
const privateRoutes = {};
export { publicRoutes, privateRoutes };
