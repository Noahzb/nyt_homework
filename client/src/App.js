import React, { Component } from "react";
import Input from "./components/Input";
import API from "./utils/api";
import { BookList, BookListItem } from "./components/BookList";
import Button from "./components/Button/index"
class App extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form>
                <Input
                  name="bookSearch"
                  value={this.state.bookSearch}
                  onChange={this.handleInputChange}
                  placeholder="Search For a book"
                />
           
          
                <Button
                  onClick={this.handleFormSubmit}
                  type="success"
                  className="input-lg"
                >
                  Search
                      </Button>
           
        </form>

        {!this.state.books.length ? (
          <h1 className="text-center">No books to Display</h1>
        ) : (
            <BookList>
              {this.state.books.map(book => {
                return (
                  <BookListItem
                    key={book.title}
                    title={book.title}
                    href={book.href}
                    author={book.author}
                    thumbnail={book.thumbnail}
                  />
                );
              })}
            </BookList>
          )}
</div>
        );
      }
    }
    
export default App;