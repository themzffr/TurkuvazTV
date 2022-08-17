import React,{Component, useEffect, useState, useNavigate} from 'react';
import { signOut } from 'firebase/auth';
import {auth} from '../config/firebase';
import { Outlet, Navigate } from "react-router-dom";

import '../index.css';

import Header from '../Components/header';
import Footer from '../Components/footer';

import {useUserListener, useDizilerListener }from '../config/firebase';
import Diziler from '../Components/diziler';


const local=localStorage.getItem("uid");
console.log("localid", local);


export const Profile= () =>  {
    
const userlist= useUserListener();
const [isloading, setIsloading]=useState(false);

const main=document.getElementById("member-page");

const [list, setList] = useState([]);

const parseList=([]);


function Signout(){

    localStorage.setItem('uid', null);
    const uid=localStorage.getItem('uid');
    console.log(uid);
    signOut(auth);
}
 
function List(){
    localStorage.setItem("favorites", "");
const objArray = [];
    Object.keys(userlist.list).forEach(key => objArray.push({
      id: key,
      verticalimage:userlist.list[key].verticalimage,
      productname:userlist.list[key].productname,
      tur:userlist.list[key].tur,
     data: userlist.list[key]
    }));
    localStorage.setItem("favorites", JSON.stringify(objArray));
    
    
 
        const deneme=userlist.list;
setList(objArray);
console.log("list", list);

   const dizilistArea=document.getElementById("dizilist");
    dizilistArea.style.display="block";

}
    if (userlist.profilephoto===null || userlist.profilephoto==="" ){

        userlist.profilephoto="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";
    }


    
function openModal(modalImage, modalTitle, modalIframe, modalDesc, modalid, modalvert, modaltur){
 
    console.log("tur",modaltur);
    const categorytur = modaltur.charAt(0).toUpperCase() + modaltur.slice(1);
 window.location.href = "icerik/"+categorytur+"-"+modalid;
 

   }

   return (<div className="container-fluid" >

<Header/>

<main className=' pt-5 pb-5' id='member-page'>
<div className='container memberbox p-5 m-5' id='member-page-container'>
<div className="row">
    <div className="col-12 col-sm-4 col-md-3">
      <div className="info col-12"> <img className='profilepage-photo' src={userlist.profilephoto} alt="" />
        <h4 className='p-3' > {userlist.username}</h4></div> 
<div className="profile-menu col-12">
    <ul>
        <li><a>Kişisel Bilgiler</a></li>
        <li onClick={List}><a>İzleme Listem</a></li>
        <li><a>Sorun Bildir</a></li>
        <li onClick={Signout}><a>Çıkış Yap</a></li>
        </ul>
</div>
    </div>
    
    <div className="col-12 col-sm-8">
   <div id='dizilist'><Diziler dizilist={list} openModal={openModal} /></div> 
    </div>
</div>
</div>
    
</main>
<footer ><Footer/></footer> 
    </div>
 
   );
}

export default Profile;