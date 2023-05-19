import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProductDetail } from '~/store/product';
import productApi from '~/api/product';
import ProductImage from '~/components/pages/Product/ProductImage';
import ProductDescription from '~/components/pages/Product/ProductDescription';

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const fetchProductDetail = async () => {
      const result = await productApi.getProductDetail(id);
      dispatch(setProductDetail(result.product));
    };
    fetchProductDetail();
  }, [dispatch, id]);
  const product = useSelector((state) => state.product.productDetail);
  return (
    <div className="container mx-auto">
      {product && (
        <div className="grid grid-cols-2 gap-3 py-2 px-3">
          <ProductImage product={product} />
          <ProductDescription product={product} />
        </div>
      )}
    </div>
  );
}
export default Detail;
