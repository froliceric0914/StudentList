import React, { Component } from 'react';
import StudentsList from './component/StudentsList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          Avatar:
            'https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg',
          Name: 'Ingaberg',
          Company: 'Yadel',
          Skill: 'Oracle',
          Average: '91'
        }
      ]
    };
  }

  componentWillMount() {
    fetch('https://www.hatchways.io/api/assessment/students')
      .then(res => res.json())
      .then(data => {
        console.log('this state: ', this.state.students); //it is an array
        console.log('data: ', data);
        data.students.map(student => {
          // console.log('student: ', student);
        });
      });
  }
  render() {
    return (
      <div>
        <StudentsList students={this.state.students} />
      </div>
    );
  }
}

export default App;
