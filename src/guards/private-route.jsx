import { useAuth } from "../context/auth-context";
import { Navigate } from 'react-router'; 

function PrivateRoute({ children }) {
  const { user } = useAuth();
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />
  }
}

export default PrivateRoute;