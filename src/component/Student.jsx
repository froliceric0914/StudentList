import React, { Component } from 'react';

class Student extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      pic,
      firstName,
      lastName,
      company,
      skill,
      grades
    } = this.props.student;
    //set the average to the same float
    let gradeInc = grades.map(grade => {
      return parseInt(grade);
    });
    console.log('grades', grades);
    const average = gradeInc.reduce((a, b) => a + b) / gradeInc.length;
    return (
      <div className="message">
        <li>
          <img src={pic} alt="no avatar" />
          <div>
            {firstName} {lastName}
          </div>
          <div>Company: {company}</div>
          <div>Skill:{skill}</div>
          <div>Average: {average} %</div>
        </li>
      </div>
    );
  }
}

export default Student;
