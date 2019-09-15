import React, { Component } from 'react';
import Search from './Search';
import WatchList from './WatchList';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Movie Database UI</Link>
        <Search></Search>
        <Link to="/watchlist"> Watch List</Link>
      </nav>
    );
  }
}

export default Navbar;
