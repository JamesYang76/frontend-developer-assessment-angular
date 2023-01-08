import { HttpErrorResponse } from '@angular/common/http';

export function getErrorMessage(errorRes: HttpErrorResponse): string {
  if (typeof errorRes.error === 'string') {
    return errorRes.error;
  }

  return errorRes.message;
}
