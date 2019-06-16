import React, { Component } from 'react';

class FiltetName extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <fieldset className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search"
              onChange={this.props.filterList}
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

//handle the input , and the call the function

export default FiltetName;
