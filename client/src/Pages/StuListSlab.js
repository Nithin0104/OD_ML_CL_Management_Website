import React from "react"
import calstart from "../images/calstart.png"
import calend from "../images/calend.png"

export default function StuListSlab(props){


    return(
        <div className="EventSlab">
            <div className="EventSp">

            </div>
            <div className="EventSdet">
                <div className="Eve1"><p>{props.title}</p></div>
                <div className="Eve2"></div>
                <div className="Eve3">
                    <div className="Eve31"><p><img className="calsa" src={calstart} alt="polygon" /> 23/03/2023</p></div>
                    <div className="Eve32"><p><img className="calen" src={calend} alt="polygon" /> 23/03/2023</p></div>
                </div>
                <div className="Eve4"><p><b>ORGANIZER: </b>{props.org}</p></div>
                <div className="Eve5"><p><b>DEPT:</b> {
                    props.dept
                }</p></div>
                <div className="Eve6">
                    <div className="Eve61"><p><b>COUNT:</b> {props.count}</p></div>
                    <div className="Eve62"><p><b>APPLY</b></p></div>
                </div>
            </div>
        </div>
    )
}