import { ErrorHandler, Inject, Injectable, Injector } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandler implements ErrorHandler {
  constructor(@Inject(Injector) private readonly injector: Injector) {}

  private get toastService() {
    return this.injector.get(HotToastService);
  }

  handleError(error: any): void {
    this.toastService.error(error.message);
    error.customHandlingError();
  }
}
