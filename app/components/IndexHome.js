import React, { Component } from 'react';

import BooksList from '../containers/BooksList';
import BookDetail from '../containers/BookDetail';

class IndexHome extends Component {
  render() {
    return (
      <div>
        <h1>Hello from IndexHome</h1>
        <BooksList />
        <BookDetail />
      </div>
    );
  }
}

export default IndexHome;
