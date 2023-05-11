import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import InputNumber from '~/components/common/InputNumber';
function ProductInCart({ product, onAddMoreProduct, onDiffProduct }) {
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
  return (
    <div className={`grid grid-cols-5 gap-1 py-0.5`}>
      <div className="col-span-2 flex items-start justify-center">
        <img onClick={() => redirect} className="h-4 w-auto" src={product.image} alt={product.title} />
      </div>
      <div className="col-span-3">
        <div className="grid grid-cols-7">
          <div className="col-span-6">
            <div className="hover:underline" onClick={() => redirect}>
              {product.title}
            </div>
            <div className="py-px font-bold text-red">${product.price}</div>
            <div className="py-px">
              <InputNumber
                label={t('quantity')}
                value={quantity}
                onUpArrow={handleUpQuantity}
                onDownArrow={() => setQuantity(quantity - 1)}
                min={1}
              />
            </div>
          </div>
          <div className="col-span-1 text-right">
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(ProductInCart);
