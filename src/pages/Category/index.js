import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productApi from '~/api/product';
import Product from '~/components/pages/Category/Product';
import Modal from '~/components/common/Modal';
function Category() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const fetchProductByCategory = async () => {
      const data = await productApi.getProductsByCategory(slug);
      setProducts(data);
    };
    fetchProductByCategory();
  }, [slug]);
  const handleQuickVIew = (product) => {
    setIsOpen(true);
  };
  return (
    <div className={`category-page container mx-auto pt-0.5`}>
      <div className={`grid grid-col-5 grid-flow-col gap-2 `}>
        <div className="col-span-5">
          {slug && (
            <div className="bg-gray">
              <div className={`category__title capitalize font-bold p-0.5 pb-px`}>{slug}</div>
              <div className="px-0.5 pb-0.5">{products.length} products</div>
            </div>
          )}
          <div className={`pt-0.5 grid grid-cols-5 gap-0.5`}>
            {products &&
              products.length &&
              products.map((product) => {
                return <Product key={product.id} product={product} handleQuickVIew={() => handleQuickVIew(product)} />;
              })}
          </div>
          <Modal visible={isOpen} close={() => setIsOpen(false)}>
            1212
          </Modal>
        </div>
      </div>
    </div>
  );
}
export default Category;
