import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Header from './Components/header';
import Footer from './Components/footer';
import Modal from './Components/modal';
import Diziler from './Components/diziler';
import Horizantal from './Components/horizantalslider';
import reportWebVitals from './reportWebVitals';





const root = ReactDOM.createRoot(document.getElementById('root'));
const header=ReactDOM.createRoot(document.getElementById('header'));
const footer=ReactDOM.createRoot(document.getElementById('footer'));
const modal=ReactDOM.createRoot(document.getElementById('myModal'));
const sonbolumler=ReactDOM.createRoot(document.getElementById('sonbolumler'));



root.render(
  <React.StrictMode>
        
    <Diziler />
  </React.StrictMode>
);
sonbolumler.render(
  <React.StrictMode>
    
  <Horizantal />
</React.StrictMode>

)
header.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);
modal.render(<React.StrictMode>
  <Modal />
</React.StrictMode>)
reportWebVitals();
