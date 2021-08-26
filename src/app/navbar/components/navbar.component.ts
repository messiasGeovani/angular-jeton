import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public handleOpenDropdown() {
    const dropdownElement: Element | null =
      document.getElementById('dropdown_menu');

    const isHidden = dropdownElement?.classList.contains('mobile-hide');

    if (isHidden) {
      dropdownElement?.classList.remove('mobile-hide');
      dropdownElement?.classList.add('sshow');
    } else {
      dropdownElement?.classList.remove('sshow');
      dropdownElement?.classList.add('mobile-hide');
    }
  }
}
