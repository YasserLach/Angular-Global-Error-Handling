import { AppError } from '../App-Error';

export class NotFoundError extends AppError {
  constructor() {
    super('Ressource Not Found, Please check your request');
  }

  customHandlingError() {}
}
