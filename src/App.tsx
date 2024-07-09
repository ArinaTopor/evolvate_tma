import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SignUp from './pages/SignUp';
import MainPage from './pages/MainPage';
import SignIn from './pages/SignIn';

function App() {
    return (
        <div className='container'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/signUp' element={<SignUp />}></Route>
                    <Route path='/signIn' element={<SignIn />} />
                    <Route path='/' element={<MainPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
