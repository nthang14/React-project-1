import { useState, useEffect, useCallback } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById, getProductByCollection } from '~/store/product';
import productsData from '~/utils/constants/mock-data/mockProductData';
import ProductImage from '~/components/pages/Product/ProductImage';
import ProductDescription from '~/components/pages/Product/ProductDescription';

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [collectionHandle, setCollectionhandle] = useState(searchParams.get('collectionHandle'));
  useEffect(() => {
    const fetchProductByCategory = async () => {
      dispatch(getProductByCollection({ allProducts: productsData, collectionHandle }));
    };
    fetchProductByCategory();
  }, []);
  useEffect(() => {
    const fetchProductByCategory = async () => {
      dispatch(getProductById(id));
    };
    fetchProductByCategory();
  }, [dispatch, id, collectionHandle]);
  const product = useSelector((state) => state.product.productDetail);
  const { _source } = product;
  return (
    <div className="container mx-auto">
      {_source && (
        <div className="grid grid-cols-2 gap-3 py-2 px-3">
          <ProductImage product={product} />
          <ProductDescription product={product} />
        </div>
      )}
    </div>
  );
}
export default Detail;
