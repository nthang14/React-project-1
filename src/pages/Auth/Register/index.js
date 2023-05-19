import RegisterForm from '~/components/pages/Auth/Register';
function Register() {
  const handleSubmit = (value) => {};
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}
export default Register;
