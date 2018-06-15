import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, Subscription } from 'rxjs';

export default class AbstractService {
    protected handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
