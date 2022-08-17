import React , { Component} from 'react';
import '../index.css';
import '../App.css';
import {  Link } from "react-router-dom";

class Headerguest extends Component {

 
    render(){ 

      const {page}= this.props; 
    const guestButton= document.getElementById("guestbutton");
  if (page==="/member"){ 
    console.log(guestButton);

  
  }
    
    
    
    
    return ( 
        <div className="container-fluid">
        <div className="row ">
          <div className="col-6 col-md-3 logo-area">
         <a href="/">   <img   className="logo" alt="TurkuvazTV" src="../images/Turkuvaz-tv.png" /></a>
          </div>
          <div
            className="	menu-area  d-md-block col-md-6" id='menuarea'
            style={{
              
              alignContent: "center !important",
              alignItems: "center !important"
            }}
          >
          
          </div>
          <div className="col-6 col-md-3 right-menu-area">
            
            <a href="/member"><button id="guestbutton" className="d-block	 btn btn-turkuvaz main-menu-button"> Giriş Yap</button></a>
          </div>
        </div>
      </div>
      
        

   );}
    
}   export default Headerguest;