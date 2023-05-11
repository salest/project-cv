import React, { Component } from "react";
class ExperienceSidebar extends Component {
    render() {
        const { titles, experience, handleExperienceChange } = this.props;


        const list = experience.map((element, index) => {
            const entries = Object.entries(element);
            let titleIndex = 0;
            const jobInfo = entries.map((info) => {
                return (
                    <div className="flex-section" id={`jobFormDiv-${index}-${info[0]}`} key={`jobFormDiv-${index}-${info[0]}`}>
                        <label htmlFor={`${info[0]}-${index}`}>{titles[titleIndex++]}</label>
                        {titleIndex !== 3 && <input name={`${info[0]}-${index}`} type="text" value={info[1]} onChange={(e) => handleExperienceChange(index, e)}></input>}
                        {titleIndex === 3 && <textarea className="big-input" name={`${info[0]}-${index}`} value={info[1]} rows="5" cols="20" onChange={(e) => handleExperienceChange(index, e)}></textarea>}
                    </div>
                );
            });
            return jobInfo;
        })
        return (
            <div className="flex-section">
                {list}
                <br></br>
                <hr className="section-line"></hr>
            </div>
        );
    }
}

export default ExperienceSidebar;