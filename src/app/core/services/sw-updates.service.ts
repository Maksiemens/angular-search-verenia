import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class SwUpdatesService {
  private checkInterval = 5 * 60 * 1000; // !5 minute

  constructor(
    private document: Document,
    private applicationRef: ApplicationRef,
    private swUpdate: SwUpdate,
  ) {}

  checkForUpdates(): void {
    if (this.swUpdate.isEnabled) {
      this.checkForUpdatesPeriodically();
      this.checkNewUpdateAvailable();
      this.checkActivatedUpdate();
    }
  }

  private checkForUpdatesPeriodically(): void {
    // !Periodically check for updates (after the app is stabilized).
    const appIsStable$ = this.applicationRef.isStable.pipe(first((isStable) => isStable));
    const everyFiveMinutes$ = interval(this.checkInterval);
    const everyFiveMinutesxHoursOnceAppIsStable$ = concat(appIsStable$, everyFiveMinutes$);
    everyFiveMinutesxHoursOnceAppIsStable$
      .pipe(
        tap(() => console.log('Periodically check for updates...')),
        untilDestroyed(this),
      )
      .subscribe(() => this.checkForUpdate());
  }

  private checkForUpdate(): void {
    this.swUpdate
      .checkForUpdate()
      .then(() => console.log('Checking for updates...'))
      .catch((error) => console.error('Checking for updates failure', error));
  }

  private checkNewUpdateAvailable(): void {
    this.swUpdate.available
      .pipe(
        tap((event) => console.log('Update available', event)),
        untilDestroyed(this),
      )
      .subscribe((event) => this.updateToLatest());
  }

  private updateToLatest(): void {
    console.log('Updating to latest version.');
    this.swUpdate.activateUpdate().then(() => this.document.location.reload());
  }

  private checkActivatedUpdate(): void {
    this.swUpdate.activated.pipe(untilDestroyed(this)).subscribe((event: any) => {
      console.log('Previous version: ', event.previous);
      console.log('Current version: ', event.current);
    });
  }
}
