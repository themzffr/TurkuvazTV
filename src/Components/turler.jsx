import React, { Component } from 'react'

export default class Turler extends Component {
  render() {
    return (
  <div className='turler-container drop-down' id='dropmenu'>
<div className="row">
  <div className="col-6">
    <h5>Diziler</h5>
<ul>
<li> <a href='/turler/ask'>Aşk</a></li>
<li> <a href='/turler/dram'>Dram</a></li>
<li> <a href='/turler/aksiyon'>Aksiyon</a></li><li>
  <a href='/turler/tarih'>Tarih</a></li>
  <li> <a href='/turler/savas'>Savaş</a></li>
  <li> <a href='/turler/'>Komedi</a></li>
</ul>

  </div>
  <div className="col-6">
  <h5>Filmler</h5>
  <ul>
<li> <a href='/turler/ask'>Aşk</a></li>
<li> <a href='/turler/dram'>Dram</a></li>
<li> <a href='/turler/aksiyon'>Aksiyon</a></li><li>
  <a href='/turler/tarih'>Tarih</a></li>
  <li> <a href='/turler/savas'>Savaş</a></li>
  <li> <a href='/turler/'>Komedi</a></li>
</ul>

  </div>
</div>
  </div>
    )
  }
}
