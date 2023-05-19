import Product from '~/components/pages/Category/Product';
import productApi from '~/api/product';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '~/store/product';
function BestSeller({ data }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProduct = async () => {
      const result = await productApi.getAllProduct();
      console.log('result', result);
      dispatch(getAllProduct(result.products));
    };
    fetchProduct();
  }, []);
  const allProduct = useSelector((state) => state.product.allProduct);
  return (
    <div>
      <div className="font-bold text-center home-title pb-0.5">{data?.title}</div>
      <div className={`pt-0.5 grid grid-cols-6 gap-1`}>
        {allProduct &&
          allProduct.map((item) => {
            return <Product key={item._id} product={item} />;
          })}
      </div>
    </div>
  );
}
export default BestSeller;
