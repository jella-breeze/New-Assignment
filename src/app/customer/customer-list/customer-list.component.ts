import {Component, OnInit} from '@angular/core';
import {FormGroup, FormArray, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {ForbiddenNameValidator} from '../../shared/user-name.validator';
import {PasswordValidator} from '../../shared/password.validator';
import {OverAllService} from '../../over-all.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private overAllService: OverAllService) {
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), ForbiddenNameValidator(/password/)]],
      password: [''],
      confirmPassword: [''],
      email: [''],
      subscribe: [false],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      alternateEmails: this.fb.array([])
    }, {validator: PasswordValidator});

    this.registrationForm.get('subscribe').valueChanges
      .subscribe(checkedValue => {
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email.setValidators(Validators.required);
        } else {
          email.clearValidators();
        }
        email.updateValueAndValidity();
      });
  }

  get userName() {
    return this.registrationForm.get('userName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''));
  }

  onSubmit() {
    this.overAllService.register(this.registrationForm.value)
      .subscribe(
        response => alert('added successfully'),
        error => console.error('Error!', error)
      );
  }

}
