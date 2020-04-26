import React from 'react';
import PropTypes from 'prop-types';
import ViewBook from './ViewBook';

 function Bookshelf ({books, shelf, refreshBooks}) {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{shelf}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books.map(book => (
            <li key={book.id}>
              <ViewBook book={book} refreshBooks={refreshBooks}/>
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
  refreshBooks: PropTypes.func.isRequired
}

export default Bookshelf;