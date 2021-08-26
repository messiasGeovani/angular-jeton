import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterSectionComponent } from './components';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  declarations: [FooterSectionComponent],
  imports: [CommonModule, ModalModule],
  exports: [FooterSectionComponent],
})
export class FooterSectionModule {}
