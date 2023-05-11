import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import ProductInCart from '~/components/pages/Cart/ProductInCart';
import { useTranslation } from 'react-i18next';
import { useCallback, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentCart, increaseQuantity, decreaseQuantity, removeProduct } from '~/store/cart';
const cx = classNames.bind(styles);
const list = JSON.parse(localStorage.getItem('cart/current')) || [];
function ListProductsInCart() {
  const { t } = useTranslation('cart');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentCart(list));
  }, []);
  const currentCart = useSelector((state) => state.cart.currentCart);

  const handleAddMoreProduct = useCallback((product) => {
    dispatch(increaseQuantity(product));
  }, []);
  const handleDiffProduct = useCallback((product) => {
    dispatch(decreaseQuantity(product));
  }, []);
  const total = useMemo(() => {
    return currentCart.reduce((total, currentProduct) => total + currentProduct.price * currentProduct.quantity, 0);
  }, []);
  return (
    <div>
      <div className={`${cx('cart__title')}`}>{t('yourCart')}</div>
      <div className="py-0.5">
        {currentCart.map((item) => {
          return (
            <ProductInCart
              key={item.id}
              product={item}
              onAddMoreProduct={handleAddMoreProduct}
              onDiffProduct={handleDiffProduct}
            />
          );
        })}
      </div>
      <div>
        {t('total')}: {total}
      </div>
    </div>
  );
}
export default ListProductsInCart;
