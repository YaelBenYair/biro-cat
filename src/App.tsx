import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import MyDirection from "./Direction/MyDirection";



function App() {
  return (
    <>
        <MyDirection>
    <Routes>
      <Route path={'/'} element={<Layout/>}>

      </Route>
    </Routes>
        </MyDirection>
    </>
  );
}

export default App;
