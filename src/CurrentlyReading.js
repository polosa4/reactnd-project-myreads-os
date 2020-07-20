import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book'

const CurrentlyReading = props => {
    //console.log(props.books)
    let filteredC = props.books.filter(book => book.shelf === 'currentlyReading');
    //console.log(filteredC)
    const onUpdateShelfB = (book, value) => {
        props.onUpdateShelf(book,value);
    }
    return (
        <div>
        
                <div className="bookshelf-books">
                <h2 className="bookshelf-title">Currently Reading</h2>
          <Book books={filteredC} onUpdateShelfB={onUpdateShelfB}/>
          </div> 
          </div>
             
    )
}

export default CurrentlyReading 