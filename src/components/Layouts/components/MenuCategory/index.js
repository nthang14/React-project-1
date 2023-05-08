import classNames from 'classnames/bind';
import styles from './MenuCategory.module.scss';
import React, { useEffect, useState } from 'react';
import category from '~/api/category';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function MenuCategory() {
  const [menu, setMenu] = useState([]);
  const [menuActive, setMenuActive] = useState(null);
  useEffect(() => {
    const fetchMenu = async () => {
      const data = await category.getAllCategory();
      setMenu(data);
    };
    fetchMenu();
  }, []);

  let navigate = useNavigate();
  const handleClick = (item) => {
    navigate(`/category/${item}`);
  };
  return (
    <div className={`${cx('mega-menu')} shadow-sm relative`} onMouseLeave={() => setMenuActive(null)}>
      <div className={`container mx-auto flex align-center justify-start`}>
        {menu.map((item) => {
          return (
            <div
              onClick={() => handleClick(item)}
              key={item}
              className={`${cx(`mega-menu__item`)} capitalize py-0.5 mr-1.5 cursor-pointer font-bold`}
            >
              {item}
            </div>
          );
        })}
      </div>
      {/* {menuActive && (
        <div className={`absolute w-full ${cx('mega-menu__sub')}`}>
          <div className={`bg-white`} onMouseLeave={() => setMenuActive(null)}>
            <div className={`container mx-auto py-0.5`}>
              <div className={`grid grid-cols-7`}>
                {menuActive.children &&
                  menuActive.children.map((item) => {
                    return (
                      <div key={`submenu-${item.handle}`}>
                        <div className={`sub-menu font-bold`}>{item.name}</div>
                        {item.children &&
                          item.children.map((subMenu) => {
                            return (
                              <div
                                key={subMenu.handle}
                                onClick={() => handleClick(subMenu)}
                                className={`cursor-pointer font-light hover:underline py-px`}
                              >
                                {subMenu.name}
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
      )} */}
    </div>
  );
}
export default MenuCategory;
