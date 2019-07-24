import {Component, OnInit, ViewChild} from '@angular/core';
import {OverAllService} from '../../over-all.service';
import {MatTableDataSource, MatSort, MatPaginator, MatDialogConfig, MatDialog} from '@angular/material';
import {LoginRegisterComponent} from '../../login-register/login-register/login-register.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Users} from '../../user';
import {BehaviorSubject, Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/table';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  users: any;
  user: any;
  listUser: MatTableDataSource<any>;
  dataSource = new UserDataSource(this.overAllService);
  searchKey;
  lForm: FormGroup;
  displayUsers: any = ['city', 'dateOfBirth', 'email', 'fullName',
    'gender', 'mobile', 'password', 'username', 'actions'];
  row: any;
  @ViewChild(MatSort, null) sort: MatSort;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  constructor(fb: FormBuilder, private  overAllService: OverAllService,
              private  dialog: MatDialog, private route: Router, private http: HttpClient) {

    this.user = this.overAllService.user;
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
    this.refector();
  }

  refector() {
    this.overAllService.getUser().subscribe(response => {
      this.users = response;
      this.listUser = new MatTableDataSource(this.users);
      this.listUser.sort = this.sort;
      this.listUser.paginator = this.paginator;
    });
  }

  logout() {
    localStorage.clear();
  }

  onSearch() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.listUser.filter = this.searchKey.trim().toLocaleLowerCase();
  }

  onEdit(id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    this.dialog.open(LoginRegisterComponent, dialogConfig);
  }

  populateForm(details) {
    this.lForm.setValue(details);
  }

  popDetail() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    this.dialog.open(LoginRegisterComponent, dialogConfig);
  }

  onSelect(element) {
    this.route.navigate(['/update', element.id]);
  }

  deleteUser(id: number) {
    this.overAllService.deleteUser(id).subscribe(() => this.refector());
  }
}

export class UserDataSource extends DataSource<any> {

  constructor(private  overAllService: OverAllService) {
    super();
  }

  connect(): Observable<Users[]> {
    return  this.overAllService.getUser();
  }

  disconnect() {

  }
}
