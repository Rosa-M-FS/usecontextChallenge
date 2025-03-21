import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTheme } from '../themes/ThemeContext';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Myjob from '../pages/Myjob';
const RouterApp = () =>{
    const {theme} = useTheme();

    return (
        <Router>
            <div className={`App ${theme}`}>
                <nav className='navbar'>
                    <Link to="/">Home</Link>
                    <Link to='/profile'>Profile</Link>
                    <Link to='/myjob'>My Job</Link>
                </nav>
                <Routes>
                    <Route path='/' element ={<Home/>}/>
                    <Route path='/profile' element ={<Profile/>}/>
                    <Route path='/myjob' element ={<Myjob/>}/>
                </Routes>
            </div>
        
        </Router>
    );
};

export default RouterApp;
