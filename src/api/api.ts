import {authors$, books$} from "../common/state/state";
import {books} from "../data/books";
import {authors} from "../data/authors";

export const fetchBook = () =>  {
    books$.next({
        data: [],
        isLoading: true,
    })
    setTimeout(() => {
        books$.next({
            data: books,
            isLoading: false
        });
    },5000)
}

export const fetchAuthors = () =>  {
    authors$.next({
        data: [],
        isLoading: true,
    })
    setTimeout(() => {
        authors$.next({
            data: authors,
            isLoading: false
        });
    },5000)
}