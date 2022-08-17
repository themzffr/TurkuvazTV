import React, { Component } from 'react'
import Diziler from '../Components/diziler';
import {useParams} from 'react-router-dom';
import Header from '../Components/header';
import Footer from '../Components/footer';
import { useTurlerListener } from '../config/firebase';
function Turlerlist(props) { 
    const {id} = useParams();

const dizilist=useTurlerListener(id);
    return (
      <div>
        <Header/>
        <div id='breadcrumb' className='mobile-top'><h1>{id}</h1></div>
        <Diziler dizilist={dizilist}/>
      <footer>  <Footer /></footer>
      </div>
    )
  
} export default Turlerlist;
