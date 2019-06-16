import React, { Component } from 'react';

class Student extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('this.props.student!!! ', this.props.student);
    let { Avatar, Name, Company, Skill, Average } = this.props.student;
    //seperate the username and content
    return (
      <div className="message">
        <li>Name: {Name}</li>
        <li>Company: {Company}</li>
        <li>Skill:{Skill}</li>
        <li>Average: {Average}</li>
      </div>
    );
  }
}

export default Student;
