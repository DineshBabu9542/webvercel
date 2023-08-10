
import { Component } from "react"

import {browserHistory} from 'react-router'

import Cookies  from "js-cookie"

import Home from '../Home'

import Header from '../Header'


import "./index.css"




class LoginForm extends Component {

 
    state={
        username:'',
        password:'',
        errorMsg:'',
        isTrue:false
    } 
    
    

    


    onChangeUserName=(event)=>{
        
        this.setState({username:event.target.value})
        

    }


    onChangePassword=(event)=>{
        
        this.setState({password:event.target.value})

    }


    loginNameInput =() => {

        const{username}=this.state

        return(

        <div className="userNameContainer">
           <label className="input-name-label" htmlFor="userName">UserName</label>
           <div className="input-text-conatiner">
           <input value={username} onChange={this.onChangeUserName} id="userName" type="text" className="input-name" placeholder="UserName" />
           </div>
        </div>

        )
    }

    loginPasswordInput =() => {

        const{password}=this.state
        
        return(

            <div className="passwordContainer">
               <label className="input-password-label" htmlFor="password">Password</label>
               <div>
               <input value={password} id="password" onChange={this.onChangePassword} type="password" className="input-password-class" placeholder="Password" />
               </div>
            </div>
    
            )
    }
    

    

    sendJwttoken=(jwtToken) => {

      

       console.log(jwtToken)
       Cookies.set('jwt_token',jwtToken, {expires:30}) 

       
       
      
        
    }

    errorMessage =(errorMsg)=>{


        this.setState({errorMsg:errorMsg,isTrue:true})
               
    }

    onSubmitBtn = async(event) =>{

        event.preventDefault()

        const {username,password}=this.state 

        const userDetails={username,password}

        const url = 'https://apis.ccbp.in/login'

        const person ={
            method:"POST",
            body:JSON.stringify(userDetails)
        }

        const response = await fetch(url,person)

        const data = await response.json()
        console.log(response)
        
      

        if(response.ok === true){

            this.sendJwttoken(data.jwt_token)
            
            
        }

        else{

            this.errorMessage(data.error_msg)
        }
    }

    render(){
        const {username,password,isTrue,errorMsg}=this.state 
        return(
            <div className="login-container">
           
             <img className="shopping-name-img"  alt='loginNameImg' src="https://res.cloudinary.com/did7zzt4e/image/upload/v1688039623/large_shoppingprep_gbvxsv.png"/>
             
            <div className="log-image-and-form-container">
            <div>
              <img className="shopping-content-img"  alt='loginImg' src="https://res.cloudinary.com/did7zzt4e/image/upload/v1688037525/login_img02_fgp5ri.png"/>
             </div> 
             <div>
            <form className="form-container" onSubmit={this.onSubmitBtn}>
               <div>{this.loginNameInput()}</div> 
               <div>{this.loginPasswordInput()}</div> 
               <button className="form-btn" type="submit">Login</button>
            </form>
             <div className="error-msg-container">
              {isTrue && <p className="error-msg">{errorMsg}</p> }
            </div>
            </div>
            
            </div>
            
           </div>
        )
    }
}

export default LoginForm