import React from 'react';
import '../css/teacher/TeaOd.css';
import calstart from "../images/calstart.png"
import calend from "../images/calend.png"
import cause from "../images/cause.png"
import role from "../images/role.png"
import teacher from "../images/teacher.png"
import accept from "../images/checked.png"
import reject from "../images/decline.png"
export default function TeaOd() {

    return (
        <div className='overallq'>
            <div className="tea2q">
                    <div className="tea21q"></div>
                    <div className="tea22q">
                        <div><p className="nameq">NITHIN KM</p></div>
                        <div><p>CB.EN.U4CSE20342</p></div>
                        <div className="statq" style={{backgroundColor:'#564FBD'}}><p >ON DUTY</p></div>
                </div>
                    
            </div>
            
            <div className="tea3q">
            <div className="odpanelq" style={{ borderColor: 'rgb(86, 79, 189,50%)'}}>
                <div className="odformq">
                <form className="odinputq">
                    <div className="odinq">
                    <img className="odimg1q" src={cause} alt="polygon"  />
                        <div>
                        <label>Cause</label>
                        <p>ANOKA</p>
                        </div>
                    </div>
                    <div className="odinq">
                    <img className="odimgq" src={role} alt="polygon" />

                        <div>
                        <label>Role</label>
                        <p>Volunteer</p>
                        </div>
                    </div>
                    <div className="odinq">
                    <img className="odimgq" src={calstart} alt="polygon" />
                        <div>
                        <label>From</label>
                        <p>20/05/2023</p>
                        </div>
                    </div>
                    <div className="odinq">
                    <img className="odimgq" src={calend} alt="polygon" />
                        <div>
                        <label>To</label>
                        <p>24/05/2023</p>
                        </div>
                    </div>
                    <div className="odinq">
                    <img className="odimgq" src={teacher} alt="polygon" />
                        <div>
                        <label>Teacher</label>
                        <p>Kishore Kumar</p>
                        </div>
                    </div>
                </form>
                </div>
                
                
            </div>
            <form className='teaform'>
            <div className='tea4q'>
            
                <div className='qq1'>
                <img className="odimgq" src={accept} alt="polygon" />
                </div>
                <div className='qq1'>
                <img className="odimgq" src={reject} alt="polygon" />
                </div>
            
            </div>
            </form>

        </div>
    </div>
    )
}