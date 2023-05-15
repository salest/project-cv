import React from "react";
import InfoInput from "./InfoInput";
const Sidebar = (props) => {
    const { 
        info, 
        handleInfoChange,
        schoolState,

    } = props;
    return (
        <div className="sidebar">
            <InfoInput info={info} handleInfoChange={handleInfoChange} />
            <hr className="section-line"></hr>
        </div>
    )
}

export default Sidebar;