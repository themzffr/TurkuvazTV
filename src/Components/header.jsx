import React , { Component } from 'react';
import '../index.css';
import '../App.css';
import {  Link } from "react-router-dom";
import Turler from './turler';
import { Dropdown } from 'react-bootstrap';

class Header extends Component {
 Dupo(){const dropmenu= document.getElementById("dropmenu");
dropmenu.style.display="block";}

DupoNone(){const dropmenu= document.getElementById("dropmenu");
dropmenu.style.display="none";}


    render(){ 
      


      
      
      return ( 
        <div className="container-fluid header">
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
            <ul
              className="menu"
              style={{
                display: "flex ",
                alignContent: "center !important",
                alignItems: "center !important"
              }}
            >
              <li>
                <a href="/category/diziler" className="menu-item">Diziler</a>
              </li>
              <li>
                <a href="/category/filmler" className="menu-item">Filmler</a>
              </li>
              <li className="mega-drop-dow" onMouseOver={this.Dupo.bind(this)} onMouseOut={this.DupoNone.bind(this)} >
                <a className="menu-item">Kategoriler</a>
                <Turler className="drop-down"/>
              </li>
              <li>
                <a className="menu-item">En Yeniler</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3 right-menu-area">
            <div className="hamburger-menu">
              <input id="menu__toggle" type="checkbox" />
              <label className="menu__btn" htmlFor="menu__toggle">
                <span />
              </label>
              <ul className="menu__box">
                <li>
                  <a className="menu__item" href="#">
                    Filmler
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="category/diziler">
                    Diziler
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="#">
                    Kategoriler
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="#">
                    En Yeniler
                  </a>
                </li>
                <li>
                <a href="/profile"> <button className="btn btn-turkuvaz ml-3">Hesabım </button></a>
                </li>
              </ul>
            </div>
            <a href="/profile"><button className="	d-none d-md-block btn btn-turkuvaz main-menu-button">Hesabım</button></a>
          </div>
        </div>
     
     
        
 </div>
   );}
    
}   export default Header;