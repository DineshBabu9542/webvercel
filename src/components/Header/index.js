
import React from 'react'

import {Link,Redirect} from 'react-router-dom'


import './index.css'
import Cookies from 'js-cookie'


const Header = () => {


  const onClickLogOutBtn = () => {
       
    Cookies.remove('jwt_token')
    

  }

return (
        <nav>
        <div className="nav-container">

        <img className="shopping-name-image"  alt='loginNameImg' src="https://res.cloudinary.com/did7zzt4e/image/upload/v1688039623/large_shoppingprep_gbvxsv.png"/>

         <div className="shopping-items-container">
          <ul className="un-order-list">
          <Link to="/" className="login-link">
            <li className="list-items">
                Home  
            </li>
            </Link>  
            <Link to="/products" className="login-link">
            <li className="list-items">
                Products 
            </li>
            </Link> 
            <Link to="/cart" className="login-link">
            <li className="list-items">
                Cart  
            </li>
            </Link> 
          </ul> 
          <div className="btn-container">
            <button type="button" className="logout-btn" onClick="onClickLogOutBtn">LogOut</button>
          </div>
          <div className="log-out-img-btn">
            <button type="button" className="btn-icon-img">
            <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
            </button>
          </div>
          </div> 
          </div> 
         
          </nav>
          
    )


}



export default Header