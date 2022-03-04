import { useState, useEffect } from 'react';
import AppNavBar from './components/AppNavBar';

import Home from './pages/Home';
import Register from './pages/Register';
import LoginPage from './pages/Login';
import Catalog from './pages/Products';
import ErrorPage from './pages/Error';
import ProductView from './pages/ProductView';
import Logout from './pages/Logout';
import AddCourse  from './pages/AddCourse'
import UpdateCourse from './pages/UpdateCourse'

import { UserProvider } from './UserContext';

import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  const [user, setUser] = useState({
    id: null,
    isAdmin: null
  })

  useEffect(() => {
    let token = localStorage.getItem('accessToken');

    fetch("https://fierce-retreat-87941.herokuapp.com/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .then(convertedData => {
      if (typeof convertedData._id !== "undefined") {
        setUser({
          id: convertedData._id,
          isAdmin: convertedData.isAdmin
        })
      } else {
        setUser({
          id: null,
          isAdmin: null
        })
      }
    })
  }, [user]);

  return (
    <UserProvider value={{user, setUser}}>
      <Router>
         <AppNavBar />
         <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/register' element={<Register />}  />
            <Route path='/products' element={<Catalog />} /> 
            <Route path='*' element={<ErrorPage/>} />
            <Route path= '/login' element={<LoginPage />} />
            <Route path='/products/view/:id' element={<ProductView/>} />
            <Route path='/logout' element={<Logout/>} />
            <Route path='/add/courses' element={<AddCourse/>} />
            <Route path='/update/courses' element={<UpdateCourse/>} />
         </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
