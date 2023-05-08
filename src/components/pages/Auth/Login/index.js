import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from '~/components/common/Button';
import Input from '~/components/common/Input';
import Form from '~/components/common/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
const cx = classNames.bind(styles);
const schema = yup
  .object({
    username: yup.string().required('Trường này không được bỏ trống'),
    password: yup.string().required('Trường này không được bỏ trống'),
  })
  .required();

function LoginForm({ onSubmit }) {
  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (value) => {
    console.log('value', value);
  };
  return (
    <div className={`${cx('form__login')} bg-gradient-to-t to-cyan-500 from-blue-500`}>
      <div className="flex items-center justify-center pb-2">
        <img
          className={`${cx('header-logo__image')} cursor-pointer`}
          src="https://static.chiccdn.com/web/assets/images/common/logo-new.png"
          alt="logo"
        />
      </div>
      <Form onSubmit={handleSubmit} form={form}>
        <Input name="username" label="LoginForm" placeholder="username" type="text" />
        <Input name="password" label="LoginForm" placeholder="password" type="text" />
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
}
export default LoginForm;
