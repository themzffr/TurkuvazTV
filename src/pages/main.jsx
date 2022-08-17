import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';

import GifLoader from 'react-gif-loader';
import Diziler from '../Components/diziler';
import Header from '../Components/header';
import Footer from '../Components/footer';
import Horizantal from '../Components/horizantalslider';
import Slider from '../Components/slider';
import Modali from '../Components/modal';

import { useState, useEffect, useLayoutEffect } from 'react';
import { useDizilerListener } from '../config/firebase';









function Main(props)  {

 
  const[clickedimage, setClickedimage]=useState("");
  const[clickedtitle, setClickedtitle]=useState("");
  const[clickediframe, setClickediframe]=useState("");
  const[clickeddesc, setClickeddesc]=useState("");
  const[clickedid, setClickedid]=useState("");
  const[clickedvert, setClickedvert]=useState("");
  const[clickedtur, setClickedtur]=useState("");
const [dizilist, setDizilist]=useState([]);


       const[windowSizem, setWindowSizem]=useState();    

 
       
    


 
   function openModal(image, title, iframe, description, id, verticalimage, tur){


setWindowSizem(window.innerWidth);

        setClickedimage (image);
        setClickedtitle (title);
  setClickediframe(iframe);
        setClickeddesc(description);
        setClickedid(id);
setClickedtur(tur);
setClickedvert(verticalimage); 
 
 if (windowSizem>800){
return document.getElementById('myModal').style.display="block";}

 if(windowSizem<780){
  document.getElementById('myModal').style.display="none";
const categorytur = clickedtur.charAt(0).toUpperCase() + clickedtur.slice(1);
 window.location.href = "icerik/"+categorytur+"-"+id;
 }
    }
  
  
const dizilerim= useDizilerListener();
 

 useEffect (() => {
  
 setDizilist( dizilerim);


    
   
 }, [])
 
        
        return (
        <div className="container-fluid" >
         <Header/>
        <Slider/> 

  <Diziler dizilist={dizilerim} openModal={openModal}  />
<div className='container pt-5 pb-5 mobile-top'>
<h3>Son Bölümler</h3>
    <Horizantal dizilist={dizilerim} openModal={openModal}  /></div>
<Modali dizilist={dizilist} clickedimage={clickedimage} clickedtitle={clickedtitle} clickediframe={clickediframe} clickeddesc={clickeddesc} clickedid={clickedid} clickedvert={clickedvert} clickedtur={clickedtur}/>
<footer><Footer/></footer> 
    </div>
 
   );
}

export default Main;