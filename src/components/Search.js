import React, { Component } from 'react';
import { MoviesContext } from '../Context';

export default class Search extends Component {
  static contextType = MoviesContext;
  state = {
    search: '',
    display: 'none'
  };
  handleSearch = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };
  render() {
    return (
      <>
        <div className="search">
          <input
            type="text"
            placeholder="Search Movie, Actor or Whatever"
            name="search"
            onChange={this.handleSearch}
          />
          <button>Search</button>
          <div className="result" style={{ display: this.state.display }}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque repudiandae veritatis quo magnam qui ut nesciunt
              tempora illo enim! Ad vitae asperiores dolorem suscipit nostrum
              debitis laborum eos ea voluptates.
            </p>
          </div>
        </div>
      </>
    );
  }
}
