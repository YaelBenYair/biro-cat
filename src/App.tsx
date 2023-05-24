import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Router, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import MyDirection from "./Direction/MyDirection";
import { ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import { CalculateProvider } from './CalculateContext';

const theme = createTheme({
  palette: {
      primary: {
          main: '#3C3D41',
          dark: '#464A50',
          light: '#A8A9AC',
      },
      secondary:{
          main: '#023473',
          dark: '#790e3c',
          light: '#bd4378',
      }
  },
  typography:{
    fontFamily: "'Rubik', sans-serif",
    // fontFamily: "'Poppins', sans-serif, 'Arimo', sans-serif, 'Rubik', sans-serif",
  }
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CalculateProvider>
        <MyDirection>
          <Routes>
            <Route path={'/'} element={<Layout />}>

            </Route>
          </Routes>
        </MyDirection>
        </CalculateProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
