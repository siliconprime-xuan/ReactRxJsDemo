import React from 'react';
import {books} from "../../data/books";

const Books = ():React.ReactElement => {

    const booksList =  books.map(
        book => <li key={book.id}>{book.title} {book.isbn} {book.authorId}</li>
    );
    return <ul>{booksList}</ul>;
}

export default Books;