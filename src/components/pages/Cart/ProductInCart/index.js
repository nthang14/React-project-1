import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import InputNumber from '~/components/common/InputNumber';
import { imageResizeURL } from '~/utils/helpers/index';

function ProductInCart({ product, onAddMoreProduct, onDiffProduct, onRemoveProduct }) {
  const { t } = useTranslation('cart');
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(product.quantity);
  const redirect = () => {
    navigate(`/product/${product.id}`);
  };
  const handleUpQuantity = () => {
    setQuantity((pre) => pre + 1);
    onAddMoreProduct(product);
  };
  const handleDownQuantity = () => {
    setQuantity((pre) => pre - 1);
    onDiffProduct(product);
  };
  const handleRemoveProduct = () => {
    onRemoveProduct(product);
  };
  return (
    <div className={`grid grid-cols-5 gap-1 py-0.5`}>
      <div className="col-span-2 flex items-start justify-center">
        <img onClick={() => redirect} className="h-4 w-auto" src={imageResizeURL(product.image)} alt={product.title} />
      </div>
      <div className="col-span-3">
        <div className="grid grid-cols-7">
          <div className="col-span-6">
            <div className="hover:underline" onClick={() => redirect}>
              {product.name}
            </div>
            <div className="flex items-center justify-between py-px">
              <div className="py-px font-bold text-red">${product.price}</div>
              <div>x{product.quantity}</div>
            </div>
            <div className="py-px">
              <InputNumber
                label={t('quantity')}
                value={quantity}
                onUpArrow={handleUpQuantity}
                onDownArrow={handleDownQuantity}
                min={1}
              />
            </div>
          </div>
          <div className="col-span-1 text-right">
            <FontAwesomeIcon icon={faTrash} onClick={handleRemoveProduct} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(ProductInCart);
