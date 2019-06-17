import React, { Component } from 'react';
import Student from './Student.jsx';

class StudentsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const studentsList = this.props.students.map((student, index) => {
      return (
        <Student
          toggleHidden={this.props.toggleHidden}
          newTag={this.props.newTag}
          student={student}
          key={index}
          index={index}
        />
      );
    });

    //seperate the username and content
    return <div className="student-list">{studentsList}</div>;
  }
}

export default StudentsList;
