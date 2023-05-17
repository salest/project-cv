import React from "react";

const SchoolSection = (props) => {
    const {schoolState} = props;
    const list = schoolState.map((element) => {
        return (
            <div key={`school-${element.schoolId}`} className="section">
                <h1 className="section-title">Education</h1>
                <hr className="section-line"></hr>
                <div className="section-content">
                    <h2 className="contenet-header">{element.schoolName}</h2>
                    <h3>{element.schoolDate}</h3>
                    <h3>{element.schoolMajor}</h3>
                </div>
            </div>
        )
    });
    return (
        <div>
            {list}
        </div>
    );
}

export default SchoolSection;