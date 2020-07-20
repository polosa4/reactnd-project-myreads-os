
//import React from 'react'
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from './Book'

//this.state.showSearchPage ? (
class SearchBooks extends Component {
  state = {
    query: ''
  }
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render() {

    const { books } = this.props
    const { query } = this.state

    let showingBooks
    let showResults
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = books.filter((book) => match.test(book.authors) || match.test(book.title))
      showResults = true

    } else {
      showResults = false
      showingBooks = books
    }
    const onUpdateShelfB = (book, value) => {
      this.props.onUpdateShelf(book, value);
    }
    //showingBooks.sort(sortBy('title'))
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/' className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
                placeholder="Search by title or author" />
            </div>
          </div>
        </div>
        {showResults ? (
          <div className="list-books-content" style={{ marginTop: "60px" }}><Book books={showingBooks} onUpdateShelfB={onUpdateShelfB} /></div>
        ) : (<div></div>)}
      </div>
    )
  }

}
//)}

export default SearchBooks;