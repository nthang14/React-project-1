import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import productApi from '~/api/product';
import ProductImage from '~/components/pages/Product/ProductImage';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);
function Search() {
  const navigate = useNavigate();
  const executor = useRef(null);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (executor.current) {
      clearTimeout(executor.current);
      executor.current = null;
    }
    executor.current = setTimeout(async () => {
      const result = await productApi.getAllProduct({ search: e.target.value });
      setProducts(result.products);
    }, 300);
  };
  return (
    <div className="relative z-10">
      <div className={`flex items-center justify-start`}>
        <input
          className={`${cx('input-search')}`}
          placeholder="Search ..."
          value={search}
          onInput={(e) => handleSearch(e)}
        />
        <div className={`${cx('input-icon')}`}>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#ffffff' }} />
        </div>
      </div>
      {search && (
        <div className={`absolute w-full ${cx('search-result')}`}>
          {products &&
            products.map((product) => {
              return (
                <div key={product._id} className="grid grid-cols-7 gap-0.5 py-0.5">
                  <div className="col-span-2">
                    <ProductImage product={product} />
                  </div>
                  <div className="col-span-5">
                    <div
                      onClick={() => navigate(`/product/${product._id}`)}
                      className={`text-two-line ${cx('search-title')} hover:underline cursor-pointer`}
                    >
                      {product.title}
                    </div>
                    <div className="text-red font-bold">${product.variantDefault.price}</div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
export default Search;
