import '../App.css';
import '../index.css';


import { Component } from 'react';

 const scroll="";
 const scrolle="";
class Horizantal extends Component {
  openMod(e){
   
    const    source=e.currentTarget;
    const modalid= source.id;
    const    modalImage=source.children[1].children[0].children[0].children[3].src;
    const    modalvert=source.children[1].children[0].children[0].children[4].src;
    const    modaltur=source.children[1].children[0].children[0].children[5].innerHTML;
    const modalTitle=source.children[1].children[0].children[0].children[0].innerHTML;
    const modalIframe=source.children[1].children[0].children[0].children[1].innerHTML;
    const modalDesc=source.children[1].children[0].children[0].children[2].innerHTML;
    const {openModal}=this.props;
  
    openModal(modalImage, modalTitle, modalIframe, modalDesc, modalid,modalvert, modaltur, );
  
    
  
  
     
      }
  
    scrollDireita(e) {        
        
      const triggered= e.currentTarget;
      
   
        scroll = setInterval(function() {   triggered.parentElement.children[1].scrollLeft += 1 }, 8);
}

stopScroll(e){
clearInterval(scroll);
}
    scrollEsquerda(e){
      const triggere= e.currentTarget;
      
      scroll =  setInterval(function() {   triggere.parentElement.children[1].scrollLeft -= 1 }, 8);
      

    }


   render(){
    const {dizilist}=this.props;
    return (  
    <div className="container">

    <div className="card-slider popular-card-slider">
  
      <span id="handlePrev" onMouseOver={this.scrollEsquerda.bind(this)} onMouseOut={clearInterval(scroll)} className="handle handlePrev active">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
      </span>
    
      <div id="scroller2" className="row card-row">
        <div className="row__inner" id="diziler-row">

      {dizilist.map( (dizilist, i) =>{
            return(<div key={i} id={dizilist.id} className="turkuvaz-card popular-card " onClick={this.openMod.bind(this)}>
            <div className="popular-card__media">
        <img className="popular-card__img " src={dizilist.horizantalimage} alt="" />
    </div>
             
             
              <div className="popular-card__details">
        <div className="popular-card__title">
        {dizilist.productname}
        <div className='none'>
        <p>  {dizilist.productname}</p>
<p> {dizilist.iframe}</p>
<p>{dizilist.desc}</p>
<img src={dizilist.horizantalimage} />
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
      <span id='handleNext' onMouseOver={this.scrollDireita.bind(this)} onMouseLeave={clearInterval(scroll)} className="handle handleNext active">
        <span className="carousel-control-next-icon" aria-hidden="true" />
      </span>
    </div>
  </div>
  
    );
}}

export default Horizantal;