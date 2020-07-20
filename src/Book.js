import React from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'

const Book = props => {
    //const { book } = this.props
    const onUpdateShelfBookC = (b, v) => {
        //if (v != "none") {
            props.onUpdateShelfB(b, v);
        //}
    }
    return (
        <div className="bookshelf">
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map(book => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }} />
                                    <div className="book-shelf-changer">
                                        <select value={book.shelf} onChange={(event) => { onUpdateShelfBookC(book, event.target.value) }}>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default Book