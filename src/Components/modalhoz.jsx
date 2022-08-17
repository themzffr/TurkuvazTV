import React,{Component, useEffect, useState} from 'react';
import '../index.css';
import '../App.css';



class Modalhoz extends Component  {
  constructor(props){
    super(props)
  
  
  }
playimVideo(e) {
    let video = e.currentTarget;
    let videom=video.children[1].children[0];
console.log("video"+videom);
    videom.play();
    
  
}

stopVideo(e) {
  let video = e.currentTarget 
  let videom=video.children[1].children[0];
      
      videom.pause();
  }

   
 closeModal(e){document.getElementById(e.currentTarget.id).parentElement.parentElement.style.display="none";
 


    

 

 
 this.setState({
  clickediframe: " "
});
 

}
  
 render()
 {   const {clickedimage, clickedtitle,clickediframe,  clickeddesc, clickedid, clickedcategory }=this.props; 
   
 const category=clickedcategory;
   const pathId= clickedid;
   const path="/icerik/"+category+"-"+pathId;


   
   return (
<div id="myModal"  className="modal">
    <div className="modal-content container" id="modal-inner "        style={{background:"black"}} >
      <span className="close" id="closebutton" onClick={this.closeModal.bind(this)}>
        ×
      </span>
      <div className="row" style={{background:"black"}}>
        <div className="col-12 col-sm-12 table"  >
        <div className="cover">
        <div className='modalOverlay'   >
          <div className='modalOverlay-inner'>
            <div className='m-5 ' style={{display:"block"}}>
               
              <h3 >{clickedtitle}</h3>
              <button className="btn-modal btn-turkuvaz mt-2" ><a href={path}>Şimdi İzle</a> </button>
              
     
        </div> </div></div>
       <div> <video className="d-block slidimg  slider-image w-100" id="slider-video modal-video" poster={clickedimage} autoPlay loop muted  >
                    <source src={clickediframe} type="video/mp4" />
                  </video>  </div>
        </div></div>
        <div className="col-12 col-sm-12 ">
         
       <p className='m-5 '> {clickeddesc}</p>

        </div>
      </div>
    </div>
</div>
   );}} export default Modalhoz;