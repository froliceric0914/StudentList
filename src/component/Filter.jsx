import React from 'react';

export default ({ filterList, filterTag, ...props }) => {
    return (
        <div className="search">
            <form>
                <input
                    type="text"
                    className="filter"
                    placeholder="Search by name"
                    onChange={filterList}
                />
                <input
                    type="text"
                    className="filter"
                    placeholder="Search by tags"
                    onChange={filterTag}
                />
            </form>
        </div>
    );
};

//handle the input , and the call the function
