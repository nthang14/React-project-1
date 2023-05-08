import Button from '~/components/common/Button';
import Input from '~/components/common/Input';
import Form from '~/components/common/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

const schema = yup
  .object({
    username: yup.string().required('Trường này không được bỏ trống!'),
  })
  .required();

function LoginForm({ onSubmit }) {
  const form = useForm({
    defaultValues: {
      username: '111',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (value) => {
    console.log('value', value);
  };
  return (
    <Form
      onSubmit={handleSubmit}
      defaultValues={{
        username: '111',
      }}
    >
      <Input name="username" label="LoginForm" placeholder="username" form={form} />
      <Button type="submit">Login</Button>
    </Form>
  );
}
export default LoginForm;
