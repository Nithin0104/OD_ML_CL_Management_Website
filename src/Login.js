import React from "react"
// import RightLogin from "./RightLogin"
import './index.css';
import Polygon1 from "./Polygon1.png"
import Polygon2 from "./Polygon2.png"
import Sally from "./Saly-16.png"
import logo from "./logo.png"
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import StuEvent from './StuEvent'

export default function Login(){

    return(
        <div className="login">
        <div>
        <div className="login-title">
        <p >
                {window.innerHeight} -- {window.innerWidth}
            </p>
        </div>
        <img className="poly1" src={Polygon1} alt="polygon" />
        <img className="poly2" src={Polygon2} alt="polygon" />
        <img className="sally" src={Sally} alt="polygon" />
        <img className="logo" src={logo} alt="polygon" />

        
            
        </div>
        <div className="login-details">
        <div className="login-details-inside">
            <div className="login-type">
            <p className="login-heading">LOGIN</p>
            <div className="login-line"></div>
            <form action="">
                <div className="inputuser">
                    <label>Username</label><br />
                    <input type="text" className="username" id="fname" name="fname" /><br />
                </div>
                <div className="inputpass">
                    <label>Password</label><br />
                    <input type="text" className="password" id="pass" name="pass" /><br />
                </div>
                <div className="submit">
                <BrowserRouter><div><p><Link to="/StuEvent">Login</Link></p></div>
          
       </BrowserRouter>
                
                </div>
            </form> 
            </div>
            </div>
        </div>
            
        </div>

    )
}