import React, { Component } from 'react';
import { StudentsList, Filter } from './component';

//could set a immutable const fetch
//use componenetDidMount Method

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialStudents: [], //original
            students: [], //filtered
            studentsWithTag: []
        };
    }

    componentDidMount() {
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
                        initialStudents: [
                            ...this.state.initialStudents,
                            student
                        ]
                    });
                });
                //pass the initial state to student
                //this.state.student is gonna be passed to child component
                this.setState({
                    students: this.state.initialStudents
                });
                console.log('initalStudents: ', this.state.initialStudents); //it is an array
                // console.log('students: ', this.state.students);
            });
    }

    // change the isHidden when the index matches
    toggleHidden = idx => {
        this.setState(states => ({
            students: states.students.map((student, index) =>
                index === idx
                    ? { ...student, isHidden: !student.isHidden }
                    : student
            )
        }));
    };

    //need to change the state of initial student
    newTag = (idx, newTag) => {
        this.setState(states => ({
            students: states.students.map((student, index) =>
                index === idx
                    ? {
                          ...student,
                          tags: [...student.tags, newTag]
                      }
                    : student
            )
        }));

        this.setState(states => ({
            initialStudents: states.initialStudents.map((student, index) =>
                index === idx
                    ? {
                          ...student,
                          tags: [...student.tags, newTag]
                      }
                    : student
            )
        }));
    };

    filterList = e => {
        let updatedList = this.state.initialStudents;
        let targetValue = e.target.value.toLowerCase();

        updatedList = updatedList.filter(student => {
            return (
                student.firstName.toLowerCase().search(targetValue) !== -1 ||
                student.lastName.toLowerCase().search(targetValue) !== -1
            );
        });
        //filter the initial and the update the student
        this.setState({ students: updatedList });
    };

    filterTag = e => {
        let targetValue = e.target.value;
        let updatedList = this.state.initialStudents.filter(student => {
            return this.findTag(student.tags, targetValue);
        });
        this.setState({ students: updatedList });
    };

    findTag = (tags, targetValue) => {
        return (
            tags.filter(tag => {
                return tag.toLowerCase().search(targetValue) !== -1;

                // return tag.toLowerCase().search(targetValue) !== -1;
            }).length > 0
        );
    };

    //setState and attach the profile to the top

    render() {
        return (
            <div className="container-students">
                <Filter
                    filterList={this.filterList}
                    filterTag={this.filterTag}
                />
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
