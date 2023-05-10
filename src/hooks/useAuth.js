import { useState } from 'react';
export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  setIsAuthenticated(!!localStorage.getItem('token'));
  return { isAuthenticated };
}
