import {Component, OnInit} from '@angular/core';
import {OverAllService} from '../../over-all.service';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {LoginComponent} from '../../login/login.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  constructor(private overAllService: OverAllService, private route: Router,
              private  dialog: MatDialog, public dialogRef: MatDialogRef<LoginRegisterComponent>) {
  }

  lForm: FormGroup = new FormGroup({
    id: new FormControl(null),
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

  onClear() {
    this.lForm.reset();
  }

  addUserDetails() {
    if (this.lForm.value.id != null) {
      alert('there is the problem');
    }

    this.overAllService.getUser().subscribe(response => {
        const found = response.find(u => {
          return u.username === this.lForm.value.username && u.email === this.lForm.value.email;
        });
        if (found) {
          alert('already registered!');
        } else {
          {
            this.overAllService.addUser(this.lForm.value).subscribe(add => add);
            this.popLogin();
            this.onClose();
          }
        }
      });
    }
    popLogin() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '30%';
      this.dialog.open(LoginComponent, dialogConfig);

    }
    onClose() {
      this.dialogRef.close();
    }
  }
