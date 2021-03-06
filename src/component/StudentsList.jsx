import React from 'react';
import Student from './Student.jsx';

export default ({ students, toggleHidden, newTag, ...props }) => {
    const studentsList = students.map((student, index) => {
        return (
            <Student
                toggleHidden={toggleHidden}
                newTag={newTag}
                student={student}
                key={index}
                index={index}
            />
        );
    });
    //need to add a contion when there is no sudent after filter
    return (
        <div className="student-list">
            {studentsList.length > 0 ? (
                studentsList
            ) : (
                <div className="no-result">
                    No result found, please search again
                </div>
            )}
        </div>
    );
};
