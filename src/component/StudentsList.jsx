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

    //need to add a contion when there is no sudent after filter
    return <div className="student-list">{studentsList}</div>;
  }
}

export default StudentsList;
