import React, { useState } from 'react';
import '../css/StuDet.css';
import '../css/Cal.css';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import approved from "../images/checked.png";
import StuDetData from "./Data";
import StuDetSlab from "./StuDetSlab";

export default function StuDet() {
  const detElements = StuDetData.map((det) => (
    <StuDetSlab title={det.title} reason={det.reason} src={det.src} />
  ));

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="StuDpan">
      <div className="StuDcal">
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>
      <div className="StuDeve">
        <div className="eve">
          <div className="evedatetitle">
            <p>DETAILS -------- {selectedDate.toLocaleDateString()}</p> {/* Display the selected date */}
          </div>
          <div className="eve"></div>
        </div>
        {detElements}
        <div className="detline"></div>
      </div>
    </div>
  );
}