import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-section',
  templateUrl: './entry-section.component.html',
  styleUrls: ['./entry-section.component.scss'],
})
export class EntrySectionComponent implements OnInit {
  public openModal: boolean;

  constructor() {
    this.openModal = false;
  }

  ngOnInit(): void {}

  handleOpenModal() {
    const modal: Element | null = document.getElementById('login_modal');

    modal?.classList.remove('hhidden');
    modal?.classList.add('sshow');
  }

  handleCloseModal() {
    const modal: Element | null = document.getElementById('login_modal');

    modal?.classList.remove('sshow');
    modal?.classList.add('hhidden');
  }
}
