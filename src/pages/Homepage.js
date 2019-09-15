import React, { Component } from 'react';

import Movies from '../components/Movies';
import { MoviesContext } from '../Context';
import { Link } from 'react-router-dom';

export default class Homepage extends Component {
  static contextType = MoviesContext;
  render() {
    return (
      <div>
        <Movies
          title="Recently Released"
          movies={this.context.recentReleased.slice(0, 10)}
        ></Movies>
        <Link to="/recent" className="btn view">
          View All &rarr;
        </Link>
        <Movies
          title="Top Rated"
          movies={this.context.topRated.slice(0, 10)}
        ></Movies>
        <Link to="/toprated" className="btn view">
          View All &rarr;
        </Link>
      </div>
    );
  }
}
