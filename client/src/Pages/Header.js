import React from "react"
import logo from "../images/logo.png"
import msg from "../images/message.png"
import profile from "../images/profile.png"
import '../css/header.css';
import { Link } from "react-router-dom";
export default function Header(){
    return(
        <header>
        <div className="headLeft">
            <div><img className="headlogo" src={logo} alt="polygon" /></div>
        </div>
        <div className="headRight">
            <div className="link1"><Link to="/student/onduty" style={{ color: '#FFFFFF', textDecoration: 'none' }}><p>ON DUTY</p></Link></div>
            <div className="link2"><Link to="/student/ml" style={{ color: '#FFFFFF', textDecoration: 'none' }}><p>MEDICAL</p></Link></div>
            <div className="link3"><Link to="/student/cl" style={{ color: '#FFFFFF', textDecoration: 'none' }}><p>CASUAL</p></Link></div>
            <div className="link4"><img className="msg" src={msg} alt="msg" /></div>
            <div className="link5"><img className="profile" src={profile} alt="profile" /></div>
        </div>
        </header>

    )

}

