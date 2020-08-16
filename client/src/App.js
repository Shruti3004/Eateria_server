import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Default from './Components/Default';
import Cart from './Components/Cart/Cart';
import Modal from './Components/Modal';
import LogoPage from './Components/LogoPage';
import Register from './Components/Login/Register';
import Login from './Components/Login/Login';



function App() {
  return(
    <>
      <Switch>        
        <Route exact path="/" component={LogoPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/products" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />        
        <Route component={Default} />
      </Switch>
      <Modal />
    </>
  )
}

export default App;