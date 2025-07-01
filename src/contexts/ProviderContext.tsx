import { getCurrentUser, loginUser, logOutUser, type IAuthUser } from "@/lib/auth";
import React, { createContext, useState, type ReactNode } from "react";


interface IAuthContext {
    user: IAuthUser | null;
    setUser: React.Dispatch<React.SetStateAction<IAuthUser | null>>;
    login: (userData: IAuthUser) => void;
    logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
    user: null,
    setUser: () => {},
    login: () => {},
    logout: () => {},
  });

const ProviderContext = ({children} : {children: ReactNode}) => {
    const [user, setUser] = useState<IAuthUser | null>(getCurrentUser());

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