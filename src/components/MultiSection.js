import React, { Component } from "react";

class MultiSection extends Component {

    render() {
        const { experience } = this.props;
        const list = experience.map((element, index) => {
            const jobInfo = (
                <div id={`jobDiv-${index}`} key={`jobDiv-${index}`}>
                    <h2 className="content-header" key={`jobName-${index}`}>{element["jobName"]}</h2>
                    <h3 className="content-subheader" key={`jobDate-${index}`}>{element["jobDate"]}</h3>
                    <h4>Responsibilities</h4>
                    <ul className="content-list">
                        {element["responsibilities"].split('•').map((item, i) => <li key={`jobRes-${index}-${i}`} className="list-item">{item}</li>)}
                    </ul>
                </div>
            ); 
            return jobInfo;
        })

        return (
            <div className="section">
                <h1 className="section-header">Experience</h1>
                <hr className="section-line"></hr>
                {list}
            </div>
        );
    }
}

export default MultiSection;