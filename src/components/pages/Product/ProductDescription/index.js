import { useState } from 'react';
import InputNumber from '~/components/common/InputNumber';
import Button from '~/components/common/Button';
import { useTranslation } from 'react-i18next';
import useAuth from '~/hooks/useAuth';
function ProductDescription({ product, ...rest }) {
  // const { isAuthenticated } = useAuth();
  const { t } = useTranslation('common');
  const handleInput = (value) => {
    setNumber(value);
  };
  const [number, setNumber] = useState(1);
  return (
    <div>
      <div className="font-bold">{product.title}</div>
      <div className={`font-bold text-red`}>${product.price}</div>
      <InputNumber
        value={number}
        onChange={handleInput}
        onUpArrow={() => setNumber(number + 1)}
        onDownArrow={() => setNumber(number - 1)}
        min={1}
      />
      <Button className={`w-8 py-0.5`}>
        <div className="text-white font-bold">{t('addToCart', { ns: 'common' })}</div>
      </Button>
    </div>
  );
}
export default ProductDescription;
