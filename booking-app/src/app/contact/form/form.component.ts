import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  haveError: boolean = false;
  errorMessage: string = '';
  isAlertOpen: boolean = false;

  constructor(private router: Router) {}

  formHandler(form: NgForm): void {
    let formValue = form.value;
    this.haveError = false;

    let emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (formValue.name === '') {
      this.haveError = true;
      this.errorMessage = 'Name field is required!';
    } else if (formValue.name.length < 3) {
      this.haveError = true;
      this.errorMessage = 'Min name length is 3 characters!';
    } else if (!emailRegx.test(formValue.email)) {
      this.haveError = true;
      this.errorMessage = 'Invalid email!';
    } else if (formValue.subject === '') {
      this.haveError = true;
      this.errorMessage = 'Subject field is required!';
    } else if (formValue.message === '') {
      this.haveError = true;
      this.errorMessage = 'Message field is required!';
    }

    if (!this.haveError) {
      this.isAlertOpen = true;
      setTimeout(() => {
        this.router.navigate([`/`]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 5000)
      console.log(formValue)
    }
  }
}
