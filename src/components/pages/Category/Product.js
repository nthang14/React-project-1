import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/common/Button';
import { useTranslation } from 'react-i18next';
import { imageResizeURL } from '~/utils/helpers/index';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function Product({ product, handleQuickView, ...rest }) {
  const { _id, _source } = product;
  const navigate = useNavigate();
  const { t } = useTranslation(['common']);
  const [isQuickView, setIsQuickVIew] = useState(false);
  const { slug } = useParams();
  return (
    <div className="pt-0.5 pb-0.5" onMouseEnter={() => setIsQuickVIew(true)} onMouseLeave={() => setIsQuickVIew(false)}>
      <div className="flex align-center justify-center cursor-pointer relative">
        <img
          className="category-product__image"
          src={imageResizeURL(product?.variantDefault?.imageSrc || product?.images[0].src)}
          alt={product.title}
          loading="lazy"
          onClick={() => {
            navigate(`/product/${product._id}`);
          }}
        />
        {isQuickView && rest.isModal && (
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
          navigate(`/product/${product._id}`);
        }}
      >
        {product.title}
      </div>
      <div className={`font-bold text-center text-red`}>${product.variantDefault.price}</div>
    </div>
  );
}
export default memo(Product);
