import { getCurrentUser, loginUser, logOutUser, type IAuthUser } from "@/lib/auth";
import { createContext, useState, type ReactNode } from "react";

export const AuthContext = createContext();

const ProviderContext = ({children} : {children: ReactNode}) => {
    const [user, setUser] = useState(getCurrentUser());

    const login = (userData: IAuthUser) => {
        loginUser(userData);
        setUser(userData);
    }
    const logout = () => {
        logOutUser()
        setUser(null);
    }

    const userInfo = {
        user,
        setUser,
        login,
        logout,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default ProviderContext;