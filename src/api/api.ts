import axios from 'axios';
import { useContext } from 'react';
import AuthContext from '../util/AuthContext';

const api = axios.create({
    baseURL: 'http://localhost:5000/',
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const { setAuth } = useContext(AuthContext);
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._isRetry) {
            originalRequest._isRetry = true;
            try {
                const refreshToken = localStorage.getItem('refreshToken');
                const response = await api.post('/auth/refreshToken', {
                    token: refreshToken,
                });

                localStorage.setItem('accessToken', response.data.accessToken);
                originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
                return api(originalRequest);
            } catch (err) {
                setAuth(false);
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                return Promise.reject(err);
            }
        }
        return Promise.reject(error);
    }
);

export default api;
