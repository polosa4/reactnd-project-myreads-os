import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import { Link } from 'react-router-dom'
import './App.css'
import CurrentlyReading from './CurrentlyReading'
import WantRead from './WantRead'
import Read from './Read'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateShelf = (book, shelfD) => {
    //console.log("updated")
    this.setState((state) => ({
      books: state.books.map(c => c.id === book.id ? Object.assign({}, c, { shelf: shelfD }) : c)
    }))
    BooksAPI.update(book, shelfD)
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <SearchBooks books={this.state.books} onUpdateShelf={this.updateShelf} />
        )} />
        <Route exact path='/' render={() => (
          <div>
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <CurrentlyReading books={this.state.books} onUpdateShelf={this.updateShelf} />
            <WantRead books={this.state.books} onUpdateShelf={this.updateShelf} />
            <Read books={this.state.books} onUpdateShelf={this.updateShelf} />
          </div>
        )} />

        <div className="list-books">

          <Link to='/search'>
            <div className="open-search">
              <button>Add a book</button>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default BooksApp
