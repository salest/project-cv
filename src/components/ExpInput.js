import React from "react";

const ExpState = (props) => {
    const { expState, handleExpChange, expId } = props;
    let jobNameFor = `jobName-${expId}`;
    let jobDateFor = `jobDate-${expId}`;
    let respFor = `responsibilities-${expId}`;
    return (
        <div>
            <div className="input-section">
                <label htmlFor={jobNameFor}>Job Title @ Company:</label>
                <input name={jobNameFor}
                    type="text"
                    value={expState[expId].jobName}
                    onChange={(e) => handleExpChange(expId, e)}></input>
            </div>
            <div className="input-section">
                <label htmlFor={jobDateFor}>Dates Worked:</label>
                <input name={jobDateFor}
                    type="text"
                    value={expState[expId].jobDate}
                    onChange={(e) => handleExpChange(expId, e)}></input>
            </div>
            <div className="input-section">
                <label htmlFor={respFor}>Responsibilities: (Split by ;)</label>
                <input name={respFor}
                    type="text"
                    value={expState[expId].responsibilities}
                    onChange={(e) => handleExpChange(expId, e)}></input>
            </div>
        </div>

    )
}

export default ExpState;