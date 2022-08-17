import React, { Component } from 'react'
import '../App.css'
import {ReactComponent as ReactLogo} from './turkuvaz-medya.svg';
export default class loader extends Component {
  render() {
    return (
      <div className='loader-area'>   <ReactLogo className='loader' /></div>
    )
  }
}
