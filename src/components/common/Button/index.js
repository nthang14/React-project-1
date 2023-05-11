import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

function Button({ className, onClick, children, ...rest }) {
  return (
    <div
      className={`w-full cursor-pointer font-bold bg-blue-500 hover:bg-blue-700 text-white ${className} ${cx(
        'form__button',
      )}`}
    >
      <button onClick={onClick} className={`w-full py-px cursor-pointer font-bold capitalize`} {...rest}>
        {children}
      </button>
    </div>
  );
}
export default Button;
