import React, { Component } from 'react';
import { StudentsList, FilterName } from './component';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialStudents: [],
      students: [],
      isHidden: false
    };
    this.toggleHidden.bind(this);
  }

  toggleHidden = e => {
    e.preventDefault();
    this.setState({ isHidden: !this.state.isHidden });
  };

  filterList = event => {
    let updatedList = this.state.initialStudents;
    updatedList = updatedList.filter(student => {
      return (
        student.firstName
          .toLowerCase()
          .search(event.target.value.toLowerCase()) !== -1 ||
        student.lastName
          .toLowerCase()
          .search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ students: updatedList });
  };

  //setState and attach the profile to the top

  componentWillMount() {
    let getIntialState = () => {
      fetch('https://www.hatchways.io/api/assessment/students')
        .then(res => res.json())
        .then(data => {
          data.students.map(student => {
            // console.log('student: ', student);
            this.setState({
              initialStudents: [...this.state.initialStudents, student]
            });
          });
          this.setState({
            students: this.state.initialStudents
          });
          // console.log('initalStudents: ', this.state.initialStudents); //it is an array
          // console.log('students: ', this.state.students);
        });
    };
    getIntialState();
  }

  render() {
    return (
      <div className="container-students">
        <FilterName filterList={this.filterList} />
        <StudentsList
          students={this.state.students}
          toggleHidden={this.toggleHidden}
          isHidden={this.state.isHidden}
        />
      </div>
    );
  }
}

export default App;
