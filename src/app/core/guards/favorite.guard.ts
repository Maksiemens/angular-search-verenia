import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { PromptDialogComponent } from '@app/shared/components/dialogs/prompt-dialog/prompt-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class FavoriteGuard implements CanActivate {
  private correctPassword = 1234;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    const dialogRef = this.dialog.open(PromptDialogComponent);
    return dialogRef.afterClosed().pipe(
      map((result) => {
        if (this.correctPassword === result) {
          this.snackBar.open('Welcome to Favorite', 'Hooray!');
          return true;
        } else {
          this.snackBar.open('Password is incorrect ', 'Ok');
          this.router.navigate(['/']);
          return false;
        }
      }),
      take(1),
    );
  }
}
