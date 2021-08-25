import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public email: string;
  public password: string;
  public userInputPlaceholder: string;

  @Output() closeEvent = new EventEmitter();

  constructor() {
    this.email = '';
    this.password = '';
    this.userInputPlaceholder = 'UserID or E-mail';
  }

  ngOnInit(): void {}

  public handleChangeEmailInput(value: string) {
    this.email = value;
  }

  public handleChangePasswordInput(value: string) {
    this.password = value;
  }

  public closeModal() {
    this.closeEvent.emit(null);
  }

  public handleLoginType(type: 'email' | 'phone') {
    const phoneSpanElement = document.getElementById('phone');
    const emailSpanElement = document.getElementById('email');

    if (type === 'phone') {
      emailSpanElement?.classList.remove('username-section', 'active');
      emailSpanElement?.classList.add('phone-section');
      phoneSpanElement?.classList.add('active');

      this.userInputPlaceholder = 'Phone Number';
    } else {
      phoneSpanElement?.classList.remove('active');
      emailSpanElement?.classList.remove('phone-section');
      emailSpanElement?.classList.add('username-section', 'active');

      this.userInputPlaceholder = 'UserID or E-mail';
    }
  }
}
