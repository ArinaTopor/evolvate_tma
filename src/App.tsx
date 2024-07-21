import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp';
import MainPage from './pages/MainPage';
import SignIn from './pages/SignIn';
import TaskPage from './pages/TaskPage';
import Shop from './pages/Shop';
import TaskDetailsPage from './pages/TaskDetailsPage';
import Hello from './components/Hello';
import { CartProvider } from './util/CartContext';
import Layout from './pages/Layout';
import Cart from './pages/Cart';
const tg = window.Telegram.WebApp;
function App() {
    const onClose = () => {
        tg.close();
    };
    return (
        <CartProvider>
            <div>
                <button onClick={onClose}>Закрыть</button>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout isAuth={false} />}>
                        <Route path='/signUp' element={<SignUp />} />
                        <Route path='/signIn' element={<SignIn />} />
                        <Route path='/hello' element={<Hello />} />
                    </Route>
                    <Route element={<Layout isAuth={true} />}>
                        <Route path='/' element={<MainPage />}></Route>
                        <Route
                            path='/tasks/:category'
                            element={<TaskPage />}
                        ></Route>
                        <Route
                            path='/tasks/:category/:id'
                            element={<TaskDetailsPage />}
                        />
                        <Route path='/shop' element={<Shop></Shop>} />
                        <Route path='/cart' element={<Cart />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
