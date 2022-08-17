import { Outlet, Navigate } from "react-router-dom";
import React from 'react';
import Loader from "../Components/loader";
import { UseIsLoggedIn } from "../config/hooks";
export default function Layout() {

    
    const uid=UseIsLoggedIn();
       if (uid===null) return(<Loader />)
   else  if(uid===false) 
 return <Navigate  to="/member" replace={true}/>
      
  return   <Outlet/> 
   
}