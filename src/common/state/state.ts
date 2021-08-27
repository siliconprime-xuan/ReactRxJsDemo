import {BehaviorSubject} from "rxjs";
import {AuthorType, BookType, Response} from "../types";

export const initState = {
    data: [],
    isLoading: false,
}

export const books$ = new BehaviorSubject<Response<BookType[]>>(initState);
export const authors$ = new BehaviorSubject<Response<AuthorType[]>>(initState);
export const selectedAuthor$ = new BehaviorSubject<AuthorType | null>(null);