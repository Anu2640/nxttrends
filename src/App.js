import { Routes,Route } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
    <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
)

export default App;
