import React from "react"
import '../css/teacher/TeaDet.css';
import search from "../images/search.png"
import TeaOd from "./TeaOd"
// import approved from "../images/checked.png"
export default function TeaDet(){
    return(
    <div className="TeaDpan">
        <div className="TeaDeve">
            <div className="tea1">
                <div className="tea11">
                    <input></input>
                    </div>
                <div className="tea12"><img className="search" src={search} alt="msg" />
                </div>

            </div>
            <div className="teach2"><TeaOd /></div>
            
            
            
            
        </div>
    </div>
       )
}

{/* <div className="detline"></div> */}