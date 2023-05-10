import React, { Component } from "react";
class ExperienceSidebar extends Component {
    render() {
        const { title, experience, handleExperienceChange } = this.props;


        const list = experience.map((element, index) => {
            const entries = Object.entries(element);
            const jobInfo = entries.map((info) => {
                return (
                    <div id={`jobDiv-${index}-${info[0]}`} key={`jobDiv-${index}-${info[0]}`}>
                        <label htmlFor={info[0]}>{info[0]}</label>
                        <input name={info[0]} type="text" value={info[1]} onChange={(e) => handleExperienceChange(index, e)}></input>
                    </div>
                );
            });
            return jobInfo;
        })
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default ExperienceSidebar;