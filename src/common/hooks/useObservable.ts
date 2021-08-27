import {useEffect, useState} from "react";
import {Observable} from "rxjs";

export function useObservable<T extends any>(observable: Observable<any>, initState?: any) {
    const [state, setState] = useState<T>(initState);

    useEffect(() => {
        const subscription = observable.subscribe(setState);
        return () => subscription.unsubscribe();
    }, [observable]);

    return state;
}