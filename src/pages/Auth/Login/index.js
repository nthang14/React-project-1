import LoginForm from '~/components/pages/Auth/Login';
function Login() {
  const handleSubmit = (value) => {
    // console.log('value', value);
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}
export default Login;
