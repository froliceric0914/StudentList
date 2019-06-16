import React, { Component } from 'react';

class Student extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { avatar, name, company, skill, average } = this.props.student;
    return (
      <div className="message">
        <li>
          <img src={avatar} alt="no avatar" />
          <div>Name: {name}</div>
          <div>Company: {company}</div>
          <div>Skill:{skill}</div>
          <div>Average: {average}</div>
        </li>
      </div>
    );
  }
}

export default Student;
