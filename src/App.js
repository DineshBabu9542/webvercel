
import {BrowserRouter, Routes, Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import LoginForm from './components/LoginForm';
import Products from './components/Products'
import './App.css';
import Header from './components/Header';

const App = () => (

  <div>
   <BrowserRouter>
 
    <Routes>
      <Route exact path="/login" element={<LoginForm/>} />
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/products" element={<Products/>} />
    </Routes>
    
   </BrowserRouter>

    

  </div> 
  );



export default App;
