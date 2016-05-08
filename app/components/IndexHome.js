import React, { Component } from 'react';

import BooksList from '../containers/BooksList';

class IndexHome extends Component {
  render() {
    return (
      <div>
        <h1>Hello from IndexHome</h1>
        <BooksList />
      </div>
    );
  }
}

export default IndexHome;
