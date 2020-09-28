import React from 'react';
import './App.css';
import Upload from './admin/picUpload.js'
import Home from './website/home.js'
import { Route, Switch } from 'react-router-dom';
import Gallery from './website/gallery.js'
import Signin from './admin/signin.js'
import Service from './website/services.js'
import contact from './website/contact.js'
import Back from './images/back.jpg'
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import BigImage from './website/images.js'
function App() {
require('dotenv').config();


  return (
    <div className="App" style={{backgroundImage: `url(${Back})`,backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",height:"100%"}}>
 <Provider store={store}>
 <Switch>
    <Route path="/" component={Home} exact></Route>
    <Route path="/gallery" component={Gallery} ></Route>
    <Route path="/signin" component={Signin}></Route>
    <Route path="/services" component={Service} ></Route>
    <Route path="/contact" component={contact}></Route>
    <Route path="/admin" component={Upload}></Route>
    <Route path='/images' component={BigImage} /> 
  </Switch>
  </Provider>
    </div>
  );
}

export default App;





const istate={
  credData:null,
}
const reducer=(state=istate,action)=>
{
  
 
  if ( action.type === "logout" ) {
      state.credData = null;
  }
  else if(action.type=== "setCredentials"){
      return{
          ...state,
          credData:action.payload.data,     
          
      };
      
  }
 
  return state;

}

const loadState = () => {
  try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
          return undefined;
      }
      return JSON.parse(serializedState);
  } catch (e) {
      return undefined;
  }
};

const peristedState = loadState();
const store = createStore(reducer,peristedState)

const saveState = (state) => {
  try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
  } catch (e) {
      // Ignore write errors;
  }
};


store.subscribe(() => {
  saveState(store.getState());
});

