import React, { Component } from 'react';
import { StudentsList, FilterName } from './component';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialStudents: [],
      students: []
    };
  }

  // change the isHidden when the index matches
  toggleHidden = idx => {
    this.setState(states => ({
      students: states.students.map((student, index) =>
        index === idx ? { ...student, isHidden: !student.isHidden } : student
      )
    }));
  };

  newTag = (idx, newTag) => {
    this.setState(states => ({
      students: states.students.map((student, index) =>
        index === idx
          ? { ...student, tags: [...student.tags, newTag] }
          : student
      )
    }));
    console.log('students.tag', this.state.students[idx]);
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
      const proxyurl = 'https://cors-anywhere.herokuapp.com/';
      const url = 'https://www.hatchways.io/api/assessment/students';
      fetch(proxyurl + url)
        .then(res => res.json())
        .then(data => {
          data.students.map(student => {
            // console.log('student: ', student);
            student.isHidden = false;
            student.tags = [];
            this.setState({
              initialStudents: [...this.state.initialStudents, student]
            });
          });
          this.setState({
            students: this.state.initialStudents
          });
          // console.log('initalStudents: ', this.state.initialStudents); //it is an array
          console.log('students: ', this.state.students);
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
          newTag={this.newTag}
        />
      </div>
    );
  }
}

export default App;
