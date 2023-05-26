import React from "react"
import logo from "./logo.png"
import msg from "./message.png"
import profile from "./profile.png"
import './header.css';

import { BrowserRouter as Router,Route } from "react-router-dom";

export default function Header(){
    return(
        <header>
        <div className="headLeft">
            <div><img className="headlogo" src={logo} alt="polygon" /></div>
        </div>
        <div className="headRight">
            <div className="link1"><p>ON DUTY</p></div>
            <div className="link2"><p>MEDICAL</p></div>
            <div className="link3"><p>CASUAL</p></div>
            <div className="link4"><img className="msg" src={msg} alt="msg" /></div>
            <div className="link5"><img className="profile" src={profile} alt="profile" /></div>
        </div>
        </header>

    )

}