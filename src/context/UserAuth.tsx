import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthData, RegData, signIn, signUp } from '../api/api.auth';
import { UserAuthInfo } from '../util/User';

type UserContextType = {
    user: UserAuthInfo | null;
    token: string | null;
    register: (user: RegData) => void;
    login: (loginData: AuthData) => void;
    isLoggedIn: () => boolean;
    error: boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserAuthInfo | null>(null);
    const [isReady, setIsReady] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('accessToken');
        if (user && token) {
            setUser(JSON.parse(user));
            setToken(token);
        }
        setIsReady(true);
    }, []);
    const register = async (regData: RegData) => {
        setError(false);
        await signUp(regData)
            .then(() => 'success!')
            .catch(() => setError(true));
    };
    const login = async (authData: AuthData) => {
        setError(false);
        await signIn(authData)
            .then((res) => {
                if (res) {
                    const user = res;
                    const token = res.accessToken;
                    localStorage.setItem('user', JSON.stringify(res));
                    localStorage.setItem('accessToken', res.accessToken);
                    localStorage.setItem('refreshToken', res.accessToken);
                    setUser(user);
                    setToken(token);
                }
            })
            .catch(() => setError(true));
    };
    const isLoggedIn = () => {
        return !!user;
    };

    return (
        <UserContext.Provider
            value={{ user, token, register, login, isLoggedIn, error }}
        >
            {isReady ? children : <div>Loading...</div>}
        </UserContext.Provider>
    );
};
export const useAuth = () => useContext(UserContext);
