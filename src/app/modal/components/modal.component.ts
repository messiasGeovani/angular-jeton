import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.element.nativeElement.addEventListener('click', () => {
      this.close();
    });
  }

  close() {
    this.element.nativeElement.classList.remove('sshow');
    this.element.nativeElement.classList.add('hhidden');
  }
}
