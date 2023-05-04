import HomePage from '~/pages/Home';
import CartPage from '~/pages/Cart';
import CategoryPage from '~/pages/Category';
import DetailPage from '~/pages/Detail';
import CheckoutPage from '~/pages/Checkout';
import CheckoutLayout from '~/components/Layouts/CheckoutLayout';
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
    layout: CheckoutLayout,
  },
];
const privateRoutes = {};
export { publicRoutes, privateRoutes };
