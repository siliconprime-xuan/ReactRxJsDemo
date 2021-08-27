import React, {useEffect} from 'react';
import './App.css';
import Authors from "./components/Authors/Authors";
import Books from "./components/Books/Books";
import FilteredBook from "./components/FilteredBook/FilteredBooks";
import {fetchAuthors, fetchBook} from "./api/api";

function App() {

    fetchBook();
    fetchAuthors();


  return (
      <div className="App-container">
          <div className="App-row">
              <div>Authors</div>
              <Authors />
          </div>
          <div className="App-row">
              <div>Books</div>
              <Books />
          </div>
          <div className="App-row">
              <div>Books for the selected author</div>
              <FilteredBook />
          </div>
      </div>
  );
}

export default App;
