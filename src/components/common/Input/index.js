import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);
function Input({ register, name, form, ...rest }) {
  return <input {...register(name)} {...rest} control={form.control} />;
}
export default Input;
