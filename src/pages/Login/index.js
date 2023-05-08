import LoginForm from '~/components/pages/Auth/Login';
function Login() {
  const handleSubmit = (value) => {
    // console.log('value', value);
  };
  return (
    <div>
      Login
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}
export default Login;
