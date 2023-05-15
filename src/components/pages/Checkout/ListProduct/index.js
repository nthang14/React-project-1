import { useState, useEffect } from 'react';
import { imageResizeURL } from '~/utils/helpers/index';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { current } from '@reduxjs/toolkit';

function ListProduct() {
  const [currentCart, setCurrentCart] = useState(JSON.parse(localStorage.getItem('cart/current')) || []);
  const { t } = useTranslation('cart');
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentCart || !currentCart.length) {
      navigate('/');
    }
  }, []);
  const totalPrice = () => {
    let total =
      currentCart.reduce((total, currentProduct) => total + currentProduct.price * currentProduct.quantity, 0) || 0;
    return total.toFixed(2);
  };
  return (
    <div className="pl-2">
      {currentCart &&
        currentCart.map((item) => {
          return (
            <div className="grid grid-cols-4 pb-1" key={item._id}>
              <div className="col-span-1 relative">
                <img className="w-3" src={imageResizeURL(item.image, 240, 240)} alt={item.name} loading="lazy" />
                <div className="absolute checkout-quantity">{item.quantity}</div>
              </div>
              <div className="col-span-2">{item.name}</div>
              <div className="col-span-1 text-right font-bold">${(item.quantity * item.price).toFixed(2)}</div>
            </div>
          );
        })}
      <div className="checkout-total py-0.5">
        <div className="flex items-center justify-between">
          <div className={`font-bold`}>{t('total')}</div>
          <div className={`text-red font-bold`}>${totalPrice()}</div>
        </div>
      </div>
    </div>
  );
}
export default ListProduct;
