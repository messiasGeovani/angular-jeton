import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrySectionComponent } from './components';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  declarations: [EntrySectionComponent],
  imports: [CommonModule, ModalModule],
  exports: [EntrySectionComponent],
})
export class EntrySectionModule {}
