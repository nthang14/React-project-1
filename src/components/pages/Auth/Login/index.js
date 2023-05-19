import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from '~/components/common/Button';
import Input from '~/components/common/Input';
import Form from '~/components/common/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import authApi from '~/api/auth';

const cx = classNames.bind(styles);

function LoginForm({ onSubmit }) {
  const { t } = useTranslation(['auth', 'message']);
  const schema = yup
    .object({
      email: yup.string().required(t('required', { ns: 'message' })),
      password: yup.string().required(t('required', { ns: 'message' })),
    })
    .required();

  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      email: 'lappham1408@gmail.com',
      password: 'Lappham1408',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (value) => {
    const result = await authApi.login(value);
    localStorage.setItem('access-token', result.accessToken);
    localStorage.setItem('refresh-token', result.refreshToken);
    navigate('/');
  };
  return (
    <div className={`${cx('form__login')} bg-white`}>
      <div className="flex items-center justify-center pb-2">
        <img
          className={`${cx('header-logo__image')} cursor-pointer`}
          src="https://static.chiccdn.com/web/assets/images/common/logo-new.png"
          alt="logo"
        />
      </div>
      <Form onSubmit={handleSubmit} form={form}>
        <Input name="email" label={t('email')} placeholder={t('email')} type="text" form={form} />
        <Input name="password" label={t('password')} placeholder={t('password')} type="password" form={form} />
        <Button type="submit" className={``}>
          {t('singIn')}
        </Button>
        <div className="pt-0.5">
          <div>
            {t('noAccount')}
            <span
              onClick={() => navigate('/auth/register')}
              className="capitalize pl-0.5 text-blue-500 hover:underline cursor-pointer"
            >
              {t('singUp')}
            </span>
          </div>
        </div>
      </Form>
    </div>
  );
}
export default LoginForm;
