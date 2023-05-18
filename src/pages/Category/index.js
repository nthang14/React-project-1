import { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import productApi from '~/api/product';
import Product from '~/components/pages/Category/Product';
import ProductImage from '~/components/pages/Product/ProductImage';
import ProductDescription from '~/components/pages/Product/ProductDescription';
import Modal from '~/components/common/Modal';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getProductByCollection, setModal, setProductDetail } from '~/store/product';
import productsData from '~/utils/constants/mock-data/mockProductData';
function Category() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProductByCategory = async () => {
      dispatch(getProductByCollection({ allProducts: productsData, collectionHandle: slug }));
      productApi.getAllProduct();
    };
    fetchProductByCategory();
  }, [slug]);
  const products = useSelector((state) => state.product.products);
  const isModal = useSelector((state) => state.product.isModal);
  const product = useSelector((state) => state.product.productDetail);
  const handleQuickView = useCallback((item) => {
    dispatch(setModal(true));
    dispatch(setProductDetail(item));
  }, []);
  const { t, i18n } = useTranslation(['home', 'category']);
  return (
    <div className={`category-page container mx-auto pt-0.5`}>
      <div className={`grid grid-col-5 grid-flow-col gap-2 `}>
        <div className="col-span-5">
          {slug && (
            <div className="bg-gray">
              <div className={`category__title capitalize font-bold p-0.5 pb-px`}>{slug}</div>
              <div className="px-0.5 pb-0.5">
                {products.length} {t('product', { ns: 'category' })}
              </div>
            </div>
          )}
          <div className={`pt-0.5 grid grid-cols-5 gap-0.5`}>
            {products &&
              products.length &&
              products.map((item) => {
                return (
                  <Product key={item._id} product={item} isModal={true} handleQuickView={() => handleQuickView(item)} />
                );
              })}
          </div>
          <Modal visible={isModal} close={() => dispatch(setModal(false))} className={`w-36`}>
            <div className={`grid grid-cols-2 gap-2 mb-0.5 px-0.5`}>
              <ProductImage product={product} />
              <ProductDescription product={product} />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
export default Category;
