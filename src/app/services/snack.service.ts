import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SnackService {
  constructor(private snackBar: MatSnackBar, private router: Router) {}
  authError(): Subscription {
    this.snackBar.open('You Muse be Looged in To Visit!', 'Login', {
      duration: 5000,
    });

    return this.snackBar._openedSnackBarRef
      .onAction()
      .pipe(tap((_) => this.router.navigate(['/login'])))
      .subscribe();
  }
}
