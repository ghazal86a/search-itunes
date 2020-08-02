import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  public searchTerm(config): Observable<any> {
    // const config = new HttpRequest('GET', `https://itunes.apple.com/search?term=taylor`,  { responseType: 'json' });
    // const params = new HttpParams()
    // .set('docType', 'reportJson');
    return this.http.request(config).pipe(map(response => {
      return response;
    }),
    catchError(this.handleError));
    // .pipe(
    //   map(response => {
    //     return response;
    //   }));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
