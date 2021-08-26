import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components';
import { LoginFormModule } from '../login-form/login-form.module';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, LoginFormModule],
  exports: [ModalComponent],
})
export class ModalModule {}
