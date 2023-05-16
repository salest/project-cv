import React from "react";

const SkillInput = (props) => {
    const { skillState, handleSkillChange, skillId } = props;
    let skillTitleFor = `skillTitle-${skillId}`;
    let skillListFor = `skillList-${skillId}`;
    return (
        <div>
            <div className="input-section">
                <label htmlFor={skillTitleFor}>Skill List:</label>
                <input name={skillTitleFor}
                    type="text"
                    value={skillState[skillId].skillTitle}
                    onChange={(e) => handleSkillChange(skillId, e)}></input>
            </div>
            <div className="input-section">
                <label htmlFor={skillListFor}>Skills: (Split by ;)</label>
                <input name={skillListFor}
                    type="text"
                    value={skillState[skillId].skillList}
                    onChange={(e) => handleSkillChange(skillId, e)}></input>
            </div>
        </div>
    )
}

export default SkillInput;