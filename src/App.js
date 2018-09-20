import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import BookSearch from './BookSearch'
import './App.css'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <BookList
          books={ books }
          changeShelf={this.changeShelf}
        />
        <BookSearch />
      </div>
    )
  }
}

export default BooksApp
