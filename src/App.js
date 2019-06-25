import React, { Component } from 'react';
import { StudentsList, Filter } from './component';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialStudents: [], //initialList
            students: [] //filteredList
        };
    }

    componentDidMount() {
        const proxyurl = 'https://cors-anywhere.herokuapp.com/';
        const url = 'https://www.hatchways.io/api/assessment/students';
        fetch(proxyurl + url)
            .then(res => res.json())
            .then(data => {
                data.students.map(student => {
                    student.isHidden = false;
                    student.tags = [];
                    this.setState({
                        initialStudents: [
                            ...this.state.initialStudents,
                            student
                        ]
                    });
                });
                //this.state.student is being passed to child component
                this.setState({
                    students: this.state.initialStudents
                });
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

    //the new will be added to both initial&&current state of students
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

    //filter the initialStudents and the update the students
    filterList = e => {
        let updatedList = this.state.initialStudents;
        let targetValue = e.target.value.toLowerCase();
        updatedList = updatedList.filter(student => {
            return (
                student.firstName.toLowerCase().search(targetValue) !== -1 ||
                student.lastName.toLowerCase().search(targetValue) !== -1
            );
        });
        this.setState({ students: updatedList });
    };

    // filter the newly added tag list
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
            }).length > 0
        );
    };

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
