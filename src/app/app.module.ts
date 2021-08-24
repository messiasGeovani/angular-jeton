import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EntrySectionModule } from './entry-section/entry-section.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NavbarModule,
    EntrySectionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
