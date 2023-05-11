import { useState } from 'react';
import InputNumber from '~/components/common/InputNumber';
import Button from '~/components/common/Button';
import { useTranslation } from 'react-i18next';
function ProductDescription({ product, ...rest }) {
  const { t } = useTranslation('common');
  const [quantity, setQuantity] = useState(1);
  const currentCart = JSON.parse(localStorage.getItem('cart/current')) || [];

  const handleAddToCart = () => {
    const productInCart = currentCart.find((item) => item.id === product.id);
    if (!!productInCart) {
      Object.assign(productInCart, { quantity: productInCart.quantity + quantity });
    } else {
      currentCart.push({ ...product, quantity });
    }
    localStorage.setItem('cart/current', JSON.stringify(currentCart));
  };
  return (
    <div>
      <div className="font-bold">{product.title}</div>
      <div className={`font-bold text-red`}>${product.price}</div>
      <InputNumber
        value={quantity}
        onUpArrow={() => setQuantity(quantity + 1)}
        onDownArrow={() => setQuantity(quantity - 1)}
        min={1}
      />
      <Button className={`w-8 py-0.5`} onClick={handleAddToCart}>
        <div className="text-white font-bold">{t('addToCart', { ns: 'common' })}</div>
      </Button>
    </div>
  );
}
export default ProductDescription;
