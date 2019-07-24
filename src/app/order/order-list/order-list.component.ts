import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OverAllService} from '../../over-all.service';
import {Router} from '@angular/router';
import {DataSource} from '@angular/cdk/table';
import {Observable, Subject} from 'rxjs';
import {Product} from '../../user';
import {Location} from '@angular/common';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  oForm: FormGroup;
  orderLIst;
  dataValue = new ProductDataSource(this.overAllService);
  displayProducts: any = ['name', 'price', 'actions'];

  constructor(private route: Router, fb: FormBuilder, private overAllService: OverAllService, public location: Location) {
    this.oForm = fb.group({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.getOrderLIst();
  }

  getOrderLIst() {
    this.dataValue.loadData$();
  }

  addProductDetails() {

    this.overAllService.addProduct(this.oForm.value).subscribe(add => this.getOrderLIst());
  }

  onUpdate(element) {
    this.route.navigate(['/new', element.id]);
  }

  deleteProduct(id: number) {
    this.overAllService.deleteUser(id).subscribe();
  }

}

export class ProductDataSource extends DataSource<any> {


  constructor(private  overAllService: OverAllService) {
    super();
  }

  private refreshPage$ = new Subject<Product[]>();

  loadData$() {
    return this.overAllService.getProduct()
      .pipe(
        tap((u) => {
          this.refreshPage$.next(u);
        })).subscribe();
  }

  connect(): Observable<Product[]> {
    return this.refreshPage$.asObservable();
  }

  disconnect() {
    this.refreshPage$.complete();

  }
}
