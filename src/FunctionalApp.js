import './App.css';
import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Sidebar from './components/FunctionalSidebar';

const App = () => {
    const [info, setInfo] = useState({
        firstName: 'Tevin',
        lastName: 'Sales',
        email: 'tevin.sales@gmail.com'
    });

    const [schoolState, setSchoolState] = useState([{
        schoolName: 'University of Hawaii',
        schoolDate: '2014-2017',
        schoolMajor: 'Computer Science',
    }]);

    const [skillState, setSkillState] = useState([{
        skillTitle: 'Programming Languages',
        skilllist: 'Javascript;React;HTML'
    }]);

    const [expState, setExpState] = useState([
        {
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


    return (
        <div>
            <Navbar info={info}/>
            <Sidebar 
            info={info} 
            handleInfoChange={handleInfoChange}
            schoolState={schoolState}/>
        </div>
    );
}

export default App;

