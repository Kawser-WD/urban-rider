import React, { createContext, useState } from "react";
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Destination from './components/Destination/Destination'
import Home from './components/Home/Home'
import NotMatch from './components/NotMatch/NotMatch'
import Navbar from './components/Navbar/Navbar'
import MapDirection from "./components/MapDirection/MapDirection";
import Login from "./components/Home/Login/Login";
import Register from "./components/Home/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./components/Home/Login/PrivateRoute/PrivateRoute";


function App() {
  return (
    
  <AuthProvider>
     <BrowserRouter>
   <Navbar/>
   <Routes>
          <Route path="/destination/:name" element={ <PrivateRoute><Destination/></PrivateRoute> } >
          </Route>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route exact path="/login" element={<Login/>}>
          </Route>
          <Route exact path="/register" element={<Register/>}>
          </Route>
          <Route path="*" element={<NotMatch/>}>
          </Route>
          <Route path="/direction" element={<MapDirection
          />} />
   </Routes>
   </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
