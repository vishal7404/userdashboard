import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './Sidebar/Sidebar';
import Register from './Pages/Register/Register';
import Register2 from './Pages/Register/Register2';
import Login from './Pages/Login/Login';
import Counter from './Pages/Counter/Counter';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
function App() {
  return (
    <>
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Register />}></Route>
            <Route path="/Register2" element={<Register2 />}></Route>
            <Route path="/sidebar" element={<Sidebar />}></Route>
            <Route path="/counter" element={<Counter />}></Route>
            <Route path="/forgot_password" element={<ForgotPassword />}></Route>
          </Routes>
          {/* <Register /> */}
          {/* <Sidebar /> */}
        </BrowserRouter>
      </React.Fragment>
    </>
  );
}

export default App;

{/* <Routes>
          <Route path='/' element={<Dashboard />}></Route>
        </Routes> */}