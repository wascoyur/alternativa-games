import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export default function RequireAuth({ children }) {
  let user = useAuth();
  let location = useLocation();

  if (!user.token) {
    console.log(user.token);
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
}
const useAuth = () => {
  //get token from store
  const user = useSelector((state) => state.user);
  return user;
};
