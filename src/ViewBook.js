import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MoveBook from './MoveBook';
import * as BooksAPI from './BooksAPI';

class ViewBook extends Component {

  onMoveBook = (shelf, book) => {
    BooksAPI.update(book, shelf);
  }

  render() {
    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover'>
            <img src={this.props.book.imageLinks.thumbnail} alt='book cover' width='128' height='199'/>
          </div>
          <MoveBook book={this.props.book} onMoveBook={this.onMoveBook}/>
        </div>
        <div className='book-title'>{this.props.book.title}</div>
        {this.props.book.authors && this.props.book.authors.map(author => (
          <div key={author} className='book-authors'>
            {author}
          </div>
        ))}
      </div>
    )
  }
}

ViewBook.propTypes = {
  book: PropTypes.object.isRequired,
}

export default ViewBook;