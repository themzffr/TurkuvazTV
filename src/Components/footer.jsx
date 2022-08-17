import React , { Component } from 'react';
import '../index.css';


class Footer extends Component {

    render(){ return(<div className="container-fluid">
  <div className="row">
    <div className="col-6 col-md-3 logo-area">
      <img
        src="../images/turkuvaz-tv-white.png"
        alt="Turkuvaz Tv"
        className="logo"
      />
    </div>
    <div className="d-none d-sm-block col-sm-4 " />
    <div className="col-6 col-sm-4"></div>
  </div>
</div>
);}
    
}   export default Footer;