import {Component, OnInit} from '@angular/core';
import {OverAllService} from '../over-all.service';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material';
import {LoginRegisterComponent} from '../login-register/login-register/login-register.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private  route: Router,
              private overAllService: OverAllService, public dialogRef: MatDialogRef<LoginRegisterComponent>) {
  }
  lForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]),
    city: new FormControl('', Validators.required),
    gender: new FormControl('1', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required)
  });

  ngOnInit() {
  }

  checkUser() {
    this.overAllService.getUser().subscribe(response => {
      const found = response.find(u => {
        return u.username === this.lForm.value.username && u.password ===
          this.lForm.value.password;
      });
      if (found) {
        localStorage.setItem('user', JSON.stringify({user: found}));
        alert('Now you are logged in as' + found.fullName);
        if (found) {
          this.onClose();
        }
      } else {
        alert('Invalid Input');
      }
    });
  }
  onClose() {
      this.dialogRef.close();
  }
}
