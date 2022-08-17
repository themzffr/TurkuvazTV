import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';

import Main from '../pages/main';
import SignIni from '../pages/signin';
import SignUpi from '../pages/signup';
import Category from '../pages/category';
import Singlepage from '../pages/singlepage';
import Layout from '../layout/Layout';

import AuthLayout from '../layout/AuthLayout';

import {ProtectedRoute,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Profile from '../pages/profile';
import Turlerlist from '../pages/Turlerlist';
import Header from '../Components/header';

export default function Router(){
    return(
    <BrowserRouter>
<Routes>

<Route element={<Layout />}>

  <Route path="/" element={<Main />} />
  <Route path="/home" element={<Main />} />
  <Route path="/category" element={<Category />} />
  <Route path="/category/:id"  element={<Category />} />
  <Route path="/turler/:id"  element={<Turlerlist />} />
  <Route path="/icerik/:id"  element={<Singlepage />} />
  <Route path="/profile"  element={<Profile />} />
 
 </Route>

 <Route element={<AuthLayout />}>
  <Route path="/member" element={<SignIni />} />
  <Route path="/register" element={<SignUpi />} />
  </Route>
 
</Routes>
</BrowserRouter>);}

