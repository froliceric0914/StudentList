import React, { Component } from 'react';

class FiltetName extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="search">
        <form>
          <input
            type="text"
            className="filterName"
            placeholder="Search by name"
            onChange={this.props.filterList}
          />
        </form>
      </form>
    );
  }
}

//handle the input , and the call the function

export default FiltetName;
