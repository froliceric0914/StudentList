import React, { Component } from 'react';
import StudentsList from './component/StudentsList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          city: '',
          avatar:
            'https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg',
          name: 'Ingaberg',
          company: 'Yadel',
          skill: 'Oracle',
          average: '91'
        }
      ]
    };
  }

  //setState and attach the profile to the top
  componentWillMount() {
    fetch('https://www.hatchways.io/api/assessment/students')
      .then(res => res.json())
      .then(data => {
        console.log('data: ', data);
        data.students.map(student => {
          console.log('student: ', student);
          this.setState({ students: [...this.state.students, student] });
        });
        console.log('this state: ', this.state.students); //it is an array
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
