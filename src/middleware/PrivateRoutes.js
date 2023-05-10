import { Outlet, useNavigate } from 'react-router-dom';
function PrivateRoutes() {
  const navigate = useNavigate();
  const auth = localStorage.getItem('token');
  console.log(('auth', auth, !!auth));
  return !!auth ? <Outlet /> : navigate('/auth/login');
}
export default PrivateRoutes;
