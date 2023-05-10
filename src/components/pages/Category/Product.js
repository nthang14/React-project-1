import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/common/Button';
const cx = classNames.bind(styles);

function Product({ product, handleQuickView }) {
  const navigate = useNavigate();
  const [isQuickView, setIsQuickVIew] = useState(false);
  return (
    <div className="pt-0.5 pb-0.5" onMouseEnter={() => setIsQuickVIew(true)} onMouseLeave={() => setIsQuickVIew(false)}>
      <div className="flex align-center justify-center cursor-pointer relative">
        <img
          className="category-product__image"
          src={product.image}
          alt={product.title}
          onClick={() => {
            navigate(`/product/${product.id}`);
          }}
        />
        {isQuickView && (
          <div className={`absolute z-50 ${cx('product-button-quick-view')}`}>
            <Button
              className={`bg-sky-400 hover:bg-sky-500 text-white font-bold flex items-center justify-around`}
              onClick={handleQuickView}
            >
              <div className="text-white font-bold">Quick view</div>
            </Button>
          </div>
        )}
      </div>
      <div
        className={`category-product__title text-one-line pt-0.5 hover:underline cursor-pointer`}
        onClick={() => {
          navigate(`/product/${product.id}`);
        }}
      >
        {product.title}
      </div>
      <div className={`font-bold text-center text-red`}>${product.price}</div>
    </div>
  );
}
export default Product;
