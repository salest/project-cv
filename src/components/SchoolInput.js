import React from "react";

const SchoolInput = (props) => {
    const { schoolState, handleSchoolChange, schoolId } = props;
    let schoolNameFor = `schoolName-${schoolId}`;
    let schoolDateFor = `schoolDate-${schoolId}`;
    let schoolMajorFor = `schoolMajor-${schoolId}`;
    return (
        <div>
            <div className="input-section">
                <label htmlFor={schoolNameFor}>School Name: </label>
                <input name={schoolNameFor}
                    type="text"
                    value={schoolState[schoolId].schoolName}
                    onChange={(e) => { handleSchoolChange(schoolId, e) }}></input>
            </div>
            <div className="input-section">
                <label htmlFor={schoolDateFor}>Dates Attended: </label>
                <input name={schoolDateFor}
                    type="text"
                    value={schoolState[schoolId].schoolDate}
                    onChange={(e) => { handleSchoolChange(schoolId, e) }}></input>
            </div>
            <div className="input-section">
                <label htmlFor={schoolMajorFor}>Major: </label>
                <input name={schoolMajorFor}
                    type="text"
                    value={schoolState[schoolId].schoolMajor}
                    onChange={(e) => { handleSchoolChange(schoolId, e) }}></input>
            </div>
        </div>
    );
}

export default SchoolInput;