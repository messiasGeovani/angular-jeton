import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
