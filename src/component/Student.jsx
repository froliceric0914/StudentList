import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

class Student extends Component {
    constructor(props) {
        super(props);
    }

    _handleClick = e => {
        e.preventDefault();
        this.props.toggleHidden(this.props.index);
    };

    _handleChange = e => {
        if (e.key === 'Enter' && e.target.value !== '') {
            const newTag = e.target.value;
            this.props.newTag(this.props.index, newTag);
            e.target.value = '';
        }
    };

    render() {
        let {
            pic,
            email,
            firstName,
            lastName,
            company,
            skill,
            grades,
            isHidden,
            tags
        } = this.props.student;

        let icon = isHidden ? (
            <FontAwesomeIcon className="icon-grade" icon={faMinus} />
        ) : (
            <FontAwesomeIcon className="icon-grade" icon={faPlus} />
        );

        let averageGrade = grade => {
            let gradeInc = grade.map(grade => {
                return parseInt(grade);
            });
            return (gradeInc.reduce((a, b) => a + b) / gradeInc.length).toFixed(
                2
            );
        };

        //showTag
        let thisTag = tags.map((tag, index) => {
            return (
                <div className="newTag" key={index}>
                    {tag}
                </div>
            );
        });

        //showGrades
        let showGrades = grades.map((grade, index) => {
            return (
                <div className="grade" key={index}>
                    Test {index + 1}:
                    <div style={{ marginLeft: '1.5rem' }}>{grade}%</div>
                </div>
            );
        });

        return (
            <div className="student-card">
                <div className="student-avatar">
                    <img className="avatar" src={pic} alt="no avatar" />
                </div>

                <div className="student-details">
                    <div className="userName">
                        {firstName} {lastName}
                    </div>
                    <div className="list-detail">Email: {email}</div>
                    <div className="list-detail">Company: {company}</div>
                    <div className="list-detail">Skill: {skill}</div>
                    <div className="list-detail">
                        Average: {averageGrade(grades)}%
                    </div>
                    <div>
                        {isHidden && (
                            <div className="list-detail">
                                <div className="list-grades">{showGrades}</div>
                                {tags.length > 0 && (
                                    <div className="tag-list">{thisTag}</div>
                                )}
                                <input
                                    type="text"
                                    className="input-newTag"
                                    placeholder="Add a tag"
                                    onKeyPress={this._handleChange}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <button className="btn-grade" onClick={this._handleClick}>
                    <div>{icon}</div>
                </button>
            </div>
        );
    }
}

export default Student;
