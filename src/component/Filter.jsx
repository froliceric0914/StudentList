import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search">
        <form>
          <input
            type="text"
            className="filter"
            placeholder="Search by name"
            onChange={this.props.filterList}
          />
          <input
            type="text"
            className="filter"
            placeholder="Search by tag"
            onChange={this.props.filterTag}
          />
        </form>
      </div>
    );
  }
}

//handle the input , and the call the function

export default Filter;
