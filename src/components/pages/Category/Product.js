import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/common/Button';
import { useTranslation } from 'react-i18next';
import { imageResizeURL } from '~/utils/helpers/index';
const cx = classNames.bind(styles);

function Product({ product, handleQuickView }) {
  const { _id, _source } = product;
  const navigate = useNavigate();
  const { t } = useTranslation(['common']);
  const [isQuickView, setIsQuickVIew] = useState(false);
  return (
    <div className="pt-0.5 pb-0.5" onMouseEnter={() => setIsQuickVIew(true)} onMouseLeave={() => setIsQuickVIew(false)}>
      <div className="flex align-center justify-center cursor-pointer relative">
        <img
          className="category-product__image"
          src={imageResizeURL(_source.image)}
          alt={_source.name}
          loading="lazy"
          onClick={() => {
            navigate(`/product/${_id}`);
          }}
        />
        {isQuickView && (
          <div className={`absolute z-50 ${cx('product-button-quick-view')}`}>
            <Button
              className={`hover:bg-yellow bg-orange text-white font-bold flex items-center justify-around`}
              onClick={handleQuickView}
            >
              <div className="text-white font-bold">{t('addToCart')}</div>
            </Button>
          </div>
        )}
      </div>
      <div
        className={`category-product__title text-one-line pt-0.5 hover:underline cursor-pointer`}
        onClick={() => {
          navigate(`/product/${_id}`);
        }}
      >
        {_source.name}
      </div>
      <div className={`font-bold text-center text-red`}>${_source.price}</div>
    </div>
  );
}
export default memo(Product);
