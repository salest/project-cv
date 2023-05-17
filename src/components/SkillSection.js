import React from "react";

const SkillSection = (props) => {
    const {skillState} = props;
    const list = skillState.map((element) => {
        return (
            <div key={`skill-${element.skillId}`} className="section">
                <h1 className="section-title">Skills</h1>
                <hr className="section-line"></hr>
                <div className="section-content">
                    <h2 className="contenet-header">{element.skillTitle}</h2>
                    <ul className="content-list">
                        {element.skillList.split(';').map((skill, index) => {
                            return <li key={`${element.skillTitle}-${index}`}>{skill}</li>
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

export default SkillSection;