import React , { Component } from 'react';
import '../index.css';

import Diziler from './diziler';

class Slider extends Component {

playVideo(e) {
        let video = e.currentTarget 
        let videom=video.children[0].children[0].children[0].children[0];
        videom.play();
    }
    
stopVideo(e) {
    let video = e.currentTarget 
    let videom=video.children[0].children[0].children[0].children[0];
        
        videom.pause();
    }

    render(){ 

   


      return(

  
        <div className="container-fluid main mb-5 " >
          <div className="bd-example w-100 mobile-top"  onMouseOver={this.playVideo.bind(this)} onMouseOut={this.stopVideo.bind(this)}>
            <div id="carouselExampleCaptions w-100" className="carousel slide" data-ride="carousel">
             
              <div className="carousel-inner main-slider">
                <div className="carousel-item active" style={{height: '100% !important'}}>
                   <video className="d-block slidimg  slider-image w-100" id="slider-video" poster="images/avengers.jpeg" loop muted  >
                    <source src="/images/infinity-war.mp4" type="video/mp4" />
                  </video>
                  <div className=" slider-overlay carousel-caption d-none d-md-block" style={{display: 'block !important'}}>
                    <div className="slider-title">
                      <h1 className="animate__bounce">AVANGERS <br /> INFINITY WAR</h1>
                   

                    </div>
                  </div>
                </div>
              
              </div>
           
            </div>
          </div>
        </div>
      );
    }
  }
  export default Slider;