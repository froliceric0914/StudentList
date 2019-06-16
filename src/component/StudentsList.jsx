import React, { Component } from 'react';
import Student from './Student.jsx';

class StudentsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const studentsList = this.props.students.map((student, index) => {
      // console.log('this.props.students: ', index);

      return <Student student={student} key={index} />;
    });

    //seperate the username and content
    return (
      <div className="message">
        <ul>{studentsList}</ul>
      </div>
    );
  }
}

export default StudentsList;
