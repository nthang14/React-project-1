import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);
function Input({ name, form, ...rest }) {
  const {
    register,
    formState: { errors },
  } = form;
  return (
    <div className={`form__group `}>
      <label htmlFor="name" className={`${cx('form__label')} capitalize`}>
        {rest.label}
        <span className={`text-error pl-px`}>&#8727;</span>
      </label>
      <input {...register(name)} {...rest} className={`${cx('form__input')} bg-gray-100`} />
      <div className={`pt-px form__error`}>
        {errors && <span className={`text-error`}>{errors[name]?.message}</span>}
      </div>
    </div>
  );
}
export default Input;
