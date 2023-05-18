import classNames from 'classnames/bind';
import styles from './MenuCategory.module.scss';
import React, { useEffect, useState } from 'react';
import categoryApi from '~/api/category';
import { useNavigate } from 'react-router-dom';
import collectionsData from '~/utils/constants/mock-data/mockCollectionData.js';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCollection, getAllCategory } from '~/store/collection';
const cx = classNames.bind(styles);
function MenuCategory() {
  const [menuActive, setMenuActive] = useState(null);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleClick = (item) => {
    navigate(`/category/${item.handle}`);
  };
  const handleMouseEnter = (item) => {
    setMenuActive(item);
  };
  useEffect(() => {
    dispatch(getAllCollection(collectionsData));
  }, []);
  useEffect(() => {
    const fetchAllCollection = async () => {
      await categoryApi.getAllCategory();
    };
    fetchAllCollection();
  }, []);
  const collections = useSelector((state) => state.collection.collections);
  return (
    <div className={`${cx('mega-menu')} shadow-sm relative`} onMouseLeave={() => setMenuActive(null)}>
      <div className={`container mx-auto flex align-center justify-start`}>
        {collections.map((item) => {
          return (
            <div
              onMouseEnter={() => handleMouseEnter(item)}
              key={item.handle}
              className={`${cx(`mega-menu__item`)} capitalize py-0.5 mr-1.5 cursor-pointer font-bold`}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      {menuActive && (
        <div className={`absolute w-full ${cx('mega-menu__sub')}`}>
          <div className={`bg-white`} onMouseLeave={() => setMenuActive(null)}>
            <div className={`container mx-auto py-0.5`}>
              <div className={`grid grid-cols-7`}>
                {menuActive.children &&
                  menuActive.children.map((item) => {
                    return (
                      <div key={`submenu-${item.handle}`}>
                        <div className={`sub-menu font-bold`}>{item.title}</div>
                        {item.children &&
                          item.children.map((subMenu) => {
                            return (
                              <div
                                key={subMenu.handle}
                                onClick={() => handleClick(subMenu)}
                                className={`cursor-pointer font-light hover:underline py-px`}
                              >
                                {subMenu.title}
                              </div>
                            );
                          })}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default MenuCategory;
