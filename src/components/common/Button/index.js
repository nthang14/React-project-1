import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

function Button({ classCustomize, onClick, children, ...rest }) {
  return (
    <button className={`px-1 py-px cursor-pointer ${classCustomize}`} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
export default Button;