import Input from '~/components/common/Input';
import Form from '~/components/common/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

function Information() {
  const { t } = useTranslation(['auth', 'message']);
  const form = useForm({
    defaultValues: {
      email: '',
      firstname: '',
      lastname: '',
      address: '',
      phone: '',
    },
  });
  const handleSubmit = (value) => {
    console.log('value', value);
  };
  return (
    <div className="pr-2">
      <div className="flex items-center justify-center">
        <img
          className={`cursor-pointer w-6`}
          src="https://static.chiccdn.com/web/assets/images/common/logo-new.png"
          alt="logo"
        />
      </div>
      <div className="pt-2">
        <Form onSubmit={handleSubmit} form={form}>
          <div className="grid grid-cols-2 gap-1">
            <Input name="firstname" label={t('firstName')} placeholder={t('firstName')} type="text" form={form} />
            <Input name="lastname" label={t('lastName')} placeholder={t('lastName')} type="text" form={form} />
          </div>
          <Input name="email" label={t('email')} placeholder={t('email')} type="text" form={form} />
        </Form>
      </div>
    </div>
  );
}
export default Information;
