export type BookType = {
    id: string;
    authorId: number;
    title: string;
    isbn: string;
}

export type AuthorType = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
}

export type Response<T> = {
    data: T,
    isLoading: boolean,
}