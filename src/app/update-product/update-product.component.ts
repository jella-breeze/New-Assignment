import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {OverAllService} from '../over-all.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id;
  details: any;
  data: any;
  lForm: FormGroup;

  constructor(fb: FormBuilder, private route: Router, private routeActivated: ActivatedRoute,
              private http: HttpClient, private overAllService: OverAllService) {
    this.lForm = fb.group({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]),
      city: new FormControl('', Validators.required),
      gender: new FormControl('1', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.checkUser();
    this.getUser();
  }

  updateData() {
    this.data = this.details.find(detail => {
      return detail.id === this.id;
    });
  }

  getUser() {
    this.overAllService.getUser().subscribe(res => {
      this.details = res;
      this.updateData();
    });
  }

  checkUser() {
    this.routeActivated.params.subscribe(response => {
      this.id = +response.id;
    });
  }

  updateUserDetails(data) {
    const url = `http://localhost:3000/users/${this.id}`;
    this.http.put(url, data).subscribe(() => this.route.navigate(['/messages']));
  }


}
