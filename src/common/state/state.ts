import {BehaviorSubject, Subject} from "rxjs";
import {books} from "../data/books";
import {authors} from "../data/authors";

export const books$ = new BehaviorSubject(books);
export const authors$ = new BehaviorSubject(authors);
export const selectedAuthor$ = new Subject();