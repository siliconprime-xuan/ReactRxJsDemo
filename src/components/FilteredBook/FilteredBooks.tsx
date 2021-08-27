import React from 'react';
import {books$, initState, selectedAuthor$} from "../../common/state/state";
import {useObservable} from "../../common/hooks/useObservable";
import {AuthorType, BookType, Response} from "../../common/types";

const FilteredBook = ():React.ReactElement => {
    const selectedAuthor = useObservable<AuthorType>(selectedAuthor$, null);
    const {data} = useObservable<Response<BookType[]>>(books$, initState);

    const booksList = data
        .filter(book => selectedAuthor && book.authorId === selectedAuthor.id)
        .map(book =>
            <li key={book.id}>{book.title} {book.isbn} {book.authorId}</li>
        );
    return <ul>{booksList}</ul>;
}

export default FilteredBook;