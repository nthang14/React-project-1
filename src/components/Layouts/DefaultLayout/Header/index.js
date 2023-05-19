import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import TopBar from '~/components/Layouts/components/TopBar';
import Logo from '~/components/Layouts/components/Logo';
import MenuCategory from '~/components/Layouts/components/MenuCategory';
import Search from '~/components/Layouts/components/Search';
const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx('header')}>
      <TopBar image="https://minio.lattehub.com/img/0/0/resize/6132e7b418347c0008ac3de4/2023/03/29/lattehub-image-6423ab27b5700750768f62b1.jpg" />
      <Logo image="https://static.chiccdn.com/web/assets/images/common/logo-new.png" />
      <div className="flex items-center justify-between container mx-auto">
        <MenuCategory />
        <Search />
      </div>
    </header>
  );
}
export default Header;
