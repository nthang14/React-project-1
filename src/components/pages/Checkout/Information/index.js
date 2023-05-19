import Input from '~/components/common/Input';
import Form from '~/components/common/Form';
import Button from '~/components/common/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
const EMAIL_REGX =
  /^([\s\t])*(?:[a-zA-Z0-9]+(?:[\.\-+_][a-zA-Z0-9]+)*)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+([a-z0-9](?:[a-z0-9-]*[a-z0-9])?){2,}|(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+([a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)([a-z0-9](?:[a-z0-9-]*[a-z0-9])?){2,})([\s\t])*$/;
function Information() {
  const { t } = useTranslation(['auth', 'message', 'common']);
  const schema = yup
    .object({
      email: yup
        .string()
        .required(t('required', { ns: 'message' }))
        .matches(EMAIL_REGX, t('email', { ns: 'message' })),
      firstname: yup.string().required(t('required', { ns: 'message' })),
      lastname: yup.string().required(t('required', { ns: 'message' })),
      address: yup.string().required(t('required', { ns: 'message' })),
      phone: yup.string().required(t('required', { ns: 'message' })),
    })
    .required();
  const Information = JSON.parse(localStorage.getItem('shipping-information'));
  const form = useForm({
    defaultValues: {
      email: Information?.email || '',
      firstname: Information?.firstname || '',
      lastname: Information?.lastname || '',
      address: Information?.address || '',
      phone: Information?.phone || '',
    },
    resolver: yupResolver(schema),
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const [step, setStep] = useState(searchParams.get('step'));

  const handleSubmitShippingMethod = (value) => {
    localStorage.setItem('shipping-information', JSON.stringify(value));
    searchParams.set('step', 'shipping-method');
    setSearchParams(searchParams);
  };
  const handlePayment = () => {
    searchParams.set('step', 'payment');
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (!Information) {
      searchParams.set('step', 'customer-infomations');
      setSearchParams(searchParams);
    } else {
      searchParams.set('step', 'shipping-method');
      setSearchParams(searchParams);
    }
  }, []);
  useEffect(() => {
    setStep(searchParams.get('step'));
  }, [searchParams]);
  const setQuery = (value) => {
    searchParams.set('step', value);
    setSearchParams(searchParams);
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
      <nav className="bg-grey-light w-full rounded-md pt-1">
        <ol className="list-reset flex justify-center">
          <li className="hover:underline cursor-pointer text-blue-500">Cart</li>
          <li>
            <span className="mx-0.5 text-neutral-500 dark:text-neutral-400">{'>'}</span>
          </li>
          <li
            className={`hover:underline cursor-pointer ${
              step === 'customer-infomations' || step === 'shipping-method' ? 'text-blue-500' : 'text-neutral-500'
            }`}
            onClick={() => {
              setQuery('customer-infomations');
            }}
          >
            Information
          </li>
          <li>
            <span className="mx-0.5 text-neutral-500 dark:text-neutral-400">{'>'}</span>
          </li>
          <li
            className={`hover:underline cursor-pointer ${
              step === 'shipping-method' ? 'text-blue-500' : 'text-neutral-500'
            }`}
            onClick={() => {
              setQuery('shipping-method');
            }}
          >
            Shipping
          </li>
          <li>
            <span className="mx-0.5 text-neutral-500 dark:text-neutral-400">{'>'}</span>
          </li>
          <li className="text-neutral-500 dark:text-neutral-400">Payment</li>
        </ol>
      </nav>
      {step === 'customer-infomations' && (
        <div className="pt-2">
          <Form onSubmit={handleSubmitShippingMethod} form={form}>
            <div className="grid grid-cols-2 gap-1">
              <Input name="firstname" label={t('firstName')} placeholder={t('firstName')} type="text" form={form} />
              <Input name="lastname" label={t('lastName')} placeholder={t('lastName')} type="text" form={form} />
            </div>
            <Input name="email" label={t('email')} placeholder={t('email')} type="text" form={form} />
            <Input name="phone" label={t('phone')} placeholder={t('phone')} type="text" form={form} />
            <Input name="address" label={t('address')} placeholder={t('address')} type="text" form={form} />
            <div className="mt-1">
              <Button>
                <div className="py-0.5 text-white font-bold">{t('shippingMethod', { ns: 'common' })}</div>
              </Button>
            </div>
          </Form>
        </div>
      )}
      {step === 'shipping-method' && (
        <div>
          <div className="mt-2 shipping-method">
            <div className="m-0.5 shipping-method__item">
              <div className="font-bold pb-0.5">Contact</div>
              <div>{Information.email}</div>
            </div>
            <div className="m-0.5 shipping-method__item">
              <div className="font-bold pb-0.5">Ship to</div>
              <div>
                <span>{Information.firstname}</span>
                <span> {Information.lastname}</span>, <span>{Information.phone}</span>,{' '}
                <span>{Information.address}</span>
              </div>
            </div>
          </div>
          <div className="mt-1">
            <Button onClick={handlePayment}>
              <div className="py-0.5 text-white font-bold">{t('paymentMethod', { ns: 'common' })}</div>
            </Button>
          </div>
        </div>
      )}
      {step === 'payment' && (
        <div className="">
          <div className="mt-2 shipping-method">
            <div className="m-0.5 shipping-method__item">
              <div className="font-bold pb-0.5">Contact</div>
              <div>{Information.email}</div>
            </div>
            <div className="m-0.5 shipping-method__item">
              <div className="font-bold pb-0.5">Ship to</div>
              <div>
                <span>{Information.firstname}</span>
                <span> {Information.lastname}</span>, <span>{Information.phone}</span>,{' '}
                <span>{Information.address}</span>
              </div>
            </div>
          </div>
          <div className="mt-1">
            <PayPalScriptProvider options={{ 'client-id': 'test' }} className="pt-1">
              <PayPalButtons style={{ layout: 'horizontal' }} />
            </PayPalScriptProvider>
          </div>
        </div>
      )}
    </div>
  );
}
export default Information;
