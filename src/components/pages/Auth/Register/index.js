import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Button from '~/components/common/Button';
import Input from '~/components/common/Input';
import Form from '~/components/common/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import useApi from '~/api/user';
const cx = classNames.bind(styles);
const EMAIL_REGX =
  /^([\s\t])*(?:[a-zA-Z0-9]+(?:[\.\-+_][a-zA-Z0-9]+)*)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+([a-z0-9](?:[a-z0-9-]*[a-z0-9])?){2,}|(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+([a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)([a-z0-9](?:[a-z0-9-]*[a-z0-9])?){2,})([\s\t])*$/;
const address = {
  city: 'kilcoole',
  street: '7835 new road',
  number: 3,
  zipcode: '12926-3874',
  geolocation: {
    lat: '-37.3159',
    long: '81.1496',
  },
};
const phone = '1-570-236-7033';
function RegisterForm({ onSubmit }) {
  const { t } = useTranslation(['auth', 'message']);
  const schema = yup
    .object({
      username: yup.string().required(t('required', { ns: 'message' })),
      password: yup.string().required(t('required', { ns: 'message' })),
      confirmPW: yup.string().oneOf([yup.ref('password')], t('confirmPw', { ns: 'message' })),
      email: yup.string().matches(EMAIL_REGX, t('email', { ns: 'message' })),
      firstname: yup.string().required(t('required', { ns: 'message' })),
      lastname: yup.string().required(t('required', { ns: 'message' })),
    })
    .required();

  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
      email: '',
      confirmPW: '',
      firstname: '',
      lastname: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (value) => {
    const result = await useApi.createUser(value);
    if (!!result) {
      navigate('/');
    }
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
        <div className="grid grid-cols-2 gap-1">
          <Input name="firstname" label={t('firstName')} placeholder={t('firstName')} type="text" form={form} />
          <Input name="lastname" label={t('lastName')} placeholder={t('lastName')} type="text" form={form} />
        </div>
        <Input name="email" label={t('email')} placeholder={t('email')} type="text" form={form} />
        <Input name="username" label={t('userName')} placeholder={t('userName')} type="text" form={form} />
        <Input name="password" label={t('password')} placeholder={t('password')} type="password" form={form} />
        <Input name="confirmPW" label={t('confirmPW')} placeholder={t('confirmPW')} type="password" form={form} />
        <Button type="submit" className={``}>
          {t('singUp')}
        </Button>
        <div className="pt-0.5">
          <div>
            {t('noAccount')}
            <span
              onClick={() => navigate('/auth/login')}
              className="capitalize pl-0.5 text-blue-500 hover:underline cursor-pointer"
            >
              {t('singIn')}
            </span>
          </div>
        </div>
      </Form>
    </div>
  );
}
export default RegisterForm;
