import React, { Component } from 'react';

class Student extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      pic,
      email,
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

    const average = gradeInc.reduce((a, b) => a + b) / gradeInc.length;
    return (
      <div className="student-card">
        <div className="student-avatar">
          <img className="avatar" src={pic} alt="no avatar" />
        </div>
        <div className="student-details">
          <div className="userName">
            <div style={{ marginRight: '1rem' }}>{firstName}</div>{' '}
            <div> {lastName}</div>
          </div>

          <div className="detail">Email: {email}</div>
          <div className="detail">Company: {company}</div>
          <div className="detail">Skill:{skill}</div>
          <div className="detail">Average: {average}%</div>
        </div>
      </div>
    );
  }
}

export default Student;
