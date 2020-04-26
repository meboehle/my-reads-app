import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MoveBook from './MoveBook';
import * as BooksAPI from './BooksAPI';

class ViewBook extends Component {
  onMoveBook = (shelf, book) => {
    this.props.refreshBooks();
    BooksAPI.update(book, shelf);
  }

  render() {
    const {book} = this.props;
    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover'>
            {book.imageLinks &&
              <img
                src={book.imageLinks.thumbnail || book.imageLinks.smallThumbnail}
                alt='book cover'
                width='128'
                height='199'
              />}
          </div>
          <MoveBook book={book} onMoveBook={this.onMoveBook}/>
        </div>
        <div className='book-title'>{book.title}</div>
        {book.authors && book.authors.map(author => (
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
  refreshBooks: PropTypes.func.isRequired
}

export default ViewBook;