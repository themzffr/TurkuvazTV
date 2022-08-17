import React,{Component, useEffect, useState, useNavigate} from 'react';
import { Navigate } from "react-router-dom";
import {useParams} from 'react-router-dom';
import '../index.css';
import { signIn} from '../config/firebase';
import { auth } from "../config/firebase";
import   { signInWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';
import Headerguest from '../Components/headerguest';
import Footer from '../Components/footer';






export const SignIni= () =>  {
    
  const handleSubmit = useCallback(async e => {
    e.preventDefault()
    
    const { email, password } = e.target.elements
 const innermessage=document.getElementById("hata");
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value).then((response) => {
        console.log('uid', response.user.uid);
        localStorage.setItem('uid', response.user.uid);
        window.location.href = '/profile';

      })
    } catch (e) {
 
 if(e.message==="Firebase: Error (auth/user-not-found)."){ innermessage.innerHTML="Kullanıcı Bulunamadı" ;}else if(e.message==="Firebase: Error (auth/wrong-password)."){innermessage.innerHTML="Şifreniz yada kullanıcı adınız hatalı!";}
    }
  }, [])
    
  const page=window.location.pathname;
 
   return (<div className="container-fluid" >

<Headerguest page={page} />

<main className='pt-5 pb-5' id='member-page'>
<div className='memberbox p-5 m-5'>

<h1 className='giris'>Giriş Yap</h1>
<small id='hata'></small>

<form onSubmit={handleSubmit}>
<div className="form-group ">    <input className="form-control" name="email" placeholder="email" type="email" />
      </div>  <div className="form-group pt-3 pb-3 ">
        <input className="form-control" name="password" placeholder="şifre" type="password" />
       </div> <button className='btn-turkuvaz' type="submit">Giriş</button>
      </form>
<small className='giris cursol' > <a href="/register"> Hesabınız yok mu <strong>üye olun!</strong></a></small>

      </div>

</main>
<footer ><Footer/></footer> 
    </div>
 
   );
}

export default SignIni;