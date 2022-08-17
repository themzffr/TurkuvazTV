import React, { Component, useEffect, useState } from 'react'
import {  onSnapshot,  doc , collection, query, where
} from "firebase/firestore";
import {firestorem} from '../config/firebase';
import Horizantal from './horizantalslider';
function Bolumler(props) {
    const { diziId } = props;
   const [bolumler, setBolumler] = useState([]);
    const bolumlerRef = collection(firestorem, "Bolumler");
    const q = query(bolumlerRef, where("diziid", "==", diziId));

const useBolumlerListener = () => {

     
        useEffect(() => {
    
            return onSnapshot(q, (snaphot) => { setBolumler(snaphot.docs.map(doc => { const datam = doc.data(); return { id: doc.id, ...datam } })) });
        }, []);
    
        return bolumler;
    
    }
    function openModal(modalImage, modalTitle, modalIframe, modalDesc, modalid, modalvert, modaltur){
 
      console.log("tur",modaltur);
      const categorytur = modaltur.charAt(0).toUpperCase() + modaltur.slice(1);
   window.location.href = "/icerik/"+categorytur+"-"+modalid;
   
  
     }
    const bolumlerim=useBolumlerListener();

   if(bolumlerim.length>0){
    return (
      <div className='container'>
<h3>Bölümler</h3>
        <Horizantal dizilist={bolumlerim} openModal={openModal} />
      </div>

    ) }else return (<div></div>)
  
}
export default Bolumler;
