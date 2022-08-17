import '../App.css';
import '../index.css';


import { Component } from 'react';
import Header from './header';
import Modalhoz from './modalhoz';

class Dizilernew extends Component {
state={clickedimage:"",
clickedtitle:""}

    openMod(e){
  document.getElementById('myModal').style.display="block";
 const    source=e.currentTarget;
  const modalid= source.id;
  const    modalImage=source.children[1].children[0].children[0].children[3].src;
  const modalTitle=source.children[1].children[0].children[0].children[0].innerHTML;
  const modalIframe=source.children[1].children[0].children[0].children[1].innerHTML;
  const modalDesc=source.children[1].children[0].children[0].children[2].innerHTML;
  const {openModal}=this.props;
  const {openModa}=this.props;
if(modalIframe===null){modalIframe="#";}


  openModa(modalImage, modalTitle, modalIframe, modalDesc, modalid);


   
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

export default Dizilernew;
