import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route } from 'react-router-dom';

import Home from './Pages/Home'
import NewDevice from './Pages/Newdevice'
import DeviceList from './Pages/Devicelist'
import Tools from './Pages/tools'

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="NewDevice" element={<NewDevice/>} />
          <Route path="DeviceList" element={<DeviceList/>} />
          <Route path="Tools" element={<Tools/>} />
      </Routes>
    </div>
  );
}

export default App;
