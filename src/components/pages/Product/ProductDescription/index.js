import { useState } from 'react';
import InputNumber from '~/components/common/InputNumber';
import Button from '~/components/common/Button';
import { useTranslation } from 'react-i18next';
import { addToCart } from '~/store/cart';
import { useDispatch } from 'react-redux';
function ProductDescription({ product, ...rest }) {
  const { _source, _id } = product;
  const { t } = useTranslation('common');
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const payload = {
      image: _source.image,
      _id,
      price: _source.price,
      quantity,
      name: _source.name,
    };
    dispatch(addToCart(payload));
  };
  return (
    <div>
      <div className="font-bold">{_source.name}</div>
      <div className={`font-bold text-red pt-2`}>${_source.price}</div>
      <div className="py-1">
        <InputNumber
          value={quantity}
          onUpArrow={() => setQuantity(quantity + 1)}
          onDownArrow={() => setQuantity(quantity - 1)}
          min={1}
        />
      </div>

      <Button className={`w-8 py-0.5 hover:bg-yellow bg-orange`} onClick={handleAddToCart}>
        <div className="text-white font-bold">{t('addToCart', { ns: 'common' })}</div>
      </Button>
    </div>
  );
}
export default ProductDescription;
