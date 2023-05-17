import React from "react";

const ExpSection = (props) => {
    const {expState} = props;
    const list = expState.map((element) => {
        return (
            <div key={`skill-${element.expId}`} className="section">
                <h1 className="section-title">Experience</h1>
                <hr className="section-line"></hr>
                <div className="section-content">
                    <h2 className="contenet-header">{element.jobName}</h2>
                    <h3>{element.jobDate}</h3>
                    <ul className="content-list">
                        {element.responsibilities.split(';').map((resp, index) => {
                            return <li key={`${element.jobName}-${index}`}>{resp}</li>
                        })}
                    </ul>
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

export default ExpSection;