import React, { Component } from 'react'
import Books from './Books'

class Read extends Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <Books books={this.props.books} />
          </ol>
        </div>
      </div>
    )
  }
}

export default Read
