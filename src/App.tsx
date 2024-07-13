import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SignUp from './pages/SignUp';
import MainPage from './pages/MainPage';
import SignIn from './pages/SignIn';
import TaskPage from './pages/TaskPage';
import Shop from './pages/Shop';
import TaskDetailsPage from './pages/TaskDetailsPage';

function App() {
    return (
        <div className='container'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/signUp' element={<SignUp />}></Route>
                    <Route path='/signIn' element={<SignIn />} />
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
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
