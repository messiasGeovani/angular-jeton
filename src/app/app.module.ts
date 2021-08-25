import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BusinessAccountSectionModule } from './business-account-section/business-account-section.module';
import { DownloadSectionModule } from './download-section/download-section.module';
import { EntrySectionModule } from './entry-section/entry-section.module';
import { NavbarModule } from './navbar/navbar.module';
import { PaymentSectionModule } from './payment-section/payment-section.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NavbarModule,
    EntrySectionModule,
    BusinessAccountSectionModule,
    PaymentSectionModule,
    DownloadSectionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
