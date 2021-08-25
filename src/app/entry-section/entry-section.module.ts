import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrySectionComponent } from './components';
import { ModalComponent } from '../modal/components';
import { LoginFormComponent } from '../login-form/components';

@NgModule({
  declarations: [EntrySectionComponent, ModalComponent, LoginFormComponent],
  imports: [CommonModule],
  exports: [EntrySectionComponent],
})
export class EntrySectionModule {}
