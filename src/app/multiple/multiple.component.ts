import { Component, OnInit } from '@angular/core';
import { Home} from '../user';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.css']
})
export class MultipleComponent implements OnInit {
  home = new Home();
  dataArray = [];
  constructor() { }

  ngOnInit() {
    this.dataArray.push(this.home);
  }
}
