import React,{Component, useEffect, useState} from 'react';
import '../index.css';
import '../App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import {  onSnapshot,  doc , setDoc, updateDoc, collection
} from "firebase/firestore";
import {firestorem, useUserListener} from '../config/firebase';

class Modal extends Component  {
  constructor(props){
    super(props)
  
  
  }
playimVideo(e) {
  


  
}

stopVideo(e) {

  }

   
 closeModal(e){document.getElementById(e.currentTarget.id).parentElement.parentElement.style.display="none";
 
 
 this.setState({
  clickediframe: " "
});
 

}
  listeneEkle(e){
const userRef = doc(firestorem, "users/", localStorage.getItem("uid"));


setDoc(userRef,{

list:{[this.props.clickedid]:{ 
   productname: this.props.clickedtitle,
  verticalimage: this.props.clickedvert,
  id:this.props.clickedid,
  tur:this.props.clickedtur
  }}

  
  
    

  
}, { merge: true });
  }
 render()
 
 {   const {clickedimage, clickedtitle,clickediframe,  clickeddesc, clickedid, clickedvert, clickedtur }=this.props; 
 const categorytur = clickedtur.charAt(0).toUpperCase() + clickedtur.slice(1);
 const id=clickedid;
   const pathId= categorytur+"-"+clickedid;
   const path="/icerik/"+pathId;

   
   return (
<div id="myModal"  className="modal">
    <div className="modal-content container" id="modal-inner "        style={{background:"black"}} >
      <span className="close" id="closebutton" onClick={this.closeModal.bind(this)}>
        ×
      </span>
      <div className="row" style={{background:"black"}}>
        <div className="col-12 col-sm-12 table video" onMouseOver={this.playimVideo.bind(this)} >
          <div className="cover" >
        <div className='modalOverlay'   >
          <div className='modalOverlay-inner'>
            <div className='m-5 ' style={{display:"block"}}>
               
              <h3 >{clickedtitle}</h3>
              <a href={path}>  <button className="btn-modal btn-turkuvaz mt-2" >Şimdi İzle </button></a>
              <button className="btn-modal btn-turkuvaz mt-2 ml-4" onClick={this.listeneEkle.bind(this)}>Listene Ekle</button>
          
              
        </div> </div></div>
       <div>   
   {  
   /*    <div id='videooverlay' className='video-overlay' style={{ backgroundImage:"url("+clickedimage+")"  }}></div>*/}
<iframe  src={clickediframe} width="100%" height={"500px"}  frameborder="0"></iframe> </div>
        </div></div>
        <div className="col-12 col-sm-12 ">
         
       <p className='m-5 '> {clickeddesc}</p>

        </div>
      </div>
    </div>
</div>
   );}} export default Modal;