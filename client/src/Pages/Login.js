import React from "react"
// import RightLogin from "./RightLogin"
import '../css/index.css';
import Frame from "../images/Frame.png"
import Polygon2 from "../images/Polygon2.png"
import Sally from "../images/Saly-16.png"
import logo from "../images/logo.png"

// import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import StuEvent from './StuEvent'
import RightLogin from './RightLogin'

export default function Login(){

    return(
        <div className="login">
            <div className="abc">
                <div className="login-title">
                <p >
                WELCOME BACK
                </p>
                </div>
                <img className="poly1" src={Frame} alt="polygon" />
                

        
            
            </div>
            <RightLogin />
            
        </div>

    )
}