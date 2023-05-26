import React from "react"
import Header from "./Header"
import TeaList from "./TeaList"
import TeaDet from "./TeaDet"
import '../css/teacher/TeaEvent.css';
export default function TeaEvent(){
    return(
    <div className="TeaWeb">
        <Header />
        <div className="TeaPanel">
            <div className="TeaL"><TeaList /></div>
            <div className="TeaD"><TeaDet /></div>
        </div>
    
    
    </div>
       )
}