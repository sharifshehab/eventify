import { AuthContext } from '@/contexts/ProviderContext';
import { useContext, type ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children} : {children: ReactNode}) => {
    const {user} = useContext(AuthContext);

    const location = useLocation();

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={location.pathname} replace ></Navigate>;
};

export default PrivateRoute;