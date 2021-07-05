import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DOCUMENT } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from '@app/core/interceptors/error.interceptor';
import { ResponseInterceptor } from '@app/core/interceptors/response.interceptor';
// !NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { effects, ROOT_REDUCERS } from '@app/core/store';
import * as fromRouter from '@app/core/store/reducers/router.reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
// !End NGRX
import { HeaderModule } from '@app/core/components/header/header.module';
import { FooterModule } from '@app/core/components/footer/footer.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PromptDialogModule } from '@app/shared/components/dialogs/prompt-dialog/prompt-dialog.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    // My Modules
    HeaderModule,
    FooterModule,
    // Material Modules
    MatSnackBarModule,
    PromptDialogModule,

    // !NGRX
    StoreModule.forRoot(ROOT_REDUCERS, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      name: 'NGRX Test Task Store App',
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: fromRouter.routerFeatureKey,
      serializer: fromRouter.CustomSerializer,
    }),
    EffectsModule.forRoot(effects),
    // !ServiceWorker
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    // !Global DOCUMENT
    {
      provide: Document,
      useExisting: DOCUMENT,
    },
    // !HTTP_INTERCEPTORS
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {}
