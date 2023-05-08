import classNames from 'classnames/bind';
import styles from './Logo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);
function Logo(props) {
  const navigate = useNavigate();
  return (
    <div className="bg-grey">
      <div className={`container mx-auto header-logo py-0.5 flex items-center justify-between`}>
        <div></div>
        <div>{props.image && <img className={`${cx('header-logo__image')} cursor-pointer`} src={props.image} />}</div>
        <div className="cursor-pointer flex items-center justify-center">
          <FontAwesomeIcon icon={faBagShopping} size="xl" />
          <div className="pl-0.5">
            <div className={`p-0.5 `} onClick={() => navigate('/login')}>
              <FontAwesomeIcon icon={faUser} size="lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Logo;
