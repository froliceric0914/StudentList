import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

class Student extends Component {
  constructor(props) {
    super(props);
  }

  _handleClick = e => {
    e.preventDefault();
    //call the function in the app, and pass the variable in the funciton
    this.props.toggleHidden(this.props.index);
    // this.setState({ isHidden: !isHidden }); // pass the parameter to the funciton
  };
  render() {
    let {
      pic,
      email,
      firstName,
      lastName,
      company,
      skill,
      grades,
      isHidden
    } = this.props.student;
    //set the average to the same float
    let gradeInc = grades.map(grade => {
      return parseInt(grade);
    });

    console.log('isHidden from student: ', isHidden);

    const icon = isHidden ? (
      <FontAwesomeIcon className="icon-grade" icon={faMinus} />
    ) : (
      <FontAwesomeIcon className="icon-grade" icon={faPlus} />
    );

    const average = gradeInc.reduce((a, b) => a + b) / gradeInc.length;

    let showGrades = grades.map((grade, index) => {
      // console.log('grades: ', grade);
      return (
        <div>
          <div
            key={index}
            style={{ display: 'flex', justifyContent: 'flex-start' }}
          >
            <div style={{ marginRight: '1rem' }}>Text {index}</div>
            <div> {grade}%</div>
          </div>
        </div>
      );
    });

    // showGrades();
    //change the icon of toggle down a
    return (
      <div className="student-card">
        <div className="student-avatar">
          <img className="avatar" src={pic} alt="no avatar" />
        </div>

        <div className="student-details">
          <div className="userName">
            <div style={{ marginRight: '1rem' }}>{firstName}</div>
            <div> {lastName}</div>
          </div>
          <div className="detail">Email: {email}</div>
          <div className="detail">Company: {company}</div>
          <div className="detail">Skill:{skill}</div>
          <div className="detail">Average: {average}%</div>
          <div style={{ marginTop: '1rem' }}>
            {isHidden && <div className="detail">{showGrades}</div>}
          </div>
        </div>
        <button className="btn-grade" onClick={this._handleClick}>
          <div>{icon}</div>
        </button>
      </div>
    );
  }
}

export default Student;
