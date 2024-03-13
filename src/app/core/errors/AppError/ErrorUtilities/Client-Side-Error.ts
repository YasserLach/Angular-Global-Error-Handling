import { AppError } from '../App-Error';

export class ClientSideError extends AppError {
  constructor() {
    super('This is a client side error');
  }

  customHandlingError() {}
}
