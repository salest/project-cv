import './App.css';
import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Sidebar from './components/FunctionalSidebar';
import SchoolSection from './components/SchoolSection';
import SkillSection from './components/SkillSection';
import ExpSection from './components/ExpSection';

const App = () => {
    const [info, setInfo] = useState({
        firstName: 'Tevin',
        lastName: 'Sales',
        email: 'tevin.sales@gmail.com'
    });

    let schoolIndex = 0;
    const [schoolState, setSchoolState] = useState([{
        schoolName: 'University of Hawaii',
        schoolDate: '2014-2017',
        schoolMajor: 'Computer Science',
        schoolId: schoolIndex++,
    }]);

    let skillIndex = 0;
    const [skillState, setSkillState] = useState([{
        skillTitle: 'Programming Languages',
        skillList: 'Javascript;React;HTML',
        skillId: skillIndex++,
    }]);

    let expIndex = 0;
    const [expState, setExpState] = useState([
        {
            expId: expIndex++,
            jobName: 'Development Analyst @ Hawaiian Electric',
            jobDate: 'Jan 2020- April 2023',
            responsibilities: 'Redesigned and developed a complex Excel data processing tool into a customizable web application that allowed users to create reports and improve billing accuracy for customers.;' +
                'Life-cycled an outdated, multi-paged tool that used Microsoft Access Database to a web application.;' +
                'developed using a modern framework and SQL database to help document Easement record files state-wide.;' +
                'Developed automation scripts to maintain information on geographical data of electric-affiliated.;' +
                'technologies using Python and PowerShell.;' +
                'Created and maintained RESTful API’s and SQL database maintenance.;' +
                'Onboarded and Integrated Landis+Gyr’s Command Center Software System for all electric smart meters in Hawaii.;'
        }
    ]);

    const handleInfoChange = (e) => {
        const { name, value } = e.target;
        setInfo({
            ...info,
            [name]: value
        })
    }

    const handleSchoolChange = (id, e) => {
        const { name, value } = e.target;
        const fieldName = name.split('-')[0];
        setSchoolState(schoolState.map(s => {
            if (s.schoolId === id) {
                return {
                    ...s,
                    [fieldName]: value
                }
            } else {
                return s;
            }
        }));
    }

    const handleSkillChange = (id, e) => {
        const { name, value } = e.target;
        const fieldName = name.split('-')[0];
        setSkillState(skillState.map(s => {
            if (s.skillId === id) {
                return {
                    ...s,
                    [fieldName]: value
                }
            } else {
                return s;
            }
        }));
    }

    const handleExpChange = (id, e) => {
        const { name, value } = e.target;
        const fieldName = name.split('-')[0];
        setExpState(expState.map(s => {
            if (s.expId === id) {
                return {
                    ...s,
                    [fieldName]: value
                }
            } else {
                return s;
            }
        }));
    }


    return (
        <div>
            <Navbar info={info} />
            <Sidebar
                info={info}
                handleInfoChange={handleInfoChange}
                handleSchoolChange={handleSchoolChange}
                handleSkillChange={handleSkillChange}
                handleExpChange={handleExpChange}
                schoolState={schoolState}
                expState={expState}
                skillState={skillState} />
            <div className='main-content'>
                <SchoolSection schoolState={schoolState} />
                <SkillSection skillState={skillState} />
                <ExpSection expState={expState} />
            </div>
        </div>
    );
}

export default App;

