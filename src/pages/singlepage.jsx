import React,{Component, useEffect, useState} from 'react';


import {Navigate, useParams} from 'react-router-dom';

import Header from '../Components/header';
import Footer from '../Components/footer';
import {  onSnapshot,  doc ,
    } from "firebase/firestore";
import {firestorem, useMovieListener} from '../config/firebase';
import Bolumler from '../Components/bolumler';


const diziId="";


function Singlepage(props) {

    const {id} = useParams();
    const pathId=id;
    const words = pathId.split('-');
  const control="https://firebasestorage.googleapis.com/v0/b/turkuvaztv.appspot.com/o/videos%2Fvideoplayback.mp4?alt=media&token=03d25898-ad07-40ef-9e8d-c7c85fc558b1";
    const [dizilist, setDizilist]=useState([]);
const video="";

    const unsub = onSnapshot(doc(firestorem, words[0], words[1]), (doc) => {

setDizilist(doc.data()); 
    


 });

 

 
 



return (



<div className="container-fluid" style={{color:"white"}} >

<Header/>

<main className=' pb-5 mobile-top' >
<div className='container-fluid video-area' >
 
<iframe src={dizilist.iframe || control } width="100%" height={"500px"}  frameborder="0"></iframe>
</div>
<div className="container p-5">
    <div className="row">
        <div className="col-12 ">
            <h1 className='single-title'>{dizilist.productname}</h1>
            <h2>Tanıtım</h2>
            <p> {dizilist.desc}</p>        </div>
        <div className="col-12 " id='bolumler'>
    
        <Bolumler diziId={words[1]} />
        </div>
    </div>
</div>
</main>
<footer ><Footer/>
</footer> 
    </div>
 
   );
}

export default Singlepage;