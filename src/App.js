import './App.css';
import Main from './pages/main';

import './index.css';
import { UseIsLoggedIn } from './config/hooks';
import React, { Component, useEffect, useState } from 'react';
import Router from './config/router';


const App = () => {






    const uid = UseIsLoggedIn();
console.log("user",uid);

    return ( < Router /> );
}

export default App;