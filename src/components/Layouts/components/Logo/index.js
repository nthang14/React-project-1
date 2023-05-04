import classNames from 'classnames/bind';
import styles from './Logo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Logo(props) {
  return (
    <div className="bg-grey">
      <div className={`container mx-auto header-logo py-0.5 flex items-center justify-between`}>
        <div></div>
        <div>{props.image && <img className={`${cx('header-logo__image')} cursor-pointer`} src={props.image} />}</div>
        <div className="cursor-pointer">
          <FontAwesomeIcon icon={faBagShopping} size="xl" />
          <div></div>
        </div>
      </div>
    </div>
  );
}
export default Logo;
