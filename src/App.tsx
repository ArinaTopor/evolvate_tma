import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './pages/Auth/SignUp';
import MainPage from './pages/ChellengePage/MainPage';
import SignIn from './pages/Auth/SignIn';
import TaskPage from './pages/TaskPage/TaskPage';
import Shop from './pages/Shop/Shop';
import TaskDetailsPage from './pages/TaskDetails/TaskDetailsPage';
import Hello from './components/Hello';
import { CartProvider } from './util/CartContext';
import Layout from './pages/Layout/Layout';
import Cart from './pages/Cart/Cart';
import AuthContext from './util/AuthContext';
import { useState } from 'react';

function App() {
    const [isAuthenticated, setAuth] = useState<boolean>(false);
    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                setAuth,
            }}
        >
            <CartProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/signUp' element={<SignUp />} />
                        <Route path='/signIn' element={<SignIn />} />
                        <Route path='/hello' element={<Hello />} />

                        <Route element={<Layout />}>
                            <Route path='/' element={<MainPage />} />
                            <Route
                                path='/tasks/:category'
                                element={<TaskPage />}
                            />
                            <Route
                                path='/tasks/:category/:id'
                                element={<TaskDetailsPage />}
                            />
                            <Route path='/shop' element={<Shop />} />
                            <Route path='/cart' element={<Cart />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </AuthContext.Provider>
    );
}

export default App;
