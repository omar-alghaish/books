import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux"
import store from './redux/store';

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"


if('serviceWorker' in navigator){
  navigator.serviceWorker
  .register('/service-worker.js', {scope: '/'})
  .then((registeration)=>{
    
  })
  .catch((err)=>{
    console.log('Service worker registration faild:', err)
  })
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  // </React.StrictMode>
);
