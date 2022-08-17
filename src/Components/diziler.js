import '../App.css';
import '../index.css';

import { Component } from 'react';
import Header from './header';
import Modali from './modal';

class Diziler extends Component {
state={clickedimage:"",
clickedtitle:""}

    openMod(e){
 
 const    source=e.currentTarget;
  const modaltur=source.children[1].children[0].children[0].children[6].innerHTML;
  const    modalImage=source.children[1].children[0].children[0].children[3].src;
  const modalTitle=source.children[1].children[0].children[0].children[0].innerHTML;
  const modalIframe=source.children[1].children[0].children[0].children[1].innerHTML;
  const modalDesc=source.children[1].children[0].children[0].children[2].innerHTML;
  const modalid=source.children[1].children[0].children[0].children[4].innerHTML;
  const modalvert=source.children[1].children[0].children[0].children[5].src;

  const {openModal}=this.props;
 console.log("modaltur",modaltur);
  openModal(modalImage, modalTitle, modalIframe, modalDesc, modalid, modalvert, modaltur, );




 
   
    }
    scrollDireit(e) {   
      
      const triggered= e.currentTarget;
     
    triggered.parentElement.children[1].scrollLeft+= 400; }
    scrollEsquerd(e){
      const triggered= e.currentTarget;
      
      triggered.parentElement.children[1].scrollLeft-= 400;

    }
   
   render(){ 
    const {dizilist}=this.props;

    return ( 
      
    <div className="container">
       <h2>Diziler</h2>
    <div className="card-slider tv-card-slider">
  
      <span id="handlePrev" onClick={this.scrollEsquerd.bind(this)} className="handle handlePrev active">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
      </span>
    
      <div id="scroller2" className="row card-row">
        <div className="row__inner" id="diziler-row">

      {dizilist.map( (dizilist, i) =>{
     
            return(<div key={i}  id={dizilist.id} className="turkuvaz-card tv-card " onClick={this.openMod.bind(this)} >
            <div className="popular-card__media" >
        <img className="tv-card__img " src={dizilist.verticalimage} alt="" />
    </div>
              {dizilist.productname}
             
              <div className="popular-card__details">

        <div className="popular-card__title">
        {dizilist.productname}
        <div className='none'>
        <p>  {dizilist.productname}</p>
<p> {dizilist.iframe}</p>
<p>{dizilist.desc}</p>
<img src={dizilist.horizantalimage} />
<p>{dizilist.id}</p>
<img src={dizilist.verticalimage} />
<p>{dizilist.tur}</p>

        </div>
        </div>
    </div>
            </div>
      
        );
      })}
        </div>
      </div>
      <span id='handleNext' onClick={this.scrollDireit.bind(this)} className="handle handleNext active">
        <span className="carousel-control-next-icon" aria-hidden="true" />
      </span>
    </div>

  
  </div>
  
    );
}}

export default Diziler;
