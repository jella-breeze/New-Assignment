import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OverAllService} from '../over-all.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {
  id;
  details: any;
  data: any;
  oForm: FormGroup;


  constructor(fb: FormBuilder, private route: Router, private routeActivated: ActivatedRoute,
              private http: HttpClient, private overAllService: OverAllService) {
    this.oForm = fb.group({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
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
    this.overAllService.getProduct().subscribe(res => {
      this.details = res;
      this.updateData();
    });
  }

  checkUser() {
    this.routeActivated.params.subscribe(response => {
      this.id = response.id;
    });
  }

  updateProductOrder(data) {
    const url = `http://localhost:3000/products/${this.id}`;
    this.http.put(url, data).subscribe(() => this.route.navigate(['/order']));
  }


}
