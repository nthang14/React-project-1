import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import ProductInCart from '~/components/pages/Cart/ProductInCart';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentCart, increaseQuantity, decreaseQuantity, removeProduct, selectorCart } from '~/store/cart';
import Button from '~/components/common/Button';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function ListProductsInCart() {
  const { t } = useTranslation('cart');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getCurrentCart(
        JSON.parse(localStorage.getItem('cart/current')) ? JSON.parse(localStorage.getItem('cart/current')) : [],
      ),
    );
  }, []);
  const currentCart = useSelector((state) => state.cart.currentCart);

  useEffect(() => {
    localStorage.setItem('cart/current', JSON.stringify(currentCart));
  }, [currentCart]);
  const totalPrice = useSelector(selectorCart);

  const handleAddMoreProduct = useCallback(
    (product) => {
      dispatch(increaseQuantity(product));
    },
    [dispatch],
  );
  const handleDiffProduct = useCallback(
    (product) => {
      dispatch(decreaseQuantity(product));
    },
    [dispatch],
  );
  const handleRemoveProduct = useCallback(
    (product) => {
      dispatch(removeProduct(product));
    },
    [dispatch],
  );

  return (
    <div className="flex flex-col justify-between mini-cart">
      <div className={`${cx('cart__title')}`}>{t('yourCart')}</div>
      <div className="py-0.5 mini-cart__list-product overflow-hidden overflow-y-auto grow h-28">
        {currentCart.map((item) => {
          return (
            <ProductInCart
              key={item._id}
              product={item}
              onAddMoreProduct={handleAddMoreProduct}
              onDiffProduct={handleDiffProduct}
              onRemoveProduct={handleRemoveProduct}
            />
          );
        })}
      </div>
      <div className={`${cx('mini-cart__footer')} h-10 pt-0.5 pb-1`}>
        <div className="flex items-center justify-between">
          <div className={`${cx('total-cart')}`}>{t('total')}</div>
          <div className={`${cx('total-cart')} text-red`}>${totalPrice}</div>
        </div>
        <div className="pt-px">
          <Button className={`hover:bg-yellow bg-orange text-white font-bold flex items-center my-0.5 justify-around`}>
            <div className={`text-white font-bold ${cx('total-cart')}`}>{t('viewCart')}</div>
          </Button>
          <div
            onClick={() => navigate('/checkout')}
            className={`text-center font-bold ${cx('total-cart')} hover:underline`}
          >
            {t('checkout')}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ListProductsInCart;
