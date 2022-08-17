import { Outlet, Navigate } from "react-router-dom";
import React from 'react';
import Loader from "../Components/loader";
import { UseIsLoggedIn } from "../config/hooks";
export default function AuthLayout() {

    
    const uid=UseIsLoggedIn();
    console.log(uid);
    if (uid===null) return(<Loader/>)
  else if(uid===true) 
 return  <Navigate  to="/home" replace={true}/>
      
    else  return   <Outlet/> 
   
}