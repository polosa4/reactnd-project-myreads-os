import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book'

const Read = props => {
    let filteredC = props.books.filter(book => book.shelf === 'read');
    const onUpdateShelfB = (book, value) => {
        props.onUpdateShelf(book, value);
    }
    return (
        <div>
            <div className="bookshelf-books">
                <h2 className="bookshelf-title">Read</h2>
                <Book books={filteredC} onUpdateShelfB={onUpdateShelfB} />
            </div>
        </div>

    )
}

export default Read 