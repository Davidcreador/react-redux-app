import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return (
        <div>
          <h3>Please select a book to start.</h3>
        </div>
      );
    }

    return (
      <div>
        <h3>Details for Book:</h3>
        <h4>Title: {this.props.book.title}</h4>
        <p>Pages: {this.props.book.pages}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}

export default connect(mapStateToProps)(BookDetail);
