import React, { Component } from "react";
import ExperienceSidebar from "./ExperienceSidebar";
class Sidebar extends Component {

    render() {
        const {
            fullName,
            schoolName,
            schoolDate,
            schoolMajor,
            skillsSubtitle,
            skills,
            experience,
            onChange,
            handleExperienceChange
        } = this.props;
        return (
            <div className="sidebar">
                <label htmlFor="fullName">Name: </label>
                <input name="fullName"
                    type="text"
                    value={fullName}
                    onChange={onChange}></input>
                <hr className="section-line"></hr>
                <label htmlFor="schoolName">School Name: </label>
                <input name="schoolName"
                    type="text"
                    value={schoolName}
                    onChange={onChange}></input>
                <label htmlFor="schoolDate">Year Attended: </label>
                <input name="schoolDate"
                    type="text"
                    value={schoolDate}
                    onChange={onChange}></input>
                <label htmlFor="schoolMajor">Major: </label>
                <input name="schoolMajor"
                    type="text"
                    value={schoolMajor}
                    onChange={onChange}></input>
                <hr className="section-line"></hr>
                <label htmlFor="skillsSubtitle">Skill Subtitle: </label>
                <input name="skillsSubtitle"
                    type="text"
                    value={skillsSubtitle}
                    onChange={onChange}></input>
                <label htmlFor="skills">Skills: (Split by ;)</label>
                <input name="skills"
                    type="text"
                    value={skills}
                    onChange={onChange}></input>
                <hr className="section-line"></hr>
                <ExperienceSidebar title="Experience" experience={experience} handleExperienceChange={handleExperienceChange} titles={["Role @ Company:", "Date:", "Work Feats: (Split by ;)"]}/>
                
            </div>
        );
    }
}

export default Sidebar;