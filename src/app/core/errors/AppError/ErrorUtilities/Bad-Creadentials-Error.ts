import { AppError } from '../App-Error';

export class BadCredentielsError extends AppError {
  constructor() {
    super('Bad credentials error, Please check your request');
  }

  customHandlingError() {}
}
