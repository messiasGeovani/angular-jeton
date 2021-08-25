import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [CommonModule],
  exports: [LoginFormModule],
})
export class LoginFormModule {}
