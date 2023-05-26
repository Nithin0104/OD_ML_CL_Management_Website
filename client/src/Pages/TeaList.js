import React from "react"
import '../css/teacher/TeaList.css';
import calstart from "../images/calstart.png"
import calend from "../images/calend.png"
export default function TeaList(){
    return(
    <div className="Slist">
    <div className="Shead"><p>EVENTS</p></div>
    <div className="Sline"></div>
    <div className="Events">
        <div className="EventSlab">
            <div className="EventSp">

            </div>
            <div className="EventSdet">
                <div className="Eve1"><p>ANOKHA</p></div>
                <div className="Eve2"></div>
                <div className="Eve3">
                    <div className="Eve31"><p><img className="calsa" src={calstart} alt="polygon" /> 23/03/2023</p></div>
                    <div className="Eve32"><p><img className="calen" src={calend} alt="polygon" /> 23/03/2023</p></div>
                </div>
                <div className="Eve4"><p><b>ORGANIZER: </b>Amrita School of Computing</p></div>
                <div className="Eve5"><p><b>DEPT:</b> CSE MECH ECE</p></div>
                <div className="Eve6">
                    <div className="Eve61"><p><b>APPLIED:</b> 23</p></div>
                    <div className="Eve62"><p><b>VIEW</b></p></div>
                </div>
            </div>
        </div>
        <div className="EventSlab">
        <div className="EventSp">

</div>
<div className="EventSdet">
    <div className="Eve1"><p>ANOKHA</p></div>
    <div className="Eve2"></div>
    <div className="Eve3">
        <div className="Eve31"><p><b>START DATE:</b> 23/03/2023</p></div>
        <div className="Eve32"><p><b>END DATE:</b> 23/03/2023</p></div>
    </div>
    <div className="Eve4"><p><b>ORGANIZER: </b>Amrita School of Computing</p></div>
    <div className="Eve5"><p><b>DEPT:</b> CSE MECH ECE</p></div>
    <div className="Eve6">
        <div className="Eve61"><p><b>APPLIED:</b> 23</p></div>
        <div className="Eve62"><p><b>VIEW</b></p></div>
    </div>
</div>
        </div>
    </div>

    </div>
       )
}