import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './pages/Auth/SignUp';
import MainPage from './pages/ChallengePage/MainPage';
import SignIn from './pages/Auth/SignIn';
import TaskPage from './pages/TaskPage/TaskPage';
import Shop from './pages/Shop/Shop';
import TaskDetailsPage from './pages/TaskDetails/TaskDetailsPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import { CartProvider } from './context/CartContext';
import Layout from './hoc/Layout/Layout';
import Cart from './pages/Cart/Cart';
import { UserProvider } from './context/UserAuth';

function App() {
    return (
        <UserProvider>
            <CartProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/signUp' element={<SignUp />} />
                        <Route path='/signIn' element={<SignIn />} />
                        <Route path='/welcome' element={<WelcomePage />} />

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
        </UserProvider>
    );
}

export default App;
