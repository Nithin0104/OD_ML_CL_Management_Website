import React from "react"
import '../css/Classleave.css'
import Header from "./Header"
import calstart from "../images/calstart.png"
import calend from "../images/calend.png"
import cause from "../images/reason.png"
import proof from "../images/proof.png"
import teacher from "../images/teacher.png"
export default function Classleave(){
    return(
        
        <div className="odweb">
        <Header />
            <div className="odfull" >
            <div className="odhead">Request for <span style={{ color: 'rgb(255, 46, 0)'}}>Personal</span> Leave</div>
            <div className="odline"></div>
            <div className="odpanel" style={{ borderColor: 'rgb(255, 46, 0,50%)'}}>
                <div className="odform">
                <form className="odinput">
                    <div className="odin">
                    <img className="odimg" src={cause} alt="polygon"  />
                        <div>
                        <label>Medical Reason</label>
                        <input type="text" placeholder="Cause" id="cause"/>
                        </div>
                    </div>
                    <div className="odin">
                    
                    <img className="odimg" src={calstart} alt="polygon" />
                        <div>
                        <label>From</label>
                        <input type="text" placeholder="Cause" id="cause"/>
                        </div>
                    </div>
                    <div className="odin">
                    <img className="odimg" src={calend} alt="polygon" />
                        <div>
                        <label>To</label>
                        <input type="text" placeholder="Cause" id="cause"/>
                        </div>
                    </div>
                    <div className="odin">
                    <img className="odimg" src={teacher} alt="polygon" />
                        <div>
                        <label>Teacher</label>
                        <input type="text" placeholder="Cause" id="cause"/>
                        </div>
                    </div>
                    <div className="odin">
                    <img className="odimg" src={proof} alt="polygon"  />
                        <div>
                        <label>Proof</label>
                        <input type="text" placeholder="Cause" id="cause"/>
                        </div>
                    </div>
                </form>
                </div>
                
                
            </div>
            </div>
        </div>
    )
}