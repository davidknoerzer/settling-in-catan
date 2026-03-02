import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const isAuthorized = localStorage.getItem('catan_access') === 'true';

  if (isAuthorized) {
    return true;
  } else {
    return router.parseUrl('/login');
  }
};
