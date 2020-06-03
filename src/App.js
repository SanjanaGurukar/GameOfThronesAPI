import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [books, setBooks] = useState(null);
  const [snow, setSnow] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'https://www.anapioficeandfire.com/api/books?pageSize=30'
    );
    setBooks(response.data);
  };

  const fetchJohnSnow = async () => {
    const response = await axios.get(
      'https://www.anapioficeandfire.com/api/characters/583'
    );
    let a = [response.data]
    setSnow(a);
  };

  return (
    <div className="App">
      <h1>Game of Thrones</h1>
      <h2>Click to see the set of books</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Books
        </button>
        <br />
      </div>
      <h2>Click to know details about John Snow</h2>
      <div>
        <button className="fetch-button" onClick={fetchJohnSnow}>
          John Snow
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="books">
        {books &&
          books.map((book, index) => {
            const cleanedDate = new Date(book.released).toDateString();
            const authors = book.authors.join(', ');

            return (
              <div className="book" key={index}>
                <h3>Book {index + 1}</h3>
                <h2>{book.name}</h2>

                <div className="details">
                  <p><b>Author</b>: {authors}</p>
                  <p><b>Number of Pages</b>: {book.numberOfPages} pages</p>
                  <p><b>Country</b>: {book.country}</p>
                  <p><b>Released Date</b>: {cleanedDate}</p>
                </div>
              </div>
            );
          })}
      </div>

      <div className="books">
        {snow &&
          snow.map((e) => {
            const alias = e.aliases.join(', ');
            const title = e.titles.join(', ');
            const playedBy = e.playedBy.join(', ')
            return (
              <div className="book" >
                <h3>{snow[0].name}</h3>

                <div className="details">
                  <p><b>Title</b>: {title}</p>
                  <p><b>Culture</b>: {snow[0].culture}</p>
                  <p><b>DOB</b>: {snow[0].born}</p>
                  <p><b>Alias</b>: {alias}</p>
                  <p><b>Played By</b>: {playedBy}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
 export default App;
