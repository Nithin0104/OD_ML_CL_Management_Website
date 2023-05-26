import React from 'react';
import ReactDOM from 'react-dom/client';

import Login from './Pages/Login';
import StuEvent from './Pages/StuEvent';
import TeaEvent from './Pages/TeaEvent';
import OnDuty from './Pages/onduty';
import Ml from './Pages/ml';
import Classleave from './Pages/Classleave';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
// const navigate = useNavigate();
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/student" element={<StuEvent/>}/>
      <Route path="/student/onduty" element={<OnDuty/>}/>
      <Route path="/student/ml" element={<Ml/>}/>
      <Route path="/student/cl" element={<Classleave/>}/>
      <Route path="/teacher" element={<TeaEvent/>}/>
      navigate("/")
    </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

