import { useState } from 'react';
export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  setIsAuthenticated(!!localStorage.getItem('access-token'));
  return { isAuthenticated };
}
