import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './Sidebar/Sidebar';
function App() {
  return (
    <>
      <React.Fragment>

        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      </React.Fragment>
    </>
  );
}

export default App;

{/* <Routes>
          <Route path='/' element={<Dashboard />}></Route>
        </Routes> */}