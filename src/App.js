import './App.css';
import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import MultiSection from './components/MultiSection';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fullName: 'Tevin Sales',
      schoolName: 'University of Hawaii',
      schoolDate: '2014-2017',
      schoolMajor: 'Computer Science',
      skillsSubtitle: 'Programming Languages',
      skills: 'JavaScript;React;HTML',
      experience: [
        {
          jobName: 'Microsoft',
          jobDate: 'July 2018- Aug 2019',
          responsibilities: '• Redesigned and developed a complex Excel data processing tool into a customizable web application that allowed users to create reports and improve billing accuracy for customers.' +
            '• Life-cycled an outdated, multi-paged tool that used Microsoft Access Database to a web application' +
            'developed using a modern framework and SQL database to help document Easement record files state-wide.' +
            '• Developed automation scripts to maintain information on geographical data of electric-affiliated' +
            'technologies using Python and PowerShell.' +
            '• Created and maintained RESTful API’s and SQL database maintenance.' +
            '• Onboarded and Integrated Landis+Gyr’s Command Center Software System for all electric smart meters in Hawaii.'
        }
      ]
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    console.log(`${name}, ${value}`);
    const list = this.state.experience.map((element, i) => {
      let temp = Object.assign({}, element);
      if (index === i) {
        temp[name] = value;
      }
      return temp;
    });
    this.setState({experience: list});
  }

  render() {
    const {
      fullName,
      schoolName,
      schoolDate,
      schoolMajor,
      skillsSubtitle,
      skills,
      experience
    } = this.state;
    return (
      <div className='main-app'>
        <Sidebar
          fullName={fullName}
          schoolName={schoolName}
          schoolDate={schoolDate}
          schoolMajor={schoolMajor}
          skills={skills}
          skillsSubtitle={skillsSubtitle}
          experience={experience}
          onChange={this.handleChange}
          handleExperienceChange={this.handleExperienceChange}
        />
        <div className='main-content'>
          <Navbar fullName={fullName} />
          <Section title="Education" contentHeader={schoolName} contentList={[schoolDate, schoolMajor]} />
          <Section title="Skills" contentHeader={skillsSubtitle} contentList={skills.split(';')} />
          <MultiSection experience={experience}/>
        </div>
      </div>
    );
  }
}

export default App;
