import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';

const firebaseConfig = {
  apiKey: 'AIzaSyBBn659p3fUw7M3Yv7bqLhduKJkwQ_1_b0',
  authDomain: 'cut-the-bull.firebaseapp.com',
  projectId: 'cut-the-bull',
  storageBucket: 'cut-the-bull.appspot.com',
  messagingSenderId: '895982368692',
  appId: '1:895982368692:web:2b1f7f124faf6ca69ae4e1',
  measurementId: 'G-0E5H8RTLCV',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),

    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),

    /*  InMemoryWebApiModule.forRoot(DataService, { delay: 1000 }) */
  ],
};
