import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss'],
})
export class FooterSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleOpenModal() {
    const modal: Element | null = document.getElementById('login_modal_footer');

    modal?.classList.remove('hhidden');
    modal?.classList.add('sshow');
  }

  handleCloseModal() {
    const modal: Element | null = document.getElementById('login_modal_footer');

    modal?.classList.remove('sshow');
    modal?.classList.add('hhidden');
  }
}
