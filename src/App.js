import React, { Component } from 'react';
import StudentsList from './component/StudentsList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getIntialState: [],
      students: []
    };
  }

  filterList = event => {
    let updatedList = this.state.students;
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
  //need to clear the state after use the filter

  //setState and attach the profile to the top
  getIntialState() {
    fetch('https://www.hatchways.io/api/assessment/students')
      .then(res => res.json())
      .then(data => {
        console.log('data: ', data);
        data.students.map(student => {
          // console.log('student: ', student);
          this.setState({ students: [...this.state.students, student] });
        });
        // console.log('this state: ', this.state.students); //it is an array
      });
  }
  componentWillMount() {
    fetch('https://www.hatchways.io/api/assessment/students')
      .then(res => res.json())
      .then(data => {
        console.log('data: ', data);
        data.students.map(student => {
          // console.log('student: ', student);
          this.setState({ students: [...this.state.students, student] });
        });
        // console.log('this state: ', this.state.students); //it is an array
      });
  }
  render() {
    return (
      <div className="container-students">
        <form>
          <fieldset className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search"
              onChange={this.filterList}
            />
          </fieldset>
        </form>
        <StudentsList students={this.state.students} />
      </div>
    );
  }
}

export default App;
