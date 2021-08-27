import {books$} from "../common/state/state";
import {books} from "../data/books";

export const fetchBooks = () =>  {
    setTimeout(() => {
        books$.next({books});
    },5000)
}