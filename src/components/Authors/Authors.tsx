import React  from 'react';
import {authors$, initState, selectedAuthor$} from "../../common/state/state";
import {useObservable} from "../../common/hooks/useObservable";
import {Response, AuthorType} from "../../common/types";
import './Author.css';
import Preloader from "../Preloader/Preloader";

const Authors = (): React.ReactElement => {
    const {data, isLoading} = useObservable<Response<AuthorType[]>>(authors$, initState);

    const authorsList = data.map((author:any) =>
            <li className="author--list"
                key={author.id}
                onClick={() => selectedAuthor$.next(author)}
            >
                {author.first_name} {author.last_name} {author.email}
            </li>
    );
    return isLoading ? <Preloader /> : <ul>{authorsList}</ul>;
}

export default Authors;