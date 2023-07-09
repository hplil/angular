import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AppModuleDemo } from './app/app.moduleDemo';


platformBrowserDynamic().bootstrapModule(AppModuleDemo)
  .catch(err => console.error(err));
