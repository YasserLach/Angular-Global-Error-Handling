import { Injectable } from '@angular/core';
import { GenericService } from '../core/services/generic.service';
import { HttpClient } from '@angular/common/http';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService extends GenericService {
  constructor(http: HttpClient) {
    super('http://localhost:3000/users', http);
  }
}
