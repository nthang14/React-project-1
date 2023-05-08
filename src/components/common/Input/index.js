import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);
function Input({ register, name, errors, ...rest }) {
  return (
    <div className={`form__group`}>
      <label for="name" className={`${cx('form__label')}`}>
        Full Name
        <span className={`text-error pl-px`}>&#8727;</span>
      </label>
      <input {...register(name)} {...rest} className={`${cx('form__input')}`} />
      <div className={`pt-px form__error`}>
        {errors && <span className={`text-error`}>{errors[name]?.message}</span>}
      </div>
    </div>
  );
}
export default Input;
