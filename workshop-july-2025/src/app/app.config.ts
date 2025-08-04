import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp} from '@angular/fire/app'

export const appConfig: ApplicationConfig = {

  
  providers: [
    provideFirebaseApp(() => initializeApp()),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes)
  ],
}
