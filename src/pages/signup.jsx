import React,{Component, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';


import {signUp} from '../config/firebase';
import Headerguest from '../Components/headerguest';
import Footer from '../Components/footer';





class SignUpi extends Component {
     olun(e){
        let name=document.getElementById("exampleInputName1").value;
        let email=document.getElementById("exampleInputEmail1").value;
        let password=document.getElementById("exampleInputPassword1").value;
        let password2=document.getElementById("exampleInputPassword2").value;
        console.log(password2);
        if(password==password2 && email !="" && password!="" && password2!="" ){
          try {
   signUp(name, email, password).then((response) => {
         
          localStorage.setItem('yuid', response);
          console.log(response);
        })
      }catch (e) {console.log("mistake"+e)};
         }else{alert("gerizekalı")} }
    
    render(){return (<div className="container-fluid" >

<Headerguest />

<main className='pt-5 pb-5' id='member-page'>
<div className='memberbox p-5 m-5'>


<h1 >{localStorage.getItem('yuid')}</h1>
      <form>
      <div className="form-group   ">

          <label htmlFor="exampleInputName1">Adınız </label>
          <input type="name" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Adınız" />
               </div>
        <div className="form-group ">
          <label htmlFor="exampleInputEmail1">E-mail adresiniz</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
              </div>
        <div className="form-group  ">
          <label htmlFor="exampleInputPhone1">Telefon Numaranız</label>
          <input type="phone" className="form-control" id="exampleInputPhone1" placeholder="Telefon" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Şifre</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Şifre" />
        </div>
        <div className="form-group  ">
          <label htmlFor="exampleInputPassword2">Şifre Kontrol</label>
          <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Şifre" />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Onayla</label>
        </div>
    
      <button type="submit" onClick={this.olun.bind(this)}  className="btn btn-turkuvaz ">Üye Ol</button>
      </form>

<small className='  cursol' > <a href="/member"> Hesabınız var mı <strong>giriş yapın!</strong></a></small>

      </div>

</main>
<footer ><Footer/></footer> 
    </div>
 
   );
}}

export default SignUpi;