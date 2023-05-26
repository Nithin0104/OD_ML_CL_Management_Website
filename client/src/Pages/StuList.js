import React from "react"
import '../css/StuList.css';
import {StuListData} from "./Data"
import StuListSlab from "./StuListSlab"
export default function StuList(){

    const listElements = StuListData.map((det) => (
        <StuListSlab title={det.title} org={det.org} dept={det.dept} count={det.count}/>
      ));

    return(
    <div className="Slist">
    <div className="Shead"><p>EVENTS</p></div>
    <div className="Sline"></div>
    <div className="Events">
        {listElements}
        
        
    </div>

    </div>
       )
}