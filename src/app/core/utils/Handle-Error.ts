import { HttpErrorResponse } from '@angular/common/http';
import { StatusCodes } from '../enums/StatusCodeEnum';
import { throwError } from 'rxjs';
import { ClientSideError } from '../errors/AppError/ErrorUtilities/Client-Side-Error';
import { BadCredentielsError } from '../errors/AppError/ErrorUtilities/Bad-Creadentials-Error';
import { NotFoundError } from '../errors/AppError/ErrorUtilities/Not-Found-Error';

export let handleError = (error: HttpErrorResponse) => {
  switch (error.status) {
    case StatusCodes.CLIENT_ERROR:
      return throwError(() => new ClientSideError());
      break;
    case StatusCodes.BAD_REQUEST:
      return throwError(() => new BadCredentielsError());
      break;
    case StatusCodes.NOT_FOUND:
      return throwError(() => new NotFoundError());
      break;
    default:
      return throwError(
        () => new Error('Something bad happened; please try again later.')
      );
  }
};
