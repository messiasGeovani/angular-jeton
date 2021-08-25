import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrySectionComponent } from './components';
import { ModalComponent } from '../modal/components';

@NgModule({
  declarations: [EntrySectionComponent, ModalComponent],
  imports: [CommonModule],
  exports: [EntrySectionComponent],
})
export class EntrySectionModule {}
