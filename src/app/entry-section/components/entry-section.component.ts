import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-section',
  templateUrl: './entry-section.component.html',
  styleUrls: ['./entry-section.component.scss'],
})
export class EntrySectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  showDialog() {
    const modal: Element | null = document.getElementById('login_modal');

    modal?.classList.remove('hhidden');
    modal?.classList.add('sshow');
  }

  closeDialog() {
    const modal: Element | null = document.getElementById('login_modal');

    console.log('here');

    modal?.classList.remove('sshow');
    modal?.classList.add('hhidden');
  }
}
