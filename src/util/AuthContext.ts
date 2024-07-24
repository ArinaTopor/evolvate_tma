import { createContext } from 'react';

type AuthContextType = {
    isAuthenticated: boolean;
    setAuth: (auth: boolean) => void;
};

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    setAuth: () => {},
});

export default AuthContext;
