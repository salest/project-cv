import React from "react";
import InfoInput from "./InfoInput";
import SchoolInput from "./SchoolInput";
import SkillInput from "./SkillInput";
import ExpInput from "./ExpInput";
const Sidebar = (props) => {
    const { 
        info, 
        handleInfoChange,
        schoolState,
        skillState,
        expState,
        handleSchoolChange,
        handleSkillChange,
        handleExpChange
    } = props;
    return (
        <div className="sidebar">
            <InfoInput info={info} handleInfoChange={handleInfoChange} />
            <hr className="section-line"></hr>
            <SchoolInput schoolState={schoolState} handleSchoolChange={handleSchoolChange} schoolId={0}/>
            <hr className="section-line"></hr>
            <SkillInput skillState={skillState} handleSkillChange={handleSkillChange} skillId={0} />
            <hr className="section-line"></hr>
            <ExpInput expState={expState} handleExpChange={handleExpChange} expId={0} />
        </div>
    )
}

export default Sidebar;