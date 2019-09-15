import React, { Component } from 'react';
import { MoviesContext } from '../Context';
import Movies from '../components/Movies';
import { Link } from 'react-router-dom';

export default class RecentMovies extends Component {
  static contextType = MoviesContext;
  state = {
    load: 15,
    status: true
  };
  handleLoad = e => {
    e.preventDefault();
    const { recentReleased } = this.context;
    const { load } = this.state;
    if (!(recentReleased.length - load < 0)) {
      this.setState({ load: load + 5 });
    } else {
      this.setState({ status: false });
    }
  };
  render() {
    return (
      <div>
        <Link to="/" className="btn back">
          &larr; Back
        </Link>
        <Movies
          title="Recently Released Movies"
          movies={this.context.recentReleased.slice(0, this.state.load)}
        ></Movies>
        {!this.state.status ? (
          <Link to="/" className="btn view" onClick={this.handleLoad}>
            &larr; Nothing to load, Go Back
          </Link>
        ) : (
          <a href="/" className="btn view" onClick={this.handleLoad}>
            Load More &rarr;
          </a>
        )}
      </div>
    );
  }
}
