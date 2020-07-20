import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book'

const WantRead = props => {
    let filteredC = props.books.filter(book => book.shelf === 'wantToRead');
    const onUpdateShelfB = (book, value) => {
        props.onUpdateShelf(book, value);
    }
    return (
        <div>
            <div className="bookshelf-books">
                <h2 className="bookshelf-title">Want To Read</h2>
                <Book books={filteredC} onUpdateShelfB={onUpdateShelfB} />
            </div>
        </div>

    )
}

export default WantRead 