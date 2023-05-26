import React from "react"
import Header from "./Header"
import StuList from "./StuList"
import StuDet from "./StuDet"
import '../css/StuEvent.css';
export default function StuEvent(){
    return(
    <div className="StuWeb">
        <Header />
        <div className="StuPanel">
            <div className="StuL"><StuList /></div>
            <div className="StuD"><StuDet /></div>
        </div>
    
    
    </div>
       )
}