import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();

  // TODO: Add logger service instead of this mess.
  if (window) {
    // eslint-disable-next-line no-multi-assign
    window.console.log = window.console.warn = window.console.info = () => {};
  }
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
