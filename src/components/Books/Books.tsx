import React from 'react';
import {books$, initState} from "../../common/state/state";
import {useObservable} from "../../common/hooks/useObservable";
import {Response, BookType} from "../../common/types";
import Preloader from "../Preloader/Preloader";

const Books = ():React.ReactElement => {
    const {data, isLoading}= useObservable<Response<BookType[]>>(books$, initState);

    const booksList = data.map(book =>
        <li key={book.id}>{book.title} {book.isbn} {book.authorId}</li>
    );
    return isLoading ? <Preloader /> : <ul>{booksList}</ul>;
}

export default Books;