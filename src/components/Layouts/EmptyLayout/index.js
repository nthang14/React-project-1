import classNames from 'classnames/bind';
import styles from './Empty.module.scss';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);
function EmptyLayout({ children }) {
  const navigate = useNavigate();
  return (
    <div className={`${cx('empty-layout')}`}>
      <div className={`container mx-auto py-1.5 h-screen`}>
        {/* <div>
          <div className="flex items-center justify-center">
            <img
              onClick={() => navigate('/')}
              className={`${cx('header-logo__image')} cursor-pointer`}
              src="https://static.chiccdn.com/web/assets/images/common/logo-new.png"
              alt="logo"
            />
          </div>
        </div> */}
        <div className="pt-2">{children}</div>
      </div>
    </div>
  );
}
export default EmptyLayout;
