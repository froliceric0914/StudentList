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
        // console.log('students.tag', this.state.initialStudents[idx]);
        // this.setState({ initialStudents: this.state.students });

        // let updatedList = this.state.initialStudents[idx];
        // console.log('init.tag', updatedList);
        // this.setState({ students: updatedList });

        // this.setState({ students: this.state.initialStudents });
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

    //filter the studentList
    filterTag = e => {
        let targetValue = e.target.value;
        let updatedList = this.state.students
            .map(student => ({
                tags: [...student.tags]
            }))
            .filter(student => {
                console.log('student: ', student);
                return this.findTag(student.tags, targetValue);
            });
        this.setState({ students: updatedList });
    };

    findTag = (tags, targetTag) => {
        return (
            tags.filter(tag => {
                return tag.toLowerCase() === targetTag.toLowerCase();
            }).length > 0
        );
    };
    // filterTag = e => {
    //     let updatedList = this.state.initialStudents;
    //     updatedList = updatedList.filter(student => {
    //         return this.findTag(student.tags, e.target.value);
    //     });
    //     this.setState({ students: updatedList });
    // };

    //setState and attach the profile to the top
    componentWillMount() {
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
