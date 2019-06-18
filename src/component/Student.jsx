import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

class Student extends Component {
  constructor(props) {
    super(props);
  }

  _handleClick = e => {
    e.preventDefault();
    this.props.toggleHidden(this.props.index);
  };

  // _handleSubmit = e => {
  //   e.preventDefault();
  //   alert('A name was submitted: ' + this.props.student.newTag);
  // };

  _handleChange = e => {
    if (e.key === 'Enter' && e.target.value !== '') {
      const newTag = e.target.value;
      // console.log('input', e.target.value);
      this.props.newTag(this.props.index, newTag);
      e.target.value = '';
    }
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
      isHidden,
      newTag
    } = this.props.student;

    const icon = isHidden ? (
      <FontAwesomeIcon className="icon-grade" icon={faMinus} />
    ) : (
      <FontAwesomeIcon className="icon-grade" icon={faPlus} />
    );

    let gradeInc = grades.map(grade => {
      return parseInt(grade);
    });
    const average = gradeInc.reduce((a, b) => a + b) / gradeInc.length;

    let showGrades = grades.map((grade, index) => {
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
            {isHidden && (
              <div className="detail">
                {showGrades}
                {newTag && <div className="newTag">{newTag}</div>}
                <input
                  type="text"
                  className="input-newTag"
                  onKeyPress={this._handleChange}
                />
              </div>
            )}
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
