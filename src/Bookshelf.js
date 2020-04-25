import React from 'react';
import PropTypes from 'prop-types';
import ViewBook from './ViewBook';

 function Bookshelf (props) {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{props.shelf}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {props.books.map(book => (
            <li key={book.id}>
              <ViewBook book={book}/>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
}

export default Bookshelf;