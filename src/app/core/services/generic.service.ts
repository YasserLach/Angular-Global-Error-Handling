import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { User } from '../models/User';
import { handleError } from '../utils/Handle-Error';

export class GenericService {
  constructor(private baseURL: string, private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL).pipe(catchError(handleError));
  }

  getOneRessource(id: string): Observable<any> {
    return this.http
      .get<any>(this.baseURL + '/' + id)
      .pipe(catchError(handleError));
  }

  addOne(ressource: User | any) {
    return this.http
      .post(this.baseURL, ressource)
      .pipe(catchError(handleError));
  }
}
