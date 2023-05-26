import React from "react"
import '../css/onduty.css'
import Header from "./Header"
import calstart from "../images/calstart.png"
import calend from "../images/calend.png"
import cause from "../images/cause.png"
import role from "../images/role.png"
import teacher from "../images/teacher.png"
export default function OnDuty(){
    return(
        
        <div className="odweb">
        <Header />
            <div className="odfull">
            <div className="odhead">Request for <span style={{ color: '#564FBD'}}>On Duty</span> Leave</div>
            <div className="odline"></div>
            <div className="odpanel" style={{ borderColor: 'rgb(86, 79, 189,50%)'}}>
                <div className="odform">
                <form className="odinput">
                    <div className="odin">
                    <img className="odimg1" src={cause} alt="polygon"  />
                        <div>
                        <label>Cause</label>
                        <input type="text" placeholder="Cause" id="cause"/>
                        </div>
                    </div>
                    <div className="odin">
                    <img className="odimg" src={role} alt="polygon" />

                        <div>
                        <label>Role</label>
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
                </form>
                </div>
                
                
            </div>
            </div>
        </div>
    )
}